import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




document.addEventListener('DOMContentLoaded', function() {

  // Filter functionality
  var filterItems = document.querySelectorAll('.list-menu li');
  var cards = document.querySelectorAll('.mission-card');

  if (filterItems.length > 0 && cards.length > 0) {
    filterItems.forEach(function(filterItem) {
      filterItem.addEventListener('click', function(e) {
        e.preventDefault();

        filterItem.classList.toggle('is-active');

        var activeFilters = Array.from(filterItems).filter(item => item.classList.contains('is-active'));

        if (activeFilters.length === 0) {
          cards.forEach(card => card.style.display = 'block');
          return;
        }

        var activeClasses = activeFilters.map(item => item.getAttribute('data-filter'));

        cards.forEach(function(card) {
          var matches = activeClasses.some(activeClass => card.classList.contains(activeClass));
          card.style.display = matches ? 'block' : 'none';
        });
      });
    });
  }

  // Show more Missions functionality
  const showMoreMissionsButton = document.querySelector('.show-more-button.Missions-button');
  if (showMoreMissionsButton) {
    let MissionsIsHidden = true;

    showMoreMissionsButton.addEventListener('click', function() {
      const hiddenCards = document.querySelectorAll('.mission-card .hidden-Missions');
      if (MissionsIsHidden) {
        hiddenCards.forEach(card => {
          card.classList.remove('is-hidden');
        });
        showMoreMissionsButton.style.display = 'none';
      } 
    });
  }

  // Show more top stories functionality
  const showMoreTopStoriesButton = document.querySelector('.show-more-button.top-stories-button');
  if (showMoreTopStoriesButton) {
    let topStoriesIsHidden = true;

    showMoreTopStoriesButton.addEventListener('click', function() {
      const hiddenCards = document.querySelectorAll('.top-stories-card .hidden-top-stories');
      if (topStoriesIsHidden) {
        hiddenCards.forEach(card => {
          card.classList.remove('is-hidden');
        });
        showMoreTopStoriesButton.style.display = 'none';
      } 
    });
  }

  // Behavior cards functionality
  const behaviorArrows = document.querySelectorAll('.behavior-card .arrow');

  if (behaviorArrows.length > 0) {
    behaviorArrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
        const behaviorCard = arrow.closest('.behavior-card');
        const behaviorCardUl = behaviorCard.querySelector('ul');
        const behaviorCardImg = behaviorCard.querySelector('.behavior-img');

  
        if (behaviorCard.classList.contains('is-open')) {
          behaviorCard.classList.remove('is-open');
          behaviorCard.classList.add('is-closed');
          behaviorCardImg.classList.remove('is-active'); 
          setTimeout(() => {
            behaviorCardUl.style.height = '0px'; 
            behaviorCardImg.style.height = '0px'; 

          }, 300);
        } else {
          behaviorCard.classList.remove('is-closed');
          behaviorCard.classList.add('is-open');  
          behaviorCardUl.style.height = behaviorCardUl.scrollHeight + 'px';
          behaviorCardImg.style.height = '300px'; 
          setTimeout(() => {
            behaviorCardImg.classList.add('is-active'); 
          }, 200);
        }
      });
    });
  }
  
  

  // Burger menu functionality
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerOverlay = document.querySelector('.burger-overlay');
  const burgerCloseButton = document.querySelector('.close-overlay-button');

  if (burgerMenu && burgerOverlay && burgerCloseButton) {
    burgerMenu.addEventListener('click', function() {
      burgerOverlay.classList.add('is-active');
      console.log('is-active');
    });

    burgerCloseButton.addEventListener('click', function() {
      burgerOverlay.classList.remove('is-active');
      console.log('is-not-active');
    });
  }
});


//pin article numbers
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  const pinnedNumbers = document.getElementById('articleNumbersContainer');

  if (pinnedNumbers && window.innerWidth > 1200) {
    gsap.to(pinnedNumbers, {
      y: 500, 
      scrollTrigger: {
        trigger: pinnedNumbers, 
        start: "top 50%", 
        end: "bottom 20%", 
        scrub: true, 
      }
    });
  }
});



// MOCKUP
const heroMockup = document.getElementById('heroMockup');

if (heroMockup && window.innerWidth > 1200) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroMockup, 
      start: "top 10%", 
      end: "bottom -110%", 
      scrub: true,
      pin: true, 
    }
  });
}


// hero element
const heroContent = document.querySelector('.hero-content-container');

if (heroContent) {
  const children = heroContent.children;

  gsap.utils.toArray(children).forEach(child => {
    gsap.fromTo(child, 
      { y: 150 }, 
      {
        y: 0,
        scrollTrigger: {
          trigger: child,
          start: "top bottom",
          end: "top center",
          scrub: true,
        }
      }
    );
  });
}

//mobile img
document.addEventListener('DOMContentLoaded', function() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    const MissionsImages = document.querySelectorAll('.mission-card-img-container');
    const topStoriesImages = document.querySelectorAll('.top-stories-card-img-container');

    setTimeout(() => {
      MissionsImages.forEach(img => {
        img.classList.remove('filtered');
      });
      topStoriesImages.forEach(img => {
        img.classList.remove('filtered');
      });
    }, 1500);
  }
});



