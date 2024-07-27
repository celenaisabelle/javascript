//modify example.com via console to add event listener.

var h1 = document.querySelector('h1');

var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

//declare a function, passing no parameters.
//add switch statement passing h1.innertext as a parameter.
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break;
        case arr[1]:
            h1.innerText = arr[2]
            break;
        case arr[2]:
            h1.innerText = arr[3]
            break;
        default:
            h1.innerText = arr[0]
    }
}

h1.addEventListener('click', handleClicks);
