$("#call").click(function(){
   alert("Help is on the way") 
});

var done_pub = new ROSLIB.Topic({
    ros:ros,
    name:'serve_status',
    messageType:'std_msgs/String'
});

var done = new ROSLIB.Message({
    data:'done'
});

$("#done").click(function(){
    trayVel.publish(closeVel);
    done_pub.publish(done);
});
