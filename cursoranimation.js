const container = document.querySelector('#header-container');
const cursor = document.createElement('span');
cursor.textContent = '|';
cursor.id = 'cursor';

const h1 = document.createElement('h1');
const span = document.createElement('span');
const p = document.createElement('p');
const br = document.createElement('br');

let h1Text = "A Portfolio, "
let spanText = "by C3"
let pText = "Welcome to my Portfolio."

let animating = true;

let headerElements = new Map([
  [h1, h1Text],
  [span, spanText],
  [p, pText]
]);


container.appendChild(h1);
container.appendChild(span);
container.appendChild(br);
container.appendChild(p);

h1.classList.add("header-text");
span.classList.add("header-text");
p.classList.add("header-text");


document.addEventListener ('keydown', () => {
  animating = false;
});

function moveCursor(element) { //places the cursor after an element
  cursor.remove();
  cursor.style.fontSize = getComputedStyle(element).fontSize;
  element.insertAdjacentElement('afterend', cursor);
}

function typeText(map) {

  let i = 0;
  let j = 0;
  let speed = 100;

  let element = Array.from(map.entries())[j][0];
  let text = Array.from(map.entries())[j][1];
  moveCursor(element)
 
  function type(){
    if (i < text.length && animating) {
      element.textContent += text.charAt(i);      
      i++;
      setTimeout(type, speed);

    }else {
      element.textContent = text;
      if (j < Array.from(map.entries()).length - 1){
        j++;
        i = 0;
        element = Array.from(map.entries())[j][0];
        text = Array.from(map.entries())[j][1];
        moveCursor(element);
        setTimeout(type, speed);
      }
    }
  }

  type();
}


typeText(headerElements);
