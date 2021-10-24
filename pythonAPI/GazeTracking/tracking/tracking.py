import sys
import time
import random

import cv2
import psycopg2
import matplotlib.pyplot as plt
import seaborn as sns

from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow
from gaze_tracking import GazeTracking


def window(text):
    app = QApplication(sys.argv)
    win = QMainWindow()
    win.setGeometry(200, 200, 500, 300)
    win.setWindowTitle(text)

    win.show()
    sys.exit(app.exec_())


def connect():
    global conn
    conn = psycopg2.connect(
        user='jay',
        password='jaykatyan123',
        host='free-tier.gcp-us-central1.cockroachlabs.cloud',
        port='26257',
        database='irys-2003-4324.defaultdb'
    )


def startTracking(delay):
    # Initialize Variables
    times = []
    concentration = []
    sec = 0
    distracted = 0
    cur = conn.cursor()

    # Create the table sample
    cur.execute("CREATE TABLE IF NOT EXISTS eye_values (id INT PRIMARY KEY, number FLOAT)")

    # Initialize Camera
    gaze = GazeTracking()
    webcam = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    while sec < delay - 0.1:
        # Read the frame
        _, frame = webcam.read()

        # Analyze the frame
        gaze.refresh(frame)

        # Determine concentration percentage
        if gaze.is_blinking():
            distracted += 1
            concentration.append("Distracted")
            print("+\n")
        elif gaze.is_right():
            distracted += 1
            concentration.append("Distracted")
            print("+\n")
        elif gaze.is_left():
            distracted += 1
            concentration.append("Distracted")
            print("+\n")
        else:
            concentration.append("Concentrated")

        sec += 0.1
        times.append(sec)
        print(str(sec) + "\n")

        time.sleep(0.1)

    # Calculate Time Distracted
    timeDistracted = distracted / (delay * 10)

    # Add Data to DB
    cur.execute("INSERT INTO eye_values (id, number) VALUES ("+str(random.randrange(10000))+"," + str(int(timeDistracted)) + ")")
    conn.commit()

    # Display Data
    print("Seconds distracted: " + str(delay * timeDistracted))
    generatePlot(times, concentration)

    # Closing of the database connection.
    cur.close()
    conn.close()


def generatePlot(x, y):
    sns.set_theme(style="darkgrid")
    plt.figure(figsize=(9, 6), dpi=100)
    plt.plot(x, y)
    plt.title('Distraction vs Time')
    plt.xlabel('Time (Seconds)')
    plt.ylabel('Distracted')
    plt.savefig('graph.png')
