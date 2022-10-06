let shareFirst = document.querySelector('.first');
let socialMedia = document.querySelector('.hidden');
let btn = document.querySelector('.btn-share')


function share() {
    if(window.matchMedia('(min-width: 768px)').matches) {
        shareFirst.style.display = 'flex'
    
    } else {
        shareFirst.style.display = 'none'
    }
    
    socialMedia.style.display = 'flex'
    socialMedia.style.backgroundColor = '#48556a'
}

function share2() {
    shareFirst.style.display = 'flex'
    socialMedia.style.display = 'none'
}