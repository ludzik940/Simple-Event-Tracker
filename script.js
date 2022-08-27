'use strict';
window.onload = (event) => {
        
    
const addBtn = document.querySelector('.btn--add');


addBtn.addEventListener('click', () => {

    // Get data from form
    let eventName = document.querySelector('#eventName').value;
    
    let eventDate = document.querySelector('#eventDate').value;
    // let eventHour = document.querySelector('#eventHour').value;

    let eventDesc = document.querySelector('#eventDescription').value;
    let eventPriority = document.querySelector('#eventPriority');
    let eventValue = eventPriority.options[eventPriority.selectedIndex].value;



    // Create new element
    let eventContainer = document.querySelector('.event--wrapper');

    let newEvent = document.createElement('div');
    
    let eventTitle = document.createElement('h2');
        eventTitle.innerHTML = eventName;
    let eventInfo = document.createElement('p');
        eventInfo.innerHTML = eventDesc;
    let eventTime = document.createElement('h3');

    // Set event value
    if(eventValue === 'high') {
        newEvent.style.border = '5px solid red';
    } else if(eventValue === 'normal') {
        newEvent.style.border = '5px solid blue';
    } else {
        newEvent.style.border = '5px solid white';
    }


    // Append every element into parent element
    newEvent.appendChild(eventTitle);
    newEvent.appendChild(eventTime);
    newEvent.appendChild(eventInfo);



    
// Change into date format
    let dateEntered = new Date(eventDate);


    let x = setInterval(function() {


        let now = new Date().getTime();
        let distance = dateEntered - now;
        
    
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        hours = hours + dateEntered.getHours();
     
        eventTime.innerHTML = '<span class="span"> Time left: </span> ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
    
        }, 10);



        
// Check if date has passed 

    const today = new Date();

    today.setHours(23, 59, 59, 59);

    if(dateEntered < today || eventTitle == ' ') {
        document.querySelector('.invalid').classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.invalid').classList.add('hidden');
        }, 4000);
    } else {
        newEvent.classList.add('event');
        eventContainer.appendChild(newEvent);
    }
 
});


};


