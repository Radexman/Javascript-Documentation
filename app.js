// DOM Query Selectors stored in variables
const playerOne = document.querySelector('.playerOne');
const buttons = document.getElementsByTagName('button');

// This click event asks user for their name and displays it
playerOne.addEventListener('click', () => {
    let name = prompt('Enter your name');
    playerOne.textContent+= name;
})

// This loop is creating p element and appends it with text node
for (const button of buttons) {
    button.addEventListener('click', () => {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button';
        document.body.appendChild(para);
    });
}