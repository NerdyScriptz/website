// Initialize game state
const gameState = {
    turn: 1,
    global: {
      manpower: 1000,
      supplies: 500,
      industry: 200,
    },
    countries: {
      france: { manpower: 300, industry: 100, supplies: 50 },
      germany: { manpower: 500, industry: 200, supplies: 80 },
    },
  };
  
  // Update global UI
  function updateGlobalUI() {
    document.getElementById('manpower').textContent = gameState.global.manpower;
    document.getElementById('supplies').textContent = gameState.global.supplies;
    document.getElementById('industry').textContent = gameState.global.industry;
    document.getElementById('turn-count').textContent = gameState.turn;
  }
  
  // Update country details
  function updateCountryDetails(country) {
    const details = gameState.countries[country];
    document.getElementById('country-name').textContent = country.charAt(0).toUpperCase() + country.slice(1);
    document.getElementById('country-manpower').textContent = details.manpower;
    document.getElementById('country-industry').textContent = details.industry;
    document.getElementById('country-supplies').textContent = details.supplies;
  }
  
  // Handle end turn
  document.getElementById('end-turn').addEventListener('click', () => {
    gameState.turn++;
    Object.values(gameState.countries).forEach((country) => {
      country.manpower += 50; // Example: Generate manpower
      country.supplies += 30; // Example: Generate supplies
    });
    updateGlobalUI();
  });
  
  // Handle country selection
  const countries = document.querySelectorAll('#world-map path');
  countries.forEach((country) => {
    country.addEventListener('click', () => {
      updateCountryDetails(country.id);
    });
  });
  
  // Initial setup
  updateGlobalUI();
  