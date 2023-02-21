const toggleButton = document.getElementById('theme');
const bodyElement = document.body;

toggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('theme2')
})