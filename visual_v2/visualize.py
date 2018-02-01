from Tkinter import *

def move_cars(num):
    if num == 5:
        return
    c.move(leader, num*10, 0)
    root.after(1000, move_cars(num+1))


root = Tk()
root.attributes("-topmost", True)

c = Canvas(root, width=1920, height=720)
c.pack()

width = 30;
length = 60;

follower = c.create_rectangle(0, 0, length, width, fill="limegreen", width=0)
leader = c.create_rectangle(length, 0, length*2, width, fill="brown1", width=0)

root.after(0, move_cars(0))
mainloop()
