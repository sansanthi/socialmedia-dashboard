const toggleBtn = document.querySelector('.toggle-btn');
const theme = document.querySelector('.theme-light');

toggleBtn.addEventListener('click', function(){
    theme.classList.toggle('theme-dark');
})