from tracking import tracking


def main():
    # Connect to database
    tracking.connect()

    # Start tracking app for t seconds
    tracking.startTracking(15.0)


if __name__ == "__main__":
    main()

