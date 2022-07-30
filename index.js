const north = document.getElementById("north");
const south = document.getElementById("south");
const east = document.getElementById("east");
const west = document.getElementById("west");
const activateBtn = document.getElementById('g-btn')
const deactivateBtn = document.getElementById('r-btn')

function verticalTrafficSignal () {  
    north.style.opacity = 1;
    south.style.opacity = 1;
    setTimeout(function() {
        north.style.backgroundColor = '#f60000';
        south.style.backgroundColor = '#f60000';
    }, 7000)

    setTimeout(function() {
        north.style.backgroundColor = '#ffad14';
        south.style.backgroundColor = '#ffad14';
    }, 12000)

    setTimeout(function() {
        north.style.backgroundColor = '#007200';
        south.style.backgroundColor = '#007200';
    }, 14000)
}


function horizontalTrafficSignal() {
    west.style.opacity = 1;
    east.style.opacity = 1;
    setTimeout(function() {
        east.style.backgroundColor = '#ffad14';
        west.style.backgroundColor = '#ffad14';
    }, 5000)

    setTimeout(function() {
        east.style.backgroundColor = '#007200';
        west.style.backgroundColor = '#007200';
    }, 7000)

    setTimeout(function() {
        east.style.backgroundColor = '#f60000';
        west.style.backgroundColor = '#f60000';
    }, 14000)
} 


activateBtn.addEventListener('click', () => {
        verticalTrafficSignal()
        horizontalTrafficSignal() 
    
        setInterval(function () {
            verticalTrafficSignal()
            horizontalTrafficSignal()
          } ,14000);
})