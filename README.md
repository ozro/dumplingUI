# DumplingBot

## Network setup
On the Raspberry Pi
```
export ROS_MASTER_URI=http://jessyxie.wv.cc.cmu.edu:11311
export ROS_IP=arcpi.wv.cc.cmu.edu
```
On Jessy's laptop
```
export ROS_IP=jessyxie.wv.cc.cmu.edu
```

# DumplingBot Web User Interface

## Dependencies
```
$ sudo apt-get install ros-kinetic-rosbridge-suite
```

## To run
Ensure roscore is running on the local machine.

```
$ source /opt/ros/kinetic/setup.bash
$ roscore
```

Run all nodes needed to operate the robot.  
To visualize videos, we need to run the webserver.
```
rosrun web_video_server web_video_server
```
Start the rosbridge server. By default this runs on port 9090.

```
roslaunch rosbridge_server rosbridge_websocket.launch
```

Now open `index.html` with a web browser.
