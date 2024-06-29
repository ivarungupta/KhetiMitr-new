// let text = document.getElementById('text'); let treeLeft = document.getElementById('tree-left'); let treeRight = document.getElementById('tree-right'); let fenceLeft = document.getElementById('fence-left'); let fenceRight = document.getElementById('fence-right'); window.addEventListener('scroll', () => { let value = window.scrollY; text.style.marginTop = value * 2.5 + 'px'; treeLeft.style.left = value * -1.5 + 'px'; treeRight.style.left = value * 1.5 + 'px'; fenceLeft.style.left = value * 0.5 + 'px'; fenceRight.style.left = value * -0.5 + 'px'; });


let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let fenceLeft = document.getElementById('fence-left');
let fenceRight = document.getElementById('fence-right');
const maxRightOffset = window.innerWidth * 0.5; // Adjust this value as needed
const maxTextOffset = 200; // Adjust this value as needed

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  
  // Calculate the offset for the text
  let textOffset = value * 2.5;
  if (textOffset > maxTextOffset) {
    textOffset = maxTextOffset; // Stop the movement at the maximum offset
  }
  text.style.marginTop = textOffset + 'px';

  treeLeft.style.left = value * -1.5 + 'px';

  // Calculate the right offset for treeRight
  let treeRightOffset = value * 1.5;
  if (treeRightOffset > maxRightOffset) {
    treeRightOffset = maxRightOffset; // Stop the movement at the maximum offset
  }
  treeRight.style.left = treeRightOffset + 'px';

  fenceLeft.style.left = value * 0.5 + 'px';
  fenceRight.style.left = value * -0.5 + 'px';
});



// authorization sign in sign up

const auth = document.getElementById('auth');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    auth.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    auth.classList.remove("active");
});


