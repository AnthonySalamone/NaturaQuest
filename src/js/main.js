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

        // Toggle the 'is-active' class on the clicked filter
        filterItem.classList.toggle('is-active');

        // Get all active filters
        var activeFilters = Array.from(filterItems).filter(item => item.classList.contains('is-active'));

        // If no filters are active, show all cards
        if (activeFilters.length === 0) {
          cards.forEach(card => card.style.display = 'block');
          return;
        }

        // Create a set of filters
        var activeClasses = activeFilters.map(item => item.getAttribute('data-filter'));

        // Filter cards based on active filters
        cards.forEach(function(card) {
          var matches = activeClasses.some(activeClass => card.classList.contains(activeClass));
          card.style.display = matches ? 'block' : 'none';
        });
      });
    });
  }

  // Show more missions functionality
  const showMoreMissionsButton = document.querySelector('.show-more-button.missions-button');
  if (showMoreMissionsButton) {
    let missionsIsHidden = true;

    showMoreMissionsButton.addEventListener('click', function() {
      const hiddenCards = document.querySelectorAll('.mission-card .hidden-missions');
      if (missionsIsHidden) {
        hiddenCards.forEach(card => {
          card.classList.remove('is-hidden');
        });
        showMoreMissionsButton.textContent = 'Masquer toutes les missions';
      } else {
        hiddenCards.forEach(card => {
          card.classList.add('is-hidden');
        });
        showMoreMissionsButton.textContent = 'Afficher plus de missions';
      }
      missionsIsHidden = !missionsIsHidden;
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
  // const behaviorArrows = document.querySelectorAll('.behavior-card .arrow');

  // if (behaviorArrows.length > 0) {
  //   behaviorArrows.forEach(arrow => {
  //     arrow.addEventListener('click', function() {
  //       const behaviorCard = arrow.closest('.behavior-card');
  //       const behaviorCardUl = behaviorCard.querySelector('ul');
  //       const behaviorCardImg = behaviorCard.querySelector('.behavior-img');

  
  //       if (behaviorCard.classList.contains('is-open')) {
  //         behaviorCard.classList.remove('is-open');
  //         behaviorCard.classList.add('is-closed');
  //         setTimeout(() => {
  //           behaviorCardUl.style.height = '0px'; 
  //           behaviorCardImg.classList.remove('is-active'); 
  //           behaviorCardImg.style.display = 'none'; 

  //         }, 300);
  //       } else {
  //         behaviorCard.classList.remove('is-closed');
  //         behaviorCard.classList.add('is-open');  
  //         behaviorCardUl.style.height = behaviorCardUl.scrollHeight + 'px';
  //         behaviorCardImg.style.display = 'block'; 
  //         setTimeout(() => {
  //           behaviorCardImg.classList.add('is-active'); 
  //         }, 200);
  //       }
  //     });
  //   });
  // }

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
    // Créez l'animation avec ScrollTrigger
    gsap.to(pinnedNumbers, {
      y: 500, // Déplace l'élément de 200 pixels vers le bas
      scrollTrigger: {
        trigger: pinnedNumbers, // Déclencheur de l'animation
        start: "top 50%", // Déclenche l'animation quand le haut de l'élément atteint 80% de la fenêtre
        end: "bottom 20%", // Termine l'animation quand le bas de l'élément atteint 20% de la fenêtre
        scrub: true, // Permet une animation fluide en fonction du défilement
        markers: true, // Ajoute des marqueurs pour déboguer (supprimez cette ligne en production)
      }
    });
  }
});



// MOCKUP
const heroMockup = document.getElementById('heroMockup');

if (heroMockup && window.innerWidth > 1200) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroMockup, // Déclencheur de l'animation
      start: "top 10%", // Déclenche l'animation quand le haut de l'élément atteint 10% de la fenêtre
      end: "bottom -110%", // Termine l'animation quand le bas de l'élément atteint -30% de la fenêtre
      scrub: true,
      pin: true, // Permet une animation fluide en fonction du défilement
      markers: true, // Ajoute des marqueurs pour déboguer (supprimez cette ligne en production)
    }
  });
}

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
          markers: true // Ajoute des marqueurs pour le débogage
        }
      }
    );
  });
}

// // Récupérer le nom du fichier actuel dans l'URL
// const currentUrl = window.location.pathname.split('/').pop();

// // Vérifier si le nom du fichier est différent de "index.html"
// if (currentUrl !== "index.html") {
//   const sections = document.querySelectorAll('section');

//   if (sections) {
//     sections.forEach(section => {
//       gsap.fromTo(section, 
//         { y: 150 }, 
//         {
//           y: 0,
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "top center",
//             scrub: true,
//             markers: true 
//           }
//         }
//       );
//     });
//   }
// }


