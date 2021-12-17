import tkinter as tk
from tkinter import ttk
from tkinter import Tk
from tkinter import Canvas
from tkinter import messagebox as mess
from tkinter import *
import tkinter.simpledialog as tsd
# from capstone_gesture_control import *
# from capstone_gesture_control.capstone_hand_ges import handgesture
# from face_triplet.recognize_video import *
from start import *
from add_user import add_user
from client import *


data=""
s=""
print(type(s))
def save_data():
    input_1 = txt.get(1.0,END)
    input_1=input_1.rstrip("\n")
    print(type(input_1))
    input_2 = txt2.get(1.0,END)
    input_2=input_2.rstrip("\n")
    print(input_2)
    add_user(input_1,input_2)
    

r = tk.Tk()

r.geometry("1280x720")
r.title('@ Factor Lock')
message = tk.Label(r, text="2 Factor Lock For Visually Disabled" ,fg="yellow",bg="#8B4513" ,width=55 ,height=1,font=('times', 29, ' bold '))
message.place(x=10, y=10)

head1 = tk.Label(r, text="                       For New User                      ", fg="black" ,font=('times', 17, ' bold ') )
head1.place(x=10,y=80)

head2 = tk.Label(r, text="                       For Already Registered                       ", fg="black" ,font=('times', 17, ' bold ') )
head2.place(x=700,y=80)
# takeImg = tk.Button(r, text="Add user", command=user_details  ,fg="white"  ,bg="blue"  ,width=34  ,height=1, activebackground = "white" ,font=('times', 15, ' bold '))
# takeImg.place(x=400, y=100)
#save.pack()
lbl = tk.Label(r, text="User Name",width=25  ,height=1  ,fg="black"  ,bg="#00aeff" ,font=('times', 17, ' bold ') )
lbl.place(x=30, y=150)

txt = tk.Text(r,height=1,width=32 ,fg="black",font=('times', 15, ' bold '))
txt.place(x=30, y=183)

lbl2 = tk.Label(r, text="Category",width=25  ,fg="black"  ,bg="#00aeff" ,font=('times', 17, ' bold '))
lbl2.place(x=30, y=300)

txt2 = tk.Text(r,height=1,width=32 ,fg="black",font=('times', 15, ' bold ')  )
txt2.place(x=30, y=333)

button1 = tk.Button(r, text="Start Application", command=client  ,fg="white"  ,bg="blue"  ,width=25  ,height=1, activebackground = "white" ,font=('times', 15, ' bold '))
button1.place(x=800, y=150)

takeImg = tk.Button(r, text="Add face Data", command=save_data  ,fg="white"  ,bg="blue"  ,width=25  ,height=1, activebackground = "white" ,font=('times', 15, ' bold '))
takeImg.place(x=50, y=400)
r.mainloop()

# print(data)

