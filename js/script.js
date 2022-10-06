$(document).ready(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

    console.log(moment());

    var time = moment();
    var hour = moment().hours();

    function plannerActions() {
        $('.time-block').each(function () {
            var id = $(this).attr('id');
            var userInput = localStorage.getItem(id);

            if (userInput != null) {
                $(this).find('.description').val(userInput);

            }  
        });
    }


    plannerActions();
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function () {
        var id = $(this).parent().attr('id');
        var userInput = $(this).siblings('.description').val();
        localStorage.setItem(id, userInput);
    });

    function timeColor() {
        hour = time.hour();
        $('.time-block').each(function () {
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
