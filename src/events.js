const button = document.querySelector('button');

// button.onclick = function() {
//     console.log('adsfadsf')
// }

const buttonClickHandler = (event) => {
    // event.target.disabled = true;
    console.log(event)
};

// button.onclick = buttonClickHandler;

// const boundFn = buttonClickHandler.bind(this);

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// })

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    event.stopPropagation();
    console.log('CLICKED DIV');
    console.log(event);
});

button.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
    console.log(this)
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// })

list.addEventListener('click', event => {
    // console.log(event.currentTarget);
    console.log(event.target);
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    button.click();
    console.log(this)
});