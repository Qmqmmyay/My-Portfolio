function addRecommendation(event) {
  event.preventDefault(); // ✅ Prevents page refresh

  let recommendation = document.getElementById("new-recommendation-text");
  let recommender = document.getElementById("new-recommender");

  if (recommendation.value.trim() !== "" && recommender.value.trim() !== "") {
    console.log("New recommendation added");

    // Create new recommendation card
    let element = document.createElement("div");
    element.className = "recommendation-card";
    element.innerHTML = `
      <p class="recommendation-text">"${recommendation.value}"</p>
      <p class="recommender">- ${recommender.value}</p>
    `;

    // Append to grid
    document.getElementById("recommendations-grid").appendChild(element);

    // Reset values
    recommendation.value = "";
    recommender.value = "";
    // Show popup
    showPopup(true)
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
