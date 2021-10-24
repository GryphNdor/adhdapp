import sys
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow

def window():
  app = QApplication(sys.argv)
  win = QMainWindow()
  win.setGeometry(200,200,500,300)
  win.setWindowTitle("test")

  win.show()
  sys.exit(app.exec_())

window()