const card = document.querySelector('.card');

card.addEventListener('mousemove', startRotate);

card.addEventListener('mouseout', stopRotate);

function startRotate(event) {
    const cardItem = this.querySelector('.contentBx');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 10 + 'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.contentBx');
    cardItem.style.transform = 'rotate(0)';
}







