let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')


btn1.addEventListener('click', ()=> {
    btn1.style.backgroundColor='red';
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;

})
btn2.addEventListener('click', ()=> {
    btn2.style.backgroundColor='red';
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
})
btn3.addEventListener('click', ()=> {
    btn3.style.backgroundColor='green';
    btn2.disabled = true;
    btn1.disabled = true;
    btn4.disabled = true;
})
btn4.addEventListener('click', ()=> {
    btn4.style.backgroundColor='red';
    btn2.disabled = true;
    btn3.disabled = true;
    btn1.disabled = true;
})
btn5.addEventListener('click', ()=> {
    btn5.style.backgroundColor='red';
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
})
btn6.addEventListener('click', ()=> {
    btn6.style.backgroundColor='green';
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
})
btn7.addEventListener('click', ()=> {
    btn7.style.backgroundColor='red';
    btn6.disabled = true;
    btn5.disabled = true;
    btn8.disabled = true;
})
btn8.addEventListener('click', ()=> {
    btn8.style.backgroundColor='red';
    btn7.disabled = true;
    btn6.disabled = true;
    btn5.disabled = true;
})