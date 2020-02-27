let bar = 0;

function plus(dig) {

    if (dig.data.param1 == 7) {
        if (bar < 93) {
            bar = bar + dig.data.param1; 
        }
        
    } else if (dig.data.param1 == 3) {
        if (bar < 97) {
            bar = bar + dig.data.param1; 
        }
        
    } else {
        bar = bar + dig.data.param1; 
    }
    $("#my-progress-bar").width(bar + '%')
}

function init() {
    $(".1").click({param1: 1}, plus);
    $(".3").click({param1: 3}, plus);
    $(".7").click({param1: 7}, plus);
}

$(document).ready(init);