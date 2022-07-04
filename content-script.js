// Add Lichess button below FEN control
const lichessButton = createLichessButton();
const fenContainer = document.getElementById("fencontrol");
fenContainer.appendChild(lichessButton);

// Open Lichess analysis URL in new tab on click
lichessButton.addEventListener("click", () => {
  const lichessUrl = getLichessAnalysisUrl();
  window.open(lichessUrl, "_blank").focus();
});

function getLichessAnalysisUrl() {
  const fenInput = document.getElementById("inputFEN");
  const escapedFen = fenInput.value.replace(/\s/g, "_");
  return `https://lichess.org/analysis/standard/${escapedFen}`;
}

function createLichessButton() {
  const button = document.createElement("input");
  button.setAttribute("id", "analyze-on-lichess");
  button.setAttribute("type", "button");
  button.setAttribute("value", "Analyze on Lichess");
  button.style.marginTop = "15px";
  button.classList.add("myButton", "myButton--dark-blue");
  return button;
}
