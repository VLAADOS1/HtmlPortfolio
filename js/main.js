const btnDarckMode = document.querySelector('.dark-mod-btn');

//тёмная тема если в браузере тоже тёмная тема
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarckMode.classList.add("dark-mod-btn--active");
    document.body.classList.add('dark') 
}



// если в localstoreg тёмная тема, то делаем тёмную тему на сайте 
if(localStorage.getItem('darkMode') === 'dark') {
    btnDarckMode.classList.add("dark-mod-btn--active");
    document.body.classList.add('dark')
} else {
    btnDarckMode.classList.remove("dark-mod-btn--active");
    document.body.classList.remove('dark')
}



//изменение темы если она изменилась у юзера на пк
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (Event) => {
    const newColorSchema = Event.matches ? "dark" : "light";

    if (newColorSchema === 'dark') {
        btnDarckMode.classList.add("dark-mod-btn--active");
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarckMode.classList.remove("dark-mod-btn--active");
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'lite')
    }
})

btnDarckMode.onclick = function() {
    btnDarckMode.classList.toggle("dark-mod-btn--active");
    const isDark =  document.body.classList.toggle("dark");

   if(isDark) {
    localStorage.setItem('darkMode', 'dark')
   } else {
    localStorage.setItem('darkMode', 'lite')
   }
}