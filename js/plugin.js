/*global console,$*/


$(function () {
	$('.form').find('input, textarea').on('keyup blur focus', function(e) {
    'use strict';
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
    'use strict';
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    var target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});
	"use strict";
  
	$('.datepicker').pickadate({
    
		selectMonths: true, // Creates a dropdown to control month
    
		selectYears: 15 // Creates a dropdown of 15 years to control year
  
	});
        
});

		
		


/*		
var showday = document.getElementById('showday'),
	showdayy;
for (showdayy = 1; showdayy <= 31; showdayy = showdayy + 1) {
	
	showday.innerHTML += "<option value='" + showdayy + "' class='blue-grey darken-4' >" + showdayy + "</option>";

}


var showYear = document.getElementById('showYear'),
	showYearr;
	
for (showYearr = 1900; showYearr <= 2017; showYearr = showYearr + 1) {
	
	showYear.innerHTML += "<option value='" + showYearr + "' class='blue-grey darken-4' >" + showYearr + "</option>";
	
	
	
}


*/



















$(function () {
	"use strict";
	
	
	
		
	$('.signinz').attr('disabled', 'disabled');
	
	
	
	$('.signinz').on('click', function () {
		
		
		$(".signin").fadeToggle(100);

		$(".signup").fadeToggle(100);
		$('.signinz').attr('disabled', 'disabled');
		$('.signupz').attr('disabled', false);
		
	
	
	
	});
	$('.signupz').on('click', function () {
		
		
	
		$(".signin").fadeToggle(100);

		$(".signup").fadeToggle(100);
		$('.signupz').attr('disabled', 'disabled');
		$('.signinz').attr('disabled', false);
	
	
	
	
	
	});
	$('#test1').fadeOut(1000);
	
	
		
		

		
	$('.ti').css({
		
		color : "white",
		borderRadius : '8px',
		width : '50%',
		padding : "10px",
		paddingBottom : "40px",
		fontSize : "1.5em",
		//backgroundColor : '#5a5a5a',
		textAlign : 'center'

					 
	});

	
	$('.ti').on('click', function () {
		
		$(this).show(100);
		
		
		
		
	});
	
	/*
	 * 
	 * $('.male').on('click', function () {
	
		$('.female').attr('disabled', false);
	
	});
	
	$('.female').on('click', function () {
	
		$('.male').attr('disabled', false);
	
	});
		
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	

});


















