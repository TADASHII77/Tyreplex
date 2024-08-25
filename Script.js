// add hpver effect

function addHoverEffect(element2) {
    const element=document.getElementById(element2)
    element.style.transform = 'scale(1.1)';
     element.style.boxShadow= '10px 10px 15px rgba(0, 0, 0, 0.2)';
    element.style.color = 'black';
  }

  //  remove hover effect
  function removeHoverEffect(element2) {
    const element=document.getElementById(element2)
    element.style.transform = 'scale(1)';
    element.style.backgroundColor = '';
    element.style.color = 'black';
    element.style.boxShadow ='10px 10px 15px rgba(0, 0, 0, 0.2)';
  }



  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Main function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    console.log("Number of slides:", slides.length);
    console.log("Current slideIndex:", n);

    if (slides.length === 0) {
        console.error("No slides found");
        return;
    }

    // Ensure the slideIndex is within bounds
    if (n > slides.length) { 
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Show the current slide
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
    }
}
