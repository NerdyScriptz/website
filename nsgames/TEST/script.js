document.addEventListener("DOMContentLoaded", () => {
    const settingsModal = document.getElementById("settingsModal");
    const themeSelector = document.getElementById("themeSelector");
    const backgroundSelector = document.getElementById("backgroundSelector");
    const particleToggle = document.getElementById("particleToggle");

    // Toggle Modal Visibility
    document.getElementById("settingsToggle").addEventListener("click", () => {
        settingsModal.style.display = "block";
    });

    document.getElementById("closeSettings").addEventListener("click", () => {
        settingsModal.style.display = "none";
    });

    // Apply Settings
    const applySettings = () => {
        document.body.className = themeSelector.value;
        document.body.style.backgroundImage = backgroundSelector.value === "gradient" ? "" : `url('${backgroundSelector.value}.jpg')`;
        document.getElementById("particles-js").style.display = particleToggle.checked ? "block" : "none";
    };

    // Event Listeners
    themeSelector.addEventListener("change", applySettings);
    backgroundSelector.addEventListener("change", applySettings);
    particleToggle.addEventListener("change", applySettings);

    // Initialize
    applySettings();

    // Dynamic Game Cards
    const games = [
        { title: "Space Invaders", tags: ["Shooter", "Retro"], rating: "★★★★★" },
        { title: "Snake", tags: ["Classic", "Arcade"], rating: "★★★★☆" },
    ];

    const gameList = document.getElementById("gameList");
    games.forEach(game => {
        gameList.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="game-card">
                    <h5>${game.title}</h5>
                    <p>${game.rating}</p>
                    <div class="card-tags">
                        ${game.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("")}
                    </div>
                    <button class="play-btn">Play Now</button>
                </div>
            </div>
        `;
    });
});
