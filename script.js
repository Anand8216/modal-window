'use strict';
const popUp=document.querySelector('.modal');
const openBtn=document.querySelectorAll('.show-modal');
const btnClose=document.querySelector('.close-modal');
const over=document.querySelector('.overlay');


for(let i=0;i<openBtn.length;i++){
openBtn[i].addEventListener('click',()=>{

    popUp.classList.remove('hidden');
    over.classList.remove('hidden');
    console.log("btn clicked");
})
};

const close=function (){
   popUp.classList.add('hidden');
   over.classList.add('hidden');
};

btnClose.addEventListener('click',close);
over.addEventListener('click',close);

