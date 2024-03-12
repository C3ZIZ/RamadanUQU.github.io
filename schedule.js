
    var courses = JSON.parse(localStorage.getItem('courses'));

    var table = document.createElement('table');


    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];
    var th = document.createElement('th');
    th.textContent = 'الوقت';
    headerRow.appendChild(th);
    days.forEach(function (day) {
      var th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    var timeSlots = [
      { start: '09:00', end: '09:35' }, // 1
      { start: '09:40', end: '10:15' }, // 2
      { start: '10:20', end: '10:55' }, // 3
      { start: '11:00', end: '11:35' }, // 4
      { start: '11:40', end: '12:15' }, // 5
      { start: '12:20', end: '12:55' }, // 6
      { start: '13:05', end: '13:40' }, // 7
      { start: '13:45', end: '14:20' }, // 8
      { start: '14:25', end: '15:00' }, // 9
      { start: '15:05', end: '15:40' }, // 10
      { start: '15:45', end: '16:20' }, // 11
      { start: '16:30', end: '17:05' } // 12
    ];
    for (var period = 1; period <= 12; period++) {
      var row = document.createElement('tr');
      var td = document.createElement('td');
      td.textContent = timeSlots[period - 1].start + ' - ' + timeSlots[period - 1].end;
      row.appendChild(td);
      for (var dayIndex = 0; dayIndex < 5; dayIndex++) {
        var td = document.createElement('td');
        var course = getCourseByPeriodAndDay(period, dayIndex);
        if (course) {
          td.textContent = course.name;
        }
        row.appendChild(td);
      }
      tbody.appendChild(row);
    }
    table.appendChild(tbody);

    var scheduleContainer = document.getElementById('schedule-container');
    scheduleContainer.appendChild(table);

    function getCourseByPeriodAndDay(period, dayIndex) {
      return courses.find(function (course) {
        return course.period === period && course.day === dayIndex.toString();
      });
    }

    function clearCourses() {
      localStorage.removeItem('courses');
      courses = [];
      table.remove();
      var clearButton = document.getElementsByTagName('button')[0];
      clearButton.disabled = true;
    }

    function goToIndex() {
      localStorage.removeItem('courses');
      window.location.href = 'index.html';
    }


