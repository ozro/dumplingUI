//Item selection modal menu
var counts = new Array(3).fill(0); 
var table = 1;
var jobs = [];

updateItemMenu();
updateTableMenu();
updateJobs();

$('#itemButton').click(function () {
    updateItemMenu();
});

$('#itemModal .pizza').click(function(){
    counts[0]+=1;
    updateItemMenu();
    return false;
});
$('#itemModal .coffee').click(function(){
    counts[1]+=1;
    updateItemMenu();
    return false;
});
$('#itemModal .icecream').click(function(){
    counts[2]+=1;
    updateItemMenu();
    return false;
});

$('#itemModal .clear').click(function(){
    counts[0] = 0;
    counts[1] = 0;
    counts[2] = 0;
    updateItemMenu();
});

function updateItemMenu(){
    $("#itemModal .pizza b").text(counts[0]);
    $("#itemModal .coffee b").text(counts[1]);
    $("#itemModal .icecream b").text(counts[2]);


    $("#itemButton .pizza").text(counts[0]);
    $("#itemButton .coffee").text(counts[1]);
    $("#itemButton .icecream").text(counts[2]);

    if(counts[0] != 0 || counts[1] != 0 || counts[2] !=0){
        $("#add").attr("disabled", false);
    }
    else{
        $("#add").attr("disabled", true);
    }
};

function clearCounts(){
    counts[0] = 0;
    counts[1] = 0;
    counts[2] = 0;
    updateItemMenu();
};

//Table selection modal menu
$('#tableButton').click(function () {
    updateTableMenu();
});

$('#t1').click(function(){
    table=1;
    updateTableMenu();
});
$('#t2').click(function(){
    table=2;
    updateTableMenu();
});
$('#t3').click(function(){
    table=3;
    updateTableMenu();
});
$('#t4').click(function(){
    table=4;
    updateTableMenu();
});
$('#t5').click(function(){
    table=5;
    updateTableMenu();
});
function updateTableMenu(){
    $("#tableButton span").text(table);
};

//Add job
$('#add').click(function(){
    jobs.push({table:table, counts:counts.slice()});
    updateJobs();
    clearCounts();
});

//Remove job
$('#remove').click(function(){
    jobs.pop();
    updateJobs();
});

//Clear jobs
$('#clear').click(function(){
    jobs = [];
    updateJobs();
});

function updateJobs(){
    if(jobs.length == 0){
        $('#dest .empty').show();
        $('#remove').attr('disabled', true);
        $('#clear').attr('disabled', true);
        $('#send').attr('disabled', true);
    }
    else{
        $('#dest .empty').hide();
        $('#remove').attr('disabled', false);
        $('#clear').attr('disabled', false);
        $('#send').attr('disabled', false);
    }
    var rows = "";
    $.each(jobs, function(index, item){
        var row = '<tr>';
        row += '<td><h1><i class="fas fa-map-marker-alt"></i> ' + item.table + ' </h1></td>';
        row += '<td><h1><i class="fas">🥟</i> ' + item.counts[0] + '</h1></td>';
        row += '<td><h1><i class="fas">🍚</i> ' + item.counts[1] + '</h1></td>';
        row += '<td><h1><i class="fas">🍵</i> ' + item.counts[2] + '</h1></td>';
        rows += row;
    });
    $('#dest tbody').html(rows);
    $('#confirmModal tbody').html(rows);
};

var order_pub = new ROSLIB.Topic({
    ros:ros,
    name:'table_order',
    messageType:'std_msgs/Int16MultiArray'
});

//Send robot
$('#confirmed').click(function(){
    trayVel.publish(closeVel);
    done_pub.publish(done);

    orders = [];

    for(var i = 0; i < jobs.length; i++){
        orders.push(jobs[i].table);
    }
    orders.push(0);

    var order = new ROSLIB.Message({
        data:orders
    });

    order_pub.publish(order);
});
