const darkColorsArr = [
    "#1B2631", "#2C3E50", "#34495E", "#2C2C2C", "#616A6B",
    "#4A235A", "#2F4F4F", "#0E4B5A", "#36454F", "#800020",
    "#3D2B1F", "#1C2833", "#4B0082", "#556B2F", "#191970",
    "#483D8B", "#013220", "#3E2723", "#2F1B0C", "#4E342E"
  ];
  
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor;