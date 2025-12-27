const toggleMode = document.getElementById('toggle-mode');
toggleMode.addEventListener('click', () => {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
});