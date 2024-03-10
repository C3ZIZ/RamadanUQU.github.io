
//////////////////////////////////////
var courses = [];

function addCourse() {
  var courseName = document.getElementById('course-name').value;
  var coursePeriod = parseInt(document.getElementById('course-period').value);
  var courseDay = document.getElementById('course-day').value;

  if (courseName && coursePeriod && courseDay) {
    courses.push({ name: courseName, period: coursePeriod, day: courseDay });
    document.getElementById('course-name').value = '';
  }
}

function generateSchedule() {

  localStorage.setItem('courses', JSON.stringify(courses));

  window.location.href = 'schedule.html';
}


