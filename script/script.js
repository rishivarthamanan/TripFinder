// Using javascript file as strict file for exposing all the loss errors or eliminating the silent errors into throwable errors
'use strict';
const header = document.querySelector('.header');
const filter = document.getElementById('filter');

//selecting every elements from the html files in two types inputs(providing values) and outputs(displaying)
//inputs

//outputs

//functions
const init = () => { }

//events
document.addEventListener('scroll', function () {

    // Check if the user has scrolled past a certain point
    if (window.scrollY > 500) {
        header.classList.add('visible');
        filter.classList.add('fixed')
    } else {
        header.classList.remove('visible');
        filter.classList.remove('fixed')
    }
});

//initial settings
init();
