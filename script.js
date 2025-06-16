document.addEventListener('DOMContentLoaded', function () {
    var title = document.getElementById('title');
    title.addEventListener('click', function () {
        document.body.style.backgroundColor = 'lightgreen';
        document.body.style.color = '#000';
        title.textContent = 'Welcome';
    });
});
