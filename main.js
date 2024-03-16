function showNotification() {
    document.getElementById('notification').style.display = 'none';
    let marks = [];
    for (let i = 0; i < 6; i++) {
        let mark = prompt(`Enter mark for subject ${i + 1}:`);
        if (mark === null || mark === '') {
            alert('Marks cannot be empty. Calculation aborted.');
            return;
        }
        mark = parseFloat(mark);
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert('Invalid mark entered. Marks should be between 0 and 100. Calculation aborted.');
            return;
        }
        marks.push(mark);
    }

    const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;

    let result = '';
    let color = '';
    if (percentage >= 90) {
        result = ' A - You are a First class student';
        color = 'green';
    } else if (percentage >= 75) {
        result = ' B - You are a Second class student';
        color = 'lightgreen';
    } else if (percentage >= 55) {
        result = ' C - You are a Third class student';
        color = 'yellow';
    } else if (percentage >= 35) {
        result = ' D - You are a Fourth class student';
        color = 'pink';
    } else {
        result = ' Fail';
        color = 'red';
    }

    const gradeNotification = document.createElement('div');
    gradeNotification.textContent = `Your grade is ${result}`;
    gradeNotification.style.color = color;
    document.body.appendChild(gradeNotification);
}

function closeNotification() {
    document.getElementById('notification').style.display = 'none';
}

    
        