'use strict';

document.querySelector('.add').addEventListener('click', function () {
    document.querySelector('.num').textContent++
})

document.querySelector('.minus').addEventListener('click', function () {
    document.querySelector('.num').textContent--
})