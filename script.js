let string = "";
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button) => {
   button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
         string = eval(string);
         document.querySelector('input').value = string;
      }
      else {
         string = string + e.target.innerHTML;
         document.querySelector('input').value = string;
      }
   })
})

