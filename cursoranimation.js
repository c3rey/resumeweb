const cursor = document.createElement('span');
cursor.textContent = '|';
cursor.id = 'cursor';

const header = document.querySelector('header');
const h1 = document.createElement('h1');
const span = document.createElement('span');
const p = document.createElement('p');

let h1Text = "A Portolio,"
let spanText = "by C3"
let pText = "Welcome to my Portfolio."

let animating = true;

let headerElements = new Map([
  [h1, h1Text],
  [span, spanText],
  [p, pText]
]);


function typeText(element, text) {

  let i = 0;
  let speed = 100;
 
  function type(){
    if (i < text.length && animating) {
      element.textContent += text.charAt(i);      
      i++;
      setTimeout(type, speed);

    }else{
      element.textContent = text;
    }
  }
    type();
}

function moveCursor(element) { //places the cursor after an element
  cursor.remove();
  element.insertAdjacentElement('afterend', cursor);
}


document.addEventListener ('keydown', () => {
  animating = false;
});

header.appendChild(h1);
h1.appendChild(span);
header.appendChild(p);

for (const [element, text] of headerElements.entries()) {
  moveCursor(element);
  typeText(element, text);
  
}
