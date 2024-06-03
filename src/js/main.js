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




