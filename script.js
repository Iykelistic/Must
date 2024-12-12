let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// christmas section
document.addEventListener("DOMContentLoaded", function () {
    const xmasContents = document.querySelectorAll(".xmas-content");
    const arrows = document.querySelectorAll(".arrows p");
    let currentIndex = 0;

   
    function showContent(index) {
        xmasContents.forEach((content, i) => {
            content.style.display = i === index ? "block" : "none";
        });
    }

    
    showContent(currentIndex);

    
    arrows.forEach(arrow => {
        arrow.addEventListener("click", function () {
            if (this.querySelector(".fa-arrow-right")) {
                
                currentIndex = (currentIndex + 1) % xmasContents.length;
            } else if (this.querySelector(".fa-arrow-left")) {
                // Move to the previous content
                currentIndex = (currentIndex - 1 + xmasContents.length) % xmasContents.length;
            }
            showContent(currentIndex);
        });
    });
});

// the back to top; edit the css sha 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

