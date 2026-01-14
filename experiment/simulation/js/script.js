let simsubscreennum = 0;
let temp = 0;

function navNext() {
  for (temp = 0; temp < 2; temp++) {
    document.getElementById("canvas" + temp).style.display = "none";
  }

  simsubscreennum += 1;
  //
  document.getElementById("canvas" + simsubscreennum).style.display = "block";
  document.getElementById("nextButton").style.display = "none";
  // magic();
}

function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}

function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}



// document.addEventListener("DOMContentLoaded", function () {

// });

//   function validateInput() {
//       const inputField = document.getElementById('alphabetInput');
//       const errorText = document.getElementById('errorText');
//       const hintButton = document.getElementById('hintButton');
//       const morseOutput = document.getElementById('morseOutput');
//       const outputImg = document.querySelector(".outputImg");
//       const playButton = document.getElementById('playButton');
//       const hintColumn =document.querySelector(".hintColumn");
//       const imageContainer =document.querySelector(".imageContent");

//       let alphabetInput = inputField.value.toUpperCase();
//       alphabetInput = alphabetInput.replace(/[^A-Z]/g, '');
//       inputField.value = alphabetInput;

//       document.querySelector('.output').textContent = alphabetInput;
//       document.querySelector('.out').textContent = alphabetInput;

//       if (alphabetInput.length === 1) {
//           errorText.textContent = '';
//           hintButton.style.visibility = "visible";
//           outputImg.style.visibility = "hidden";
//           hintColumn.style.display ="grid";
//           hintButton.style.display="grid";
//           imageContainer.style.display="none";

//           morseOutput.style.visibility = "hidden";
//           updateMorseOutput(alphabetInput, true);
//           playButton.disabled = false;
//       } else {
//           if (alphabetInput.length > 0) {
//               errorText.textContent = 'Please enter a single alphabet from A to Z.';
//               hintColumn.style.display="none";
//           } else {
//               errorText.textContent = '';
//             //   hintColumn.style.display ="none";
//           }
//           hintButton.style.visibility = "hidden";
//           outputImg.style.visibility = "hidden";
//           morseOutput.style.visibility = "hidden";
//           playButton.disabled = true;
//       }
//   }

function handleInputChange() {
  const input = document.getElementById("alphabetInput");
  const hintButton = document.getElementById("hintButton");
  const isAlphabetic = /^[a-zA-Z]$/.test(input.value);

  if (isAlphabetic) {
    hintButton.style.display = "block";
  } else {
    hintButton.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("alphabetInput");
  const hintButton = document.getElementById("hintButton");

});


let isFirstCharacter = true;
let isAnimationCompleted = true;
let fullMorse = "";
let clickCount = 0;
let currentCharIndex = 0;

let isPlaying = false;

async function playMorseSequence() {
  if (isPlaying) return;
  isPlaying = true;

  const inputField = document.getElementById("alphabetInput");
  inputField.disabled = true;

  const userInput = inputField.value.toUpperCase();
  const morseOutput = document.querySelector("#morseOutput");
  morseOutput.textContent = "";
  let currentCharIndex = 0;

  const intervalDuration = 800;
  const context = new (window.AudioContext || window.webkitAudioContext)();

  // Ensure audio context is resumed before starting playback
  await context.resume();

  let oscillator;

  async function animateMorseCode() {
    if (currentCharIndex < userInput.length) {
      const char = userInput[currentCharIndex];
      if (char in charToMorse) {
        const morseChar = charToMorse[char];
        let morseIndex = 0;

        function playSymbol() {
          if (morseIndex < morseChar.length) {
            const symbol = morseChar[morseIndex];
            oscillator = context.createOscillator();
            oscillator.frequency.value = 600;
            oscillator.connect(context.destination);
            oscillator.start();

            if (symbol === ".") {
              setTimeout(() => {
                oscillator.stop();
                morseOutput.textContent += ".";
              }, 100);
            } else if (symbol === "-") {
              setTimeout(() => {
                oscillator.stop();
                morseOutput.textContent += "-";
              }, 300);
            }

            morseIndex++;
            setTimeout(playSymbol, intervalDuration);
          } else {
            currentCharIndex++;
            setTimeout(animateMorseCode, intervalDuration);
          }
        }

        playSymbol();
      } else {
        morseOutput.textContent += "Invalid character: " + char;
        currentCharIndex++;
        await sleep(intervalDuration);
        setTimeout(animateMorseCode, intervalDuration);
      }
    } else {
      isPlaying = false;
      inputField.disabled = false;
      document.getElementById("playButton").disabled = false;
    }
  }

  document.getElementById("playButton").disabled = true;
  animateMorseCode();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function repeat() {
  console.log("clickedrepeat");

  simsubscreennum = 1;

  document.getElementById("canvas2").style.visibility = "hidden";

  document.getElementById("canvas1").style.visibility = "visible";
  document.getElementById("repeat").style.visibility = "hidden";

  const selectclear = document.getElementById("myselect");
  selectclear.selectedIndex = 0;
}
function repeat() {
  console.log("clickedrepeat");

  simsubscreennum = 1;

  document.getElementById("canvas2").style.visibility = "hidden";
  document.getElementById("canvas1").style.visibility = "visible";
  document.getElementById("repeat").style.visibility = "hidden";

  document.getElementById("morsedisplay").innerHTML = "";

  var morseImage = document.getElementById("morseImage");

  morseImage.style.visibility = "hidden";

  var numericInput = document.getElementById("numberInput");
  var rangeInput = document.getElementById("slider");

  numericInput.value = 0;

  numberMorse();
}


function updateMorseOutput(alphabet, reset = false) {
  const char = alphabet.toUpperCase();
  const morseCodeMapping = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };

  const morseCode = morseCodeMapping[char];
  const morseOutput = document.getElementById("morseOutput");

  if (morseCode) {
    if (reset) {
      morseOutput.textContent = "";
    }
    morseOutput.style.visibility = "visible";
  } else {
    morseOutput.textContent = "";
    morseOutput.style.visibility = "hidden";
  }
}

function updateOutputImg(alphabet) {
  // Implement the logic to show the image for the given alphabet
  const outputImg = document.querySelector(".outputImg");

  // Example logic for updating the image (replace with your actual logic)
  if (alphabet) {
    // Show the image related to the alphabet
    outputImg.style.visibility = "hidden";
    // For example, you might set the src of an <img> element inside outputImg
    // document.querySelector(".outputImg img").src = `path/to/${alphabet}.png`;
  }
}

const charToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

function displayHintImages() {
  const selectElement = document.querySelector("#alphabetInput");
  const output = selectElement.value.toUpperCase();
  const imageContent = document.querySelector(".imageContent");
  imageContent.style.display = "flex";

  const imageContainer = document.querySelector(".outputImg");
  imageContainer.style.visibility = "visible";
  const nameContainer = document.querySelector(".outputName");

  //   const nameDiv = document.querySelector(".nameDiv");

  const letterNames = {
    A: "Archery",
    B: "Banjo",
    C: "Candy",
    D: "Dog",
    E: "Eye",
    F: "Firetruck",
    G: "Giraffe",
    H: "Hippo",
    I: "Insect",
    J: "Jet",
    K: "Kite",
    L: "Laboratory",
    M: "Mustache",
    N: "Net",
    O: "Orchestra",
    P: "Paddle",
    Q: "Quarterback",
    R: "Robot",
    S: "Submarine",
    T: "Tape",
    U: "Unicorn",
    V: "Vacuum",
    W: "Wand",
    X: "X-ray",
    Y: "Yard",
    Z: "Zebra",
  };

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const morseCode = getMorseCodeForAlphabet(output);
  let morseIndex = 0;

  // Clear previous content
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }

  hideHintButton();

  if (images[output]) {
    let currentIndex = 0;

    // Create and style the image element
    const image = document.createElement("img");
    image.src = images[output].normal; // Start with the normal image
    image.alt = `Image for ${output}`;
    image.style.width = "100%";
    image.style.minWidth = "180px"; // Maximum width of 400px
    image.style.height = "auto"; // Auto height to maintain aspect ratio
    image.style.maxHeight = "250px";
    // image.style.margin = "-45px";
    // image.style.marginLeft = "80px";
    // image.style.paddingLeft = "140px";

    // Append the image to the container
    imageContainer.appendChild(image);

    // nameContainer.textContent = letterNames[output] || '';

    const nameDiv = document.createElement("div");
    nameDiv.textContent = letterNames[output];
    nameDiv.className = "nameDiv";

    // Append the name div to the container
    imageContainer.appendChild(nameDiv);

    // Define the timing intervals
    const intervalTime = 800; // Fixed interval for image change

    // Function to play sound
    function playSound(duration) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration / 1000); // Convert duration to seconds
    }

    // Function to change the image
    let dotIndex = 1;
    let dashIndex = 1;

    function changeImage() {
      if (morseIndex < morseCode.length) {
        const symbol = morseCode[morseIndex];
        let imageSrc;

        if (symbol === ".") {
          // Build the image source based on dotIndex
          imageSrc =
            images[output]["dot" + (dotIndex > 1 ? dotIndex : "")] ||
            images[output].dot;
          playSound(100); // Duration for dot

          // Increment dotIndex for the next dot image
          dotIndex++;
        } else if (symbol === "-") {
          // Build the image source based on dashIndex
          imageSrc =
            images[output]["dash" + (dashIndex > 1 ? dashIndex : "")] ||
            images[output].dash;
          playSound(300); // Duration for dash

          // Increment dashIndex for the next dash image
          dashIndex++;
        }

        // Log information for debugging
        console.log(
          "Morse Code Symbol:",
          symbol,
          "Image Src:",
          imageSrc,
          "Current Index:",
          morseIndex
        );

        // Set the image source
        image.src = imageSrc;
        morseIndex++; // Move to the next Morse code symbol

        // Continue to the next image
        setTimeout(changeImage, intervalTime);
      } else {
        // Show the final Morse code image (no reset to normal)
        // setTimeout(function () {
        //     image.src = images[output].normal; // Reset to normal image
        // }, intervalTime);
      }
    }

    // Initialize the counters before starting the image change process
    dotIndex = 1;
    dashIndex = 1;

    // Start the image change process
    setTimeout(changeImage, intervalTime);
  } else {
    // If no image found for the selected alphabet, display an error or placeholder message
    imageContainer.textContent = "Image not found";
    nameContainer.textContent = "";
  }
  // Add event listener to the "Hint to Remember" button
  //  document.querySelector("#hintToRememberButton").addEventListener("click", displayHintImages);
}

function hideHintButton() {
  const hintButton = document.getElementById("hintButton");
  hintButton.style.display = "none";
}

document.addEventListener("click", function (e) {
  e.target.focus();
});




function displayMap() {
  const mapContainer = document.getElementById("mapContainer");
  const hamMap = document.getElementById("hamMap");
  const viewMapButton = document.getElementById("viewMapButton");
  const closeButton = document.getElementById("closeButton");
  const zoomInButton = document.getElementById("zoomIn");
  const zoomOutButton = document.getElementById("zoomOut");

  const callsignDiv = document.getElementById("callsignDiv");
  const countrySelectDiv = document.querySelector(".countrySelectDiv");
  const btnDiv = document.querySelector(".btnDiv");

  const mapContainerDiv = document.getElementById('mapContainer');
  mapContainerDiv.style.display = 'flex';

  // Hide elements initially
  callsignDiv.style.display = "none";
  countrySelectDiv.style.display = "none";
  btnDiv.style.display = "none";

  // Show the map
  hamMap.style.display = "block";

  // Toggle visibility of the map container
  mapContainer.classList.toggle("hidden");

  // Hide the "View Map" button
  viewMapButton.style.display = "none";

  // Initial zoom level and speed
  let scale = 1;
  const zoomSpeed = 0.1;
  let translateX = 0;
  let translateY = 0;

  // Reset the map to its initial position and scale
  hamMap.style.transform = `translate(0px, 0px) scale(1)`;

  // Smooth zoom and panning
  hamMap.style.transition = "transform 0.2s ease-out";

  // Handle zooming with the scroll wheel
  hamMap.onwheel = function (event) {
    event.preventDefault();
    zoomMap(event.deltaY < 0 ? zoomSpeed : -zoomSpeed, event);
  };

  // Zoom in and out with the buttons
  zoomInButton.onclick = function () {
    zoomMap(zoomSpeed);
  };

  zoomOutButton.onclick = function () {
    zoomMap(-zoomSpeed);
  };

  function zoomMap(delta, event) {
    // Get the position of the cursor relative to the map (for smooth zooming on mouse wheel)
    const rect = hamMap.getBoundingClientRect();
    const offsetX = event ? event.clientX - rect.left : rect.width / 2;
    const offsetY = event ? event.clientY - rect.top : rect.height / 2;

    // Update scale
    scale += delta;

    // Ensure scale doesn't go below 1 (original size)
    if (scale < 1) {
      scale = 1;
      translateX = 0;
      translateY = 0;
      hamMap.style.transform = `translate(0px, 0px) scale(1)`;
    } else {
      // Calculate translation for zoom to keep the map in place
      translateX = offsetX / scale + translateX - offsetX / (scale + delta);
      translateY = offsetY / scale + translateY - offsetY / (scale + delta);
    }

    // Apply transformations
    hamMap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    // Ensure the map stays within the container boundaries after zooming
    constrainMapPosition();
  }

  // Variables for panning
  let isPanning = false;
  let startX, startY;

  // Handle mouse events for panning
  hamMap.onmousedown = function (event) {
    isPanning = true;
    startX = event.clientX;
    startY = event.clientY;
    hamMap.style.cursor = "grabbing";
    event.preventDefault();
  };

  hamMap.onmousemove = function (event) {
    if (isPanning) {
      const dx = (event.clientX - startX) / scale;
      const dy = (event.clientY - startY) / scale;
      translateX += dx;
      translateY += dy;
      startX = event.clientX;
      startY = event.clientY;
      hamMap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      constrainMapPosition();
    }
  };

  hamMap.onmouseup = function () {
    isPanning = false;
    hamMap.style.cursor = "all-scroll";
  };

  hamMap.onmouseleave = function () {
    isPanning = false;
    hamMap.style.cursor = "all-scroll";
  };

  // Handle touch events for panning and pinch-to-zoom
  let initialPinchDistance = null;
  let lastTouchScale = 1;

  hamMap.addEventListener("touchstart", function (event) {
    if (event.touches.length === 1) {
      isPanning = true;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    } else if (event.touches.length === 2) {
      isPanning = false;
      initialPinchDistance = getPinchDistance(event);
      lastTouchScale = scale;
    }
    hamMap.style.cursor = "grabbing";
  });

  hamMap.addEventListener("touchmove", function (event) {
    if (isPanning && event.touches.length === 1) {
      const dx = (event.touches[0].clientX - startX) / scale;
      const dy = (event.touches[0].clientY - startY) / scale;
      translateX += dx;
      translateY += dy;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      hamMap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      constrainMapPosition();
    } else if (event.touches.length === 2) {
      const pinchDistance = getPinchDistance(event);
      scale = lastTouchScale * (pinchDistance / initialPinchDistance);
      if (scale < 1) scale = 1;
      hamMap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      constrainMapPosition();
    }
  });

  hamMap.addEventListener("touchend", function () {
    isPanning = false;
    hamMap.style.cursor = "all-scroll";
    initialPinchDistance = null;
  });

  // Helper function to calculate the distance between two touch points
  function getPinchDistance(event) {
    const dx = event.touches[0].clientX - event.touches[1].clientX;
    const dy = event.touches[0].clientY - event.touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  closeButton.onclick = function () {
    closeMap();
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMap();
    }
  });

  function closeMap() {
    hamMap.style.display = "none";
    mapContainer.classList.add("hidden");
    viewMapButton.style.display = "block";
    callsignDiv.style.display = "grid";
    countrySelectDiv.style.display = "block";
    btnDiv.style.display = "flex";
    mapContainerDiv.style.display = 'none';
  }

  function constrainMapPosition() {
    const containerRect = mapContainer.getBoundingClientRect();
    const mapRect = hamMap.getBoundingClientRect();
  
    const mapWidth = mapRect.width;
    const mapHeight = mapRect.height;
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
  
    // Horizontal constraint: prevent the map from going out of bounds horizontally
    if (mapWidth > containerWidth) {
      if (mapRect.left > containerRect.left) {
        translateX -= (mapRect.left - containerRect.left) / scale;
      } else if (mapRect.right < containerRect.right) {
        translateX += (containerRect.right - mapRect.right) / scale;
      }
    } else {
      // Center the map horizontally if it's smaller than the container
      translateX = (containerWidth - mapWidth) / 2 / scale;
    }
  
    // Vertical constraint: prevent the map from going out of bounds vertically
    if (mapHeight > containerHeight) {
      if (mapRect.top > containerRect.top) {
        translateY -= (mapRect.top - containerRect.top) / scale;
      } else if (mapRect.bottom < containerRect.bottom) {
        translateY += (containerRect.bottom - mapRect.bottom) / scale;
      }
    } else {
      // Center the map vertically if it's smaller than the container
      translateY = (containerHeight - mapHeight) / 2 / scale;
    }
  
    // Apply the constrained position and scaling
    hamMap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }
  
  
  
  
  
}


document.addEventListener("DOMContentLoaded", function () {
  const countries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
      "Antigua and Barbuda", "Argentine Republic", "Armenia", "Australia", "Austria",
      "Azerbaijan Republic", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
      "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
      "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam",
      "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
      "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
      "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire",
      "Croatia", "Cuba", "Cyprus", "Czech Republic",
      "Democratic People's Republic of Korea", "Democratic Republic of the Congo",
      "Democratic Republic of Timor-Leste", "Denmark", "Djibouti", "Dominica",
      "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
      "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
      "Gabonese Republic", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
      "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
      "Honduras", "Hungary", "Iceland", "India", "Indonesia",
      "International Civil Aviation Organization", "Iran", "Iraq", "Ireland",
      "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
      "Kingdom of Eswatini", "Kiribati", "Korea", "Kosovo", "Kuwait",
      "Kyrgyz Republic", "Lao People's Democratic Republic", "Latvia", "Lebanon",
      "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar",
      "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
      "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
      "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
      "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
      "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
      "Palestinian Authority", "Panama", "Papua New Guinea", "Paraguay", "Peru",
      "Philippines", "Poland", "Portugal", "Qatar", "Romania",
      "Russian Federation", "Rwandese Republic", "Saint Kitts and Nevis",
      "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
      "Sao Tome and Principe (Democratic Republic of)", "Saudi Arabia", "Senegal",
      "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic",
      "Slovenia", "Solomon Islands", "Somali Democratic Republic", "South Africa",
      "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
      "Switzerland", "Syrian Arab Republic", "Tajikistan", "Tanzania", "Thailand",
      "Togolese Republic", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
      "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
      "United Nations",
      "United Kingdom of Great Britain and Northern Ireland",
      "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
      "Vatican City State", "Venezuela", "Vietnam", "World Meteorological Organization",
      "Yemen", "Zambia", "Zimbabwe"
  ];

  var callSigns = {
      Afghanistan: "T6A-T6Z, YAA-YAZ",
      Albania: "ZAA-ZAZ",
      Algeria: "7RA-7RZ, 7TA-7YZ",
      Andorra: "C3A-C3Z",
      Angola: "D2A-D3Z",
      "Antigua and Barbuda": "V2A-V2Z",
      "Argentine Republic": "AYA-AZZ, LOA-LWZ, L2A-L9Z",
      Armenia: "EKA-EKZ",
      Australia: "AXA-AXZ, VHA-VNZ, VZA-VZZ",
      Austria: "OEA-OEZ",
      "Azerbaijan Republic": "4JA-4KZ",
      Bahamas: "C6A-C6Z",
      Bahrain: "A9A-A9Z",
      Bangladesh: "S2A-S3Z",
      Barbados: "8PA-8PZ",
      Belarus: "EUA-EWZ",
      Belgium: "ONA-OTZ",
      Belize: "V3A-V3Z",
      Benin: "TYA-TYZ",
      Bhutan: "A5A-A5Z",
      Bolivia: "CPA-CPZ",
      "Bosnia and Herzegovina": "E7A-E7Z",
      Botswana: "A2A-A2Z, 8OA-8OZ",
      Brazil: "PPA-PYZ, ZVA-ZZZ",
      "Brunei Darussalam": "V8A-V8Z",
      Bulgaria: "LZA-LZZ",
      "Burkina Faso": "XTA-XTZ",
      Burundi: "9UA-9UZ",
      Cambodia: "XUA-XUZ",
      Cameroon: "TJA-TJZ",
      Canada: "CFA-CKZ, CYA-CZZ, VAA-VGZ, VOA-VOZ, VXA-VYZ, XJA-XOZ",
      "Cape Verde": "D4A-D4Z",
      "Central African Republic": "TLA-TLZ",
      Chad: "TTA-TTZ",
      Chile: "CAA-CEZ, XQA-XRZ, 3GA-3GZ",
      China: "BAA-BZZ, XSA-XSZ, 3HA-3UZ, VRA-VRZ, XXA-XXZ",
      "China - Hong Kong": "HJA-HKZ",
      "China - Macao ": "XXA-XXZ",
      Colombia: "HJA-HKZ, 5JA-5KZ",
      Comoros: "D6A-D6Z",
      Congo: "TNA-TNZ",
      "Costa Rica": "TEA-TEZ, TIA-TIZ",
      "Côte d'Ivoire": "TUA-TUZ",
      Croatia: "9AA-9AZ",
      Cuba: "CLA-CMZ, COA-COZ, T4A-T4Z",
      Cyprus: "C4A-C4Z, H2A-H2Z, P3A-P3Z, 5BA-5BZ",
      "Czech Republic": "OKA-OLZ",
      "Democratic People's Republic of Korea": "HMA-HMZ, P5A-P9Z",
      "Democratic Republic of the Congo": "9OA-9TZ",
      "Democratic Republic of Timor-Leste": "4WA-4WZ",
      Denmark: "OUA-OZZ, XPA-XPZ, 5PA-5QZ",
      Djibouti: "J2A-J2Z",
      Dominica: "J7A-J7Z",
      "Dominican Republic": "HIA-HIZ",
      Ecuador: "HCA-HDZ",
      Egypt: "SSA-SSM, SUA-SUZ, 6AA-6BZ",
      "El Salvador": "HUA-HUZ, YSA-YSZ",
      "Equatorial Guinea": "3CA-3CZ",
      Eritrea: "E3A-E3Z",
      Estonia: "ESA-ESZ",
      Ethiopia: "ETA-ETZ, 9EA-9FZ",
      Fiji: "3DN-3DZ",
      Finland: "OFA-OJZ",
      France: "FAA-FZZ, HWA-HYZ, THA-THZ, TKA-TKZ, TMA-TMZ,\n" +
          "TOA-TQZ, TVA-TXZ",
      "Gabonese Republic": "TRA-TRZ",
      Gambia: "C5A-C5Z",
      Georgia: "4LA-4LZ",
      Germany: "DAA-DRZ, Y2A-Y9Z",
      Ghana: "9GA-9GZ",
      Greece: "J4A-J4Z, SVA-SZZ",
      Grenada: "J3A-J3Z",
      Guatemala: "TDA-TDZ, TGA-TGZ",
      Guinea: "3XA-3XZ",
      "Guinea-Bissau": "J5A-J5Z",
      Guyana: "8RA-8RZ",
      Haiti: "HHA-HHZ, 4VA-4VZ",
      Honduras: "HQA-HRZ",
      Hungary: "HAA-HAZ, HGA-HGZ",
      Iceland: "TFA-TFZ",
      India: "ATA-AWZ, VTA-VWZ, 8TA-8YZ",
      Indonesia: "JZA-JZZ, PKA-POZ, YBA-YHZ, 7AA-7IZ, 8AA-8IZ",
      "International Civil Aviation Organization": "4YA-4YZ",
      Iran: "EPA-EQZ, 9BA-9DZ",
      Iraq: "HNA-HNZ, YIA-YIZ",
      Ireland: "EIA-EJZ",
      Israel: "4XA-4XZ, 4ZA-4ZZ",
      Italy: "IAA-IZZ",
      Jamaica: "6YA-6YZ",
      Japan: "JAA-JSZ, 7JA-7NZ, 8JA-8NZ",
      Jordan: "JYA-JYZ",
      Kazakhstan: "UNA-UQZ",
      Kenya: "5YA-5ZZ",
      "Kingdom of Eswatini": "3DA-3DM",
      Kiribati: "T3A-T3Z",
      Korea: "DSA-DTZ, D7A-D9Z, HLA-HLZ, 6KA-6NZ",
      Kosovo: "Z6A-Z6Z",
      Kuwait: "9KA-9KZ",
      "Kyrgyz Republic": "EXA-EXZ",
      "Lao People's Democratic Republic": "XWA-XWZ",
      Latvia: "YLA-YLZ",
      Lebanon: "ODA-ODZ",
      Lesotho: "7PA-7PZ",
      Liberia: "A8A-A8Z, D5A-D5Z, ELA-ELZ, 5LA-5MZ, 6ZA-6ZZ",
      Libya: "5AA-5AZ",
      Lithuania: "LYA-LYZ",
      Luxembourg: "LXA-LXZ",
      Madagascar: "5RA-5SZ, 6XA-6XZ",
      Malawi: "7QA-7QZ",
      Malaysia: "9MA-9MZ, 9WA-9WZ",
      Maldives: "8QA-8QZ",
      Mali: "TZA-TZZ",
      Malta: "9HA-9HZ",
      "Marshall Islands": "V7A-V7Z",
      Mauritania: "5TA-5TZ",
      Mauritius: "3BA-3BZ",
      Mexico: "XAA-XIZ, 4AA-4CZ, 6DA-6JZ",
      Micronesia: "V6A-V6Z",
      Moldova: "ERA-ERZ",
      Monaco: "3AA-3AZ",
      Mongolia: "JTA-JVZ",
      Montenegro: "4OA-4OZ",
      Morocco: "CNA-CNZ, 5CA-5GZ",
      Mozambique: "C8A-C9Z",
      Myanmar: "XYA-XZZ",
      Namibia: "V5A-V5Z",
      Nauru: "C2A-C2Z",
      Nepal: "9NA-9NZ",
      Netherlands: "PAA-PIZ, P4A-P4Z, PJA-PJZ",
      "New Zealand": "ZKA-ZMZ, E5A-E5Z, E6A-E6Z",
      Nicaragua: "HTA-HTZ, H6A-H7Z, YNA-YNZ",
      Niger: "5UA-5UZ",
      Nigeria: "5NA-5OZ",
      "North Macedonia": "Z3A-Z3Z",
      Norway: "JWA-JXZ, LAA-LNZ, 3YA-3YZ",
      Oman: "A4A-A4Z",
      Pakistan: "APA-ASZ, 6PA-6SZ",
      Palau: "T8A-T8Z",
      "Palestinian Authority": "E4A-E4Z",
      Panama: "HOA-HPZ, H3A-H3Z, H8A-H9Z, 3EA-3FZ",
      "Papua New Guinea": "P2A-P2Z",
      Paraguay: "ZPA-ZPZ",
      Peru: "OAA-OCZ, 4TA-4TZ",
      Philippines: "DUA-DZZ, 4DA-4IZ",
      Poland: "HFA-HFZ, SNA-SRZ, 3ZA-3ZZ",
      Portugal: "CQA-CUZ",
      Qatar: "A7A-A7Z",
      Romania: "YOA-YRZ",
      "Russian Federation": "RAA-RZZ, UAA-UIZ",
      "Rwandese Republic": "9XA-9XZ",
      "Saint Kitts and Nevis": "V4A-V4Z",
      "Saint Lucia": "J6A-J6Z",
      "Saint Vincent and the Grenadines": "J8A-J8Z",
      Samoa: "5WA-5WZ",
      "San Marino": "T7A-T7Z",
      "Sao Tome and Principe (Democratic Republic of)": "S9A-S9Z",
      "Saudi Arabia": "HZA-HZZ, 7ZA-7ZZ, 8ZA-8ZZ",
      Senegal: "6VA-6WZ",
      Serbia: "YTA-YUZ",
      Seychelles: "S7A-S7Z",
      "Sierra Leone": "9LA-9LZ",
      Singapore: "S6A-S6Z, 9VA-9VZ",
      "Slovak Republic": "OMA-OMZ",
      Slovenia: "S5A-S5Z",
      "Solomon Islands": "H4A-H4Z",
      "Somali Democratic Republic": "T5A-T5Z, 6OA-6OZ",
      "South Africa": " S8A-S8Z, ZRA-ZUZ",
      "South Sudan": "Z8A-Z8Z",
      Spain: "AMA-AOZ, EAA-EHZ",
      "Sri Lanka": "4PA-4SZ",
      Sudan: "SSN-STZ, 6TA-6UZ, ",
      Suriname: "PZA-PZZ, ",
      Sweden: "SAA-SMZ, 7SA-7SZ, 8SA-8SZ",
      Switzerland: "HBA-HBZ, HEA-HEZ",
      "Syrian Arab Republic": "YKA-YKZ, 6CA-6CZ",
      Tajikistan: "EYA-EYZ",
      Tanzania: "5HA-5IZ",
      Thailand: "E2A-E2Z, HSA-HSZ",
      "Togolese Republic": "5VA-5VZ",
      Tonga: "A3A-A3Z",
      "Trinidad and Tobago": "9YA-9ZZ",
      Tunisia: "TSA-TSZ, 3VA-3VZ",
      Turkey: "TAA-TCZ, YMA-YMZ",
      Turkmenistan: "EZA-EZZ",
      Tuvalu: "T2A-T2Z",
      Uganda: "5XA-5XZ",
      Ukraine: "EMA-EOZ, URA-UZZ",
      "United Arab Emirates": "A6A-A6Z",
      "United Nations": "4UA-4UZ",
      "United Kingdom of Great Britain and Northern Ireland": "GAA-GZZ, MAA-MZZ, VPA-VQZ, VSA-VSZ, ZBA-ZJZ,\n" +
          "ZNA-ZOZ, ZQA-ZQZ,2AA-2ZZ",
      "United States of America": "AAA-ALZ, KAA-KZZ, NAA-NZZ, WAA-WZZ",
      Uruguay: "CVA-CXZ",
      Uzbekistan: "UJA-UMZ",
      Vanuatu: "YJA-YJZ",
      "Vatican City State": "HVA-HVZ",
      Venezuela: "YVA-YYZ, 4MA-4MZ",
      Vietnam: "XVA-XVZ, 3WA-3WZ",
      "World Meteorological Organization": "C7A-C7Z",
      Yemen: "7OA-7OZ",
      Zambia: "9IA-9JZ",
      Zimbabwe: "Z2A-Z2Z",
  };

  const input = document.getElementById("countryDropdown");
  const dropdown = document.getElementById("countryList");
  const mainCallDiv = document.getElementById("mainCallDiv");
  let previousCountry = "";


  function displayDropdown() {
      const searchQuery = input.value.toLowerCase();
      const filteredCountries = countries.filter((country) =>
          country.toLowerCase().startsWith(searchQuery)
      );

      dropdown.innerHTML = "";
      if (searchQuery === "") {
          filteredCountries.push(...countries);
          // mainCallDiv.style.visibility="hidden";
          mainCallDiv.style.visibility = "hidden";  
      }

      filteredCountries.forEach((country) => {
          const countryLink = document.createElement("a");
          countryLink.href = "#";
          countryLink.textContent = country;
          dropdown.appendChild(countryLink);

          countryLink.addEventListener("click", function (event) {
              input.value = country;
              dropdown.style.display = "none";

              // console.log("label blocked");
              event.preventDefault();
          });
      });

      if (filteredCountries.length > 0) {
          dropdown.style.display = "block";
          document.getElementById("errorMessage").textContent = "";
      } else {
          dropdown.style.display = "none";
      }
  }

  function showDropdownOnClick() {
      displayDropdown();
      dropdown.style.display = "block";
  }

  input.addEventListener("input", displayDropdown);
  input.addEventListener("click", showDropdownOnClick);

  function hideDropdown() {
      dropdown.style.display = "none";
  }

  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
      if (
          !event.target.matches("#countryDropdown") &&
          !event.target.matches("#countryList")
      ) {
          hideDropdown();
      }
  });
  document.getElementById("convertButton").addEventListener("click", function () {
      const selectedCountryInput = input.value.trim().toLowerCase();
      const errorMessageElement = document.getElementById("errorMessage");
      const labels = document.querySelectorAll(".label");
      const outputs = document.querySelectorAll(".output");

      // Helper function to toggle the display of elements
      function toggleElementsDisplay(displayValue) {
          labels.forEach(label => label.style.display = displayValue);
          outputs.forEach(output => output.style.display = displayValue);
      }

      if (selectedCountryInput === "") {
          errorMessageElement.textContent = "Please select a country.";
          toggleElementsDisplay("none"); // Hide labels and outputs if no input
          mainCallDiv.style.visibility = "hidden";
          return;
      }

      const matchingCountry = countries.find(
          country => country.toLowerCase() === selectedCountryInput
      );

      if (!matchingCountry) {
          errorMessageElement.textContent =
              "Invalid country name. Please select from the list.";
          toggleElementsDisplay(
          "none"); // Hide labels and outputs if country is not found
          mainCallDiv.style.visibility = "hidden";
          return;
      }

      if (matchingCountry !== previousCountry) {
        mainCallDiv.style.visibility = "hidden";
        previousCountry = matchingCountry;
    }

      // Clear error message and show elements
      errorMessageElement.textContent = "";
      toggleElementsDisplay("block");

      // Display the selected country name and call sign
      document.querySelector(".country").textContent = matchingCountry;
      document.querySelector(".callsignCountry").textContent = callSigns[matchingCountry];
      mainCallDiv.style.visibility = "visible";
  });

});




