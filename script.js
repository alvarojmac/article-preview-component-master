let shareBtn = document.querySelector('.share-1');
let socialMedia = document.querySelector('.share-2');


function share() {
    shareBtn.style.display = 'none'
    socialMedia.style.display = 'flex'

}

function share2() {
    shareBtn.style.display = 'flex'
    socialMedia.style.display = 'none'
}