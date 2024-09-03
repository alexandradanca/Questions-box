const btn_q1 = document.querySelector('.btn-q-1');
const btn_q2 = document.querySelector('.btn-q-2');
const btn_q3 = document.querySelector('.btn-q-3');

const ans_q1 = document.querySelector('.q1-answer');
const ans_q2 = document.querySelector('.q2-answer');
const ans_q3 = document.querySelector('.q3-answer');

const height = document.querySelector('.container');

const btns_clicked = document.querySelectorAll('img');
let q1 = 0;
let q2 = 0;
let q3 = 0;

btn_q1.addEventListener('click', ()=>{
    btn_q1.classList.toggle('minus');
    ans_q1.classList.toggle('view');
})

btn_q2.addEventListener('click', ()=>{
    btn_q2.classList.toggle('minus');
    ans_q2.classList.toggle('view');
})

btn_q3.addEventListener('click', ()=>{
    btn_q3.classList.toggle('minus');
    ans_q3.classList.toggle('view');
})

btns_clicked.forEach((btn)=>{
    btn.addEventListener('click', (btn_clicked)=>{
        const event = btn_clicked.currentTarget.classList;
        
        if(event.contains('btn-q-1')){
            q1 = 1;
        } else if (event.contains('btn-q-2')){
            q2 = 1;
        } else if (event.contains('btn-q-3')){
            q3 = 1;
        }

        let total = q1+q2+q3;
        
        if(total===3){
            height.classList.add('h-auto');
        }
    })
})