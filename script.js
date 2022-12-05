let number = document.querySelector('button')
let int = 0;
number.addEventListener('click', function(){
    int +=1;
    number.innerHTML = int;
})