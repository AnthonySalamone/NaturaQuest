//=============================================================================//
//=============================filter================================================//
//=============================================================================//

document.addEventListener('DOMContentLoaded', function() {
  var filterItems = document.querySelectorAll('.list-menu li');
  var cards = document.querySelectorAll('.mission-card');

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
});

//=============================================================================//
//=============================show more missions================================================//
//=============================================================================//
const showMoreButton = document.querySelector('.show-more-button');
let isHidden = true;

showMoreButton.addEventListener('click', function() {
  const hiddenCards = document.querySelectorAll('.mission-card .hidden-missions');
  if (isHidden) {
    hiddenCards.forEach(card => {
      card.classList.remove('is-hidden');
    });
    showMoreButton.textContent = 'Masquer toutes les missions';
  } else {
    hiddenCards.forEach(card => {
      card.classList.add('is-hidden');
    });
    showMoreButton.textContent = 'Afficher plus de missions';
  }
  isHidden = !isHidden; // Inverser l'état
});

//=============================================================================//
//=============================behavior cards================================================//
//=============================================================================//

document.querySelectorAll('.behavior-card .arrow').forEach(arrow => {
  arrow.addEventListener('click', function() {
    const behaviorCard = arrow.closest('.behavior-card');
    if (behaviorCard.classList.contains('is-open')) {
      behaviorCard.classList.remove('is-open');
      behaviorCard.classList.add('is-closed');
      //after 0.3s delay add display:none to .is-closed ul
    } else {
      behaviorCard.classList.remove('is-closed');
      behaviorCard.classList.add('is-open');
      //after 0.3s delay add display:block to .is-open ul
    }
  });
});


//=============================================================================//
//=============================burger menu================================================//
//=============================================================================//
const burgerMenu = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.burger-overlay');
const burgerCloseButton = document.querySelector('.close-overlay-button');

burgerMenu.addEventListener('click', function() {
  burgerOverlay.classList.add('is-active');
});

burgerCloseButton.addEventListener('click', function() {
  burgerOverlay.classList.remove('is-active');
});