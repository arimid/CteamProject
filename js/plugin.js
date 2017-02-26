/*global console,$*/
var pageName;
$(function() {
    $('.loader').fadeOut(700);

    function targetPageLink() {
        function getLink(link) {
            var n = link.split("/");
            return n[n.length - 1];
        }
        var target = $(getLink(window.location.href));
        for (var i = 1; i <= 2; i++) {
            if ($('.tab:nth-of-type(' + i + ')').children('a').attr('href') === getLink(window.location.href)) {
                $('.tab:nth-of-type(' + i + ')').addClass('active');
                $('.tab:nth-of-type(' + i + ')').siblings().removeClass('active');
                $('.tab-content > div').not(target).hide();
                $(target).fadeIn(600);
            }

        }
        if (getLink(window.location.href) === "#login") {
            pageName = 'Log In';
        } else {
            pageName = 'Sign Up';
        }
        document.title = 'C Team - ' + pageName;
    }

    function getInputs() {
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

    }

    function tabsAndDate() {
        $('.tab a').on('click', function(e) {
            e.preventDefault();

            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');

            var target = $(this).attr('href');
            window.location.href = target;
            $('.tab-content > div').not(target).hide();
            pageName = $(this).attr('page');
            document.title = 'C Team - ' + pageName;
            $(target).fadeIn(600);

        });
        $('.datepicker').pickadate({

            selectMonths: true, // Creates a dropdown to control month

            selectYears: 1 // Creates a dropdown of 15 years to control year

        });
    }

    function handleInputs() {

        $('.firstName').blur(function() {
            if ($('.firstName').val().length <= 2) {
                $(this).siblings('.lengthMin').slideDown();
                $(this).addClass('invalid');
            } else {
                $(this).siblings('.lengthMin').slideUp();
            }
            if (/([0-9- ]|[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?])/gi.test($('.firstName').val())) {
                $(this).addClass('invalid');
                $(this).siblings('.specChars').slideDown();
            } else {
                $(this).siblings('.specChars').slideUp();
            }
        });

        $('.firstName').keyup(function() {
            if (!/^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[a-zA-Z])*$/gi.test($('.firstName').val())) {
                if (/([ ])/gi.test($('.firstName').val())) {
                    $(this).siblings('.specChars').children('.space').css('display', 'list-item');
                } else {
                    $(this).siblings('.specChars').children('.space').css('display', 'none');
                }
                if (/([0-9])/gi.test($('.firstName').val())) {
                    $(this).siblings('.specChars').children('.numric').css('display', 'list-item');
                } else {
                    $(this).siblings('.specChars').children('.numric').css('display', 'none');
                }
                if (/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/gi.test($('.firstName').val())) {
                    $(this).siblings('.specChars').children('.spic').css('display', 'list-item');
                } else {
                    $(this).siblings('.specChars').children('.spic').css('display', 'none');
                }
                $(this).addClass('invalid');
                $(this).siblings('.specChars').slideDown();
            } else {
                $(this).siblings('.specChars').slideUp();
                $(this).removeClass('invalid');
                $(this).siblings('.specChars').children('.space').css('display', 'none');
                $(this).siblings('.specChars').children('.numric').css('display', 'none');
            }
            if ($('.firstName').val().length >= 10) {
                $(this).siblings('.lengthMax').slideDown();
                $(this).addClass('invalid');
            } else {
                $(this).siblings('.lengthMax').slideUp();
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
    }
    targetPageLink();
    getInputs();
    tabsAndDate();
    handleInputs();
});