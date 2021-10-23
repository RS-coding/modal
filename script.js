(function(){
    'use strict'

    const modalBtntoOpen = document.querySelector('.modal-btn');

    const modalBtntoClose =document.querySelector('.close-btn');
    
    const modal = document.querySelector('.modal-overlay');

    modalBtntoOpen.addEventListener('click', function(){
        modal.classList.add('open')
    })

    modalBtntoClose.addEventListener('click', function(){
        modal.classList.remove('open')
    })
}())