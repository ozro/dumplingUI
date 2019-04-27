var call_pub = new ROSLIB.Topic({
    ros:ros,
    name:'help_status',
    messageType:'std_msgs/String'
});

var help = new ROSLIB.Message({
    data:'help'
});

$("#call").click(function(){
    msg = new ROSLIB.Message({
        data:false
    });
    estop_pub.publish(msg);
    call_pub.publish(help);
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
