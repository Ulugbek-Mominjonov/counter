const btns = document.querySelectorAll('.btn'),
      output = document.querySelector('.output');

let count = 0;

btns.forEach( btn => {
  btn.addEventListener('click', () => {
    const cssClasses = btn.classList;
    if(cssClasses.contains('decrease')){
      count--;
    }else if(cssClasses.contains('inccrease')){
      count++;
    }else{
      count = 0;
    }

    if(count < 0){
      output.style.color = "red";
    }else if(count > 0){
      output.style.color = "green"
    }else{
      output.style.color = "#222"
    }
    output.textContent = count;
  })
})