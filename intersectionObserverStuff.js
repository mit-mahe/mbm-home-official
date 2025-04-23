

const header = document.querySelector(".header");
const headerElements = document.querySelectorAll(".darkNavElements");
const darkSwitch = document.querySelector('.darkSwitch');
const dropDownElements = document.querySelectorAll('.ddown');

const darkSwitchObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            header.classList.add("dark-theme");
            headerElements.forEach((item) => item.classList.add("brightNavElements"));
            headerElements.forEach((item) => item.classList.add("brightNavElements:hover"));
            dropDownElements.forEach((cell) => cell.classList.add("ddownDark"));
        }
        else{
            header.classList.remove("dark-theme");
            headerElements.forEach((item) => item.classList.remove("brightNavElements"));
            headerElements.forEach((item) => item.classList.remove("brightNavElements:hover"));
            dropDownElements.forEach((cell) => cell.classList.remove('ddownDark'));
        }
    });
});

darkSwitchObserver.observe(darkSwitch);

const allcontent = document.querySelectorAll(".content");


const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

allcontent.forEach((item) => contentObserver.observe(item));




