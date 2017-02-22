/*global console,$*/


$(function() {
    $('.form').find('input, textarea').on('keyup blur focus', function(e) {
        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if ($this.val() === '') {
                label.removeClass('highlight');
            } else if ($this.val() !== '') {
                label.addClass('highlight');
            }
        }

    });

    $('.tab a').on('click', function(e) {
        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        var target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });
    $('.datepicker').pickadate({

        selectMonths: true, // Creates a dropdown to control month

        selectYears: 1 // Creates a dropdown of 15 years to control year

    });

});

$(function() {
    $('.firstName').blur(function() {
        if ($('.firstName').val().length <= 4) {
            $(this).siblings('.lengthMin').slideDown();
            $(this).addClass('invalid');
        } else {
            $(this).siblings('.lengthMin').slideUp();
        }
        if (/^[a-zA-Z0-9- ]*$/.test($('.firstName').val()) == false) {
            $(this).siblings('.specChars').slideDown();
            $(this).addClass('invalid');
        } else {
            $(this).siblings('.specChars').slideUp();
        }
    });
    $('input').blur(function() {
        if (!$('.firstName').hasClass('invalid')) {
            $('.btn-large').removeAttr('disabled');
        } else {
            if (!$('.btn-large').attr('disabled')) {
                $('.btn-large').attr('disabled', 'disabled');
            }
        }
    });
});