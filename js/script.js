
$(document).ready(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

    console.log(moment());

    var time = moment();
    var hour = moment().hours();
   
    function plannerActions() {
        $('.time-section').each(function () {
            var id = $(this).attr('id');
            var userInput = localStorage.getItem(id);

            if (userInput != null) {
                $(this).find('.info').val(userInput);

            }  
        });
    }

    plannerActions();
    var savePress = $('.savePress');
    savePress.on('click', function () {
        var id = $(this).parent().attr('id');
        var userInput = $(this).siblings('.info').val();
        localStorage.setItem(id, userInput);
    });
   
    function timeColor() {
        hour = time.hour();
        $('.time-section').each(function () {
            var targetHour = parseInt($(this).attr('id'));

            if (targetHour < hour) {
                $(this).addClass('past')
            }
            else if (targetHour === hour) {
                $(this).addClass('present')
            }
            else if (targetHour > hour) {
                $(this).addClass('future')
            }
        });
    }

    timeColor();
})