$(document).ready( function(){
    
    $(document).on('click', '#start-timer', function(){
        var id = $('#timer-length').val() != "custom" ? "timer" : "custom"
        var distance = parseInt($('#'+id+'-length').val()) * (60000) - 1000;
        $('#timer-options').find("*").prop("disabled", true);

        var interval = setInterval(function() {
            var minutes = Math.floor((distance) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $("#pomodoro-timer").html(minutes + ":" + seconds);            
            distance -= 1000;

            if (distance < 0) {
              clearInterval(interval);
              $("#pomodoro-timer").html("EXPIRED");
            }
          }, 1000);
    });

    $(document).on('change', '#timer-length', function(){        
        var isCustom = $('#timer-length').val() == "custom";
        $("#custom-length").toggle(isCustom);
        if(!isCustom){
            $("#pomodoro-timer").html($('#timer-length').val() + ":00");
        }
    });
    
    $(document).on('keyup', '#custom-length', function(){     
        $("#pomodoro-timer").html($('#custom-length').val() + ":00");
    });
    $(document).on('keyup', '#task-to-complete', function(){ 
        $('#start-timer').prop("disabled", $('#task-to-complete').val().length < 1);
    });
});