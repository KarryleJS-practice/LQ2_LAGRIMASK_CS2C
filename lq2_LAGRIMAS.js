name = input("Karryle Lagrimas: ")
address = input("Bugnay, Candon City, Ilocos Sur: ")
age = int(input("19: "))
class_role = input("Enter your class role ( Student): ")
course = input("BSCS: ")

if course == "BSCS":
  if class_role == "Officer":
    for i in range(int(age / 4)):
      print(name)
  elif class_role == "Student":
    for i in range(int(age / 4)):
      print(name)
  elif class_role == "Teacher":
    for i in range(int(age / 4)):
      print(name)
  else:
    print("Invalid class role")
elif course == "BSM":
  if class_role == "Officer":
    for i in range(int(age / 4)):
      print(name)
  elif class_role == "Student":
    for i in range(int(age / 4)):
      print(name)
  elif class_role == "Teacher":
    for i in range(int(age / 4)):
      print(name)
  else:
    print("Invalid class role")
elif course == "BAEL":
  if class_role == "Officer":
    for i in range(int(age / 4)):
      print(name)
  elif class_role == "Student":
    for i in range(int(age / 4)):
      print(name)
  elif class_role == "Teacher":
    for i in range(int(age / 4)):
      print(name)
  else:
    print("Invalid class  role")
else:
  print("Invalid course")
