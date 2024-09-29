document.getElementById('studyGroupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const className = document.getElementById('className').value.trim().toUpperCase();

    // Get students from LocalStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Filter students by class name
    const matches = students.filter(student => student.class === className);

    const matchingStudentsDiv = document.getElementById('matchingStudents');
    matchingStudentsDiv.innerHTML = '';

    if (matches.length > 0) {
        matchingStudentsDiv.innerHTML = '<h2>Matching Study Partners for ' + className + '</h2>';
        matches.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.className = 'student-match';
            matchDiv.textContent = `${match.name} is available: ${match.availability}`;
            matchingStudentsDiv.appendChild(matchDiv);
        });
    } else {
        matchingStudentsDiv.innerHTML = '<h2>No matching students found for ' + className + '</h2>';
    }
});
