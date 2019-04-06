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

# Hosting using Apache2
## Dependency
```
$ sudo apt install apache2
```
## Settting up conf file
```
$ cd /etc/apache2/sites-available/
$ sudo cp 000-default.conf dumplingUI.conf
$ sudo vim dumplingUI.conf
```
We need to move the website to the correct folder.
```
$ cp -r ~/dumplingUI /var/www/dumplingUI
```

Change the Document root to `/var/www/dumplingUI`. Now we need to activate the new website and disable the old.
```
$ sudo a2ensite dumplingUI.conf
$ sudo a2dissite 000-default.conf
$ service apache2 reload
```

Now go to `localhost` and you should see the website.
