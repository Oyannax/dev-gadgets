const picHandlerBtns = document.querySelectorAll(".pictures-handler");
const displayedPic = document.querySelector(".pictures-img");
let counter = 1;

picHandlerBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        if (event.target.classList.contains("pictures-prev")) {
            counter--;
            if (counter < 1) counter = 5;
            displayedPic.src = `img/canard-jaune-${counter}-l.png`;
        } else if (event.target.classList.contains("pictures-next")) {
            counter++;
            if (counter > 5) counter = 1;
            displayedPic.src = `img/canard-jaune-${counter}-l.png`;
        }
    })
})