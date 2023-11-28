const boxes = document.querySelectorAll('.box');

// console.log(boxes)
// box.onclick = () => {

// }


boxes.forEach(box =>
  box.onclick = () => {
    box.style.backgroundColor = '#6497b1' ;
  }
  
);

for (let i = 0; i <= boxes.length; i += 1) {
    



    // box.style.backgroundColor = '#728FCE';
  console.log(i)
}

