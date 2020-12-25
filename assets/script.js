$(document).ready(function () {

    var init = false;
    var now = moment().format('LLLL'); // Day, M/D/Y/T format

    let now24 = moment().format('H'); // 12 hour clock format
    let now12 = moment().format('h'); // 24 hour clock format
    if (init) {
        now24 = 13;
        now12 = 1;
    }

    // Display current date
    const currentDate = $('#currentDay');
    currentDate.text(now);

    var cal = new Date(); // init date and time
    var currentHour = cal.getHours(); // 24 hour clock

    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
    // Local Storage Feature
     var storage = i.toString(currentHour);

     {
        $('.saveBtn').click(function() {
            var hr8 = document.getElementById('8').value;
			localStorage.setItem('task8', hr8);
			var hr9 = document.getElementById('9').value;
			localStorage.setItem('task9', hr9);
			var hr10 = document.getElementById('10').value;
			localStorage.setItem('task10', hr10);
			var hr11 = document.getElementById('11').value;
			localStorage.setItem('task11', hr11);
			var hr12 = document.getElementById('12').value;
			localStorage.setItem('task12', hr12);
			var hr1 = document.getElementById('1').value;
			localStorage.setItem('task1', hr1);
			var hr2 = document.getElementById('2').value;
			localStorage.setItem('task2', hr2);
			var hr3 = document.getElementById('3').value;
			localStorage.setItem('task3', hr3);
			var hr4 = document.getElementById('4').value;
			localStorage.setItem('task4', hr4);
			var hr5 = document.getElementById('5').value;
			localStorage.setItem('task5', hr5);
        });
     }

     // Display saved tasks
     const saved8 = localStorage.getItem('task8');
     document.getElementById('8').value = saved8;
     const saved9 = localStorage.getItem('task9');
     document.getElementById('9').value = saved9;
     const saved10 = localStorage.getItem('task10');
     document.getElementById('10').value = saved10;
     const saved11 = localStorage.getItem('task11');
     document.getElementById('11').value = saved11;
     const saved12 = localStorage.getItem('task12');
     document.getElementById('12').value = saved12;
     const saved1 = localStorage.getItem('task1');
     document.getElementById('1').value = saved1;
     const saved2 = localStorage.getItem('task2');
     document.getElementById('2').value = saved2;
     const saved3 = localStorage.getItem('task3');
     document.getElementById('3').value = saved3;
     const saved4 = localStorage.getItem('task4');
     document.getElementById('4').value = saved4;
     const saved5 = localStorage.getItem('task5');
     document.getElementById('5').value = saved5;
});