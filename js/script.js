const picHandlerBtns = document.querySelectorAll(".pictures-handler");
const imgList = document.querySelector(".thumbs");
const displayedPic = document.querySelector(".pictures-img");
let imgData = 1;

picHandlerBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        if (event.target.classList.contains("pictures-prev")) {
            imgData--;
            if (imgData < 1) imgData = 5;
            displayedPic.src = `img/canard-jaune-${imgData}-l.png`;
        } else if (event.target.classList.contains("pictures-next")) {
            imgData++;
            if (imgData > 5) imgData = 1;
            displayedPic.src = `img/canard-jaune-${imgData}-l.png`;
        }
    })
})

imgList.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains("thumbs-img")) {
        imgData = event.target.dataset.img;
        displayedPic.src = `img/canard-jaune-${imgData}-l.png`;
    }
})