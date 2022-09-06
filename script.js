let shareFirst = document.querySelector('.first');
let socialMedia = document.querySelector('.hidden');
let btn = document.querySelector('.btn-share')


function share() {
    shareFirst.style.display = 'none'
    socialMedia.style.display = 'flex'
    socialMedia.style.backgroundColor = '#48556a'
}

function share2() {
    shareFirst.style.display = 'flex'
    socialMedia.style.display = 'none'
    socialMedia.style.backgroundColor = '#FFF'
}