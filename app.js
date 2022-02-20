let image = document.querySelector('.mouse-img');
image.addEventListener('mousemove', (e) => {
    let topCursor = Math.round(e.offsetY - image.offsetHeight / 2) / 6,
        leftCursor = Math.round(e.offsetX - image.offsetWidth / 2) / 10;
        image.style.transform = `rotateX(${topCursor}deg) rotateY(${-leftCursor}deg)`
});