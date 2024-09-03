const btn_q1 = document.querySelector('.btn-q-1');
const btn_q2 = document.querySelector('.btn-q-2');
const btn_q3 = document.querySelector('.btn-q-3');

const ans_q1 = document.querySelector('.q1-answer');
const ans_q2 = document.querySelector('.q2-answer');
const ans_q3 = document.querySelector('.q3-answer');

const height = document.querySelector('.container');

btn_q1.addEventListener('click', ()=>{
    btn_q1.classList.toggle('minus');
    ans_q1.classList.toggle('view');
    height.classList.add('h-auto');

})

btn_q2.addEventListener('click', ()=>{
    btn_q2.classList.toggle('minus');
    ans_q2.classList.toggle('view');
})

btn_q3.addEventListener('click', ()=>{
    btn_q3.classList.toggle('minus');
    ans_q3.classList.toggle('view');
})