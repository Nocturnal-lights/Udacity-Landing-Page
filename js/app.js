


 //Define Global Variables

//navigation bar global variable
const navigation = document.querySelector('#navbar__list');
//list of all the section 
const list_of_section = document.querySelectorAll('section');






//Creation pf navigation links
var nav_str = " ";//create empty string
list_of_section.forEach(function (section) {
    nav_str += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`; //add html for each list item

});
navigation.innerHTML = nav_str;



//creating an offset function to find relative positioning
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
}



// remove the active class

function removeActive(section) {
    section.classList.remove('your-active-class');
    section.style.cssText="background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
}


//to add active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText="background-color: grey";
    }
}


//drivere function to select the section nearest to viewport
const setActivation = () => {
    list_of_section.forEach(function (section) {
        const viewport_position = offset(section);
        check_viewport = () => viewport_position < 150 && viewport_position >= -150;
        removeActive(section);
        addActive(check_viewport(), section);
    });

}

document.addEventListener('scroll', setActivation);



// function to scroll to selected section

const scrolling = () => {
    const links = document.querySelectorAll('navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
        for (let i = 0; i < list_of_section.length; i++) {
            list_of_section[i].addEventListener('click', sectionScroll(link));
        }
    })
})

}

scrolling();

