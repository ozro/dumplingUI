$(document).ready(function(){
    hideDashboard(false);
    hideControls(true);
    hideDelivery(true);
    hideLoading(true);
});

function hideDashboard(flag){
    $(".dashboard-content").each(function(index){
        if(flag){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    });
}

function hideLoading(flag){
    $(".loading-content").each(function(index){
        if(flag){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    });
}
function hideDelivery(flag){
    $(".delivery-content").each(function(index){
        if(flag){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    });
}
function hideControls(flag){
    $(".control-content").each(function(index){
        if(flag){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    });
}

$( ".dashboard-link" ).click(function() {
    hideDashboard(false);
    hideControls(true);
    hideDelivery(true);
    hideLoading(true);
});
$( ".delivery-link" ).click(function() {
    hideDashboard(true);
    hideControls(false);
    hideDelivery(false);
    hideLoading(true);
});
$( ".loading-link" ).click(function() {
    hideDashboard(true);
    hideControls(false);
    hideDelivery(true);
    hideLoading(false);
});