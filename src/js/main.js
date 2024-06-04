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
const showMoreMissionsButton = document.querySelector('.show-more-button.missions-button');
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
  missionsIsHidden = !missionsIsHidden; // Inverser l'état
});

//=============================================================================//
//=============================show more top stories================================================//
//=============================================================================//
const showMoreTopStoriesButton = document.querySelector('.show-more-button.top-stories-button');
let topStoriesIsHidden = true;

showMoreTopStoriesButton.addEventListener('click', function() {
  const hiddenCards = document.querySelectorAll('.top-stories-card .hidden-top-stories');
  if (topStoriesIsHidden) {
    hiddenCards.forEach(card => {
      card.classList.remove('is-hidden');
    });
    showMoreTopStoriesButton.textContent = 'Masquer toutes les top stories';
  } else {
    hiddenCards.forEach(card => {
      card.classList.add('is-hidden');
    });
    showMoreTopStoriesButton.textContent = 'Afficher plus de top stories';
  }
  topStoriesIsHidden = !topStoriesIsHidden; // Inverser l'état
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
const burgerMenu = document.querySelectorAll('.burger-menu');
const burgerOverlay = document.querySelectorAll('.burger-overlay');
const burgerCloseButton = document.querySelectorAll('.close-overlay-button');

burgerMenu.addEventListener('click', function() {
  burgerOverlay.classList.add('is-active');
});

burgerCloseButton.addEventListener('click', function() {
  burgerOverlay.classList.remove('is-active');
});