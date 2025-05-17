import json

# Maximum number of records to display
MAX_RECORDS = 10

# Dummy data to simulate attendance records
attendance_records = []

def display_records():
    return json.dumps({'records': attendance_records[-MAX_RECORDS:]})

def submit_attendance(data):
    student_name = data.get('studentName')
    if student_name:
        attendance_records.append(student_name)
        return json.dumps({'success': True})
    else:
        return json.dumps({'success': False})

# Main loop
while True:
    print("\nAttendance System Menu:")
    print("1. Display Records")
    print("2. Submit Attendance")
    print("3. View Attendance Records")
    print("4. Exit")

    choice = input("Enter your choice (1/2/3/4): ")

    if choice == '1':
        print(display_records())
    elif choice == '2':
        try:
            data = json.loads(input("Enter JSON data: "))
            print(submit_attendance(data))
        except json.JSONDecodeError:
            print("Invalid JSON format.")
    elif choice == '3':
        print(display_records())
    elif choice == '4':
        print("Exiting the Attendance System.")
        break
    else:
        print("Invalid choice. Please enter 1, 2, 3, or 4.")





