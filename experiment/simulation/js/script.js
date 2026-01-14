let simsubscreennum=0;
let temp=0;


	
function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.display="none";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.display="block";
	document.getElementById("nextButton").style.display="none";
	// magic();

	
	
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}



document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById('numberInput').addEventListener('keypress', function (e) {
//  var errorDisplay = document.getElementById("warningMessage");
//  if (e.key < '0' || e.key > '9') {
//   errorDisplay.style.visibility = "visible";
//   e.preventDefault();
// } else {
//   errorDisplay.style.visibility = "hidden";
// }
  });

//   function toggleTable(option) {
//     const alphabetTable = document.getElementById('alphabetTable');
//     const figureCodeTable = document.getElementById('figureCodeTable');

//     if (option === 'alphabets') {
//         alphabetTable.style.display = 'flex';
//         figureCodeTable.style.display = 'none';
//     } else if (option === 'figure-code') {
//         alphabetTable.style.display = 'none';
//         figureCodeTable.style.display = 'block';
//     }
// }


    function toggleTable(option){
        const alphabetTable = document.getElementById('alphabetTable');
        const figureCodeTable =document.getElementById('figureCodeTable');
        const backButtonDiv = document.getElementById('backDiv');
        
       
    
        const alpha1 = document.querySelector('.alpha1');
        const num1 = document.querySelector('.num1');

        const pronounceDiv =document.querySelector('.pronounceDiv');
        pronounceDiv.style.display='none';

        const spokenvaleDiv =document.querySelector('.spokenvaleDiv');
        spokenvaleDiv.style.visibility='hidden';

        if(option == 'alphabets'){
            // const pronounceDiv =document.querySelector('.pronounceDiv');
            // pronounceDiv.style.display='none';
            const audText =document.querySelector('.audText');
            audText.style.display ='none';

            alphabetTable.style.display ='flex';
            figureCodeTable.style.display ='none';
            const phoneticsDiv =document.querySelector('.phoneticsDiv');
            phoneticsDiv.style.display='grid';
            document.querySelector('.alpha1').style.display = 'none'; // Show alphabet
            document.querySelector('.alpha2').style.display = 'none'; // Show phonetics for alphabet
            document.querySelector('.num1').style.display = 'none'; // Hide figure code
            document.querySelector('.num2').style.display = 'none'; // Hide phonetics for figure code
            document.querySelector('.figurecodeSelect').textContent='';
            document.querySelector('.phoneticsText2').textContent = '';
            document.querySelector('.spokenvalue').textContent = '';
            document.querySelector('.spokenvalue').style.display = 'flex';
            document.getElementById('mainDiv2').style.display='none';
            document.getElementById("backDiv").style.display ='none';
            
            // console.log("alphabet");

            // const pronounceDiv =document.querySelector('.pronounceDiv');
            // pronounceDiv.style.display='grid';
    
            // const spokenvaleDiv =document.querySelector('.spokenvaleDiv');
            // spokenvaleDiv.style.visibility='hidden';
            
            
            if (!alpha1.textContent.trim() || !num1.textContent.trim()) {
                backButtonDiv.style.display = 'none';
            } else {
                backButtonDiv.style.display = 'none';
            }
            backButtonDiv.style.display = 'none';
            
        } else if (option == 'figure-code'){
            const pronounceDiv =document.querySelector('.pronounceDiv');
            pronounceDiv.style.display='none';
            const audText =document.querySelector('.audText');
            audText.style.display ='none';

            alphabetTable.style.display = 'none';
            figureCodeTable.style.display ='flex';
            const phoneticsDiv =document.querySelector('.phoneticsDiv');
            phoneticsDiv.style.display='grid';
            document.querySelector('.num1').style.display = 'none'; // Show figure code
            document.querySelector('.num2').style.display = 'none'; // Show phonetics for figure code
            document.querySelector('.alpha1').style.display = 'none'; // Hide alphabet
            document.querySelector('.alpha2').style.display = 'none'; // Hide phonetics for alphabet
            document.querySelector('.alphaSelect').textContent = '';
            document.querySelector('.phoneticsText').textContent='';
            document.querySelector('.spokenvalue').textContent = '';
            document.querySelector('.spokenvalue').style.display = 'flex';
            document.getElementById('mainDiv2').style.display='none';
            document.getElementById("backDiv").style.display ='none';
            // console.log("figure code");

            if (!alpha1.textContent.trim() || !num1.textContent.trim()) {
                backButtonDiv.style.display = 'none';
            } else {
                backButtonDiv.style.display = 'none';
            }
            backButtonDiv.style.display = 'none';
        }
    }


    function getPhonetics(type, value) {
        if (type === "alphabet") {
          var alphabetPhonetics = {
            A: "Alfa",
            B: "Bravo",
            C: "Charlie",
            D: "Delta",
            E: "Echo",
            F: "Foxtrot",
            G: "Golf",
            H: "Hotel",
            I: "India",
            J: "Juliett",
            K: "Kilo",
            L: "Lima",
            M: "Mike",
            N: "November",
            O: "Oscar",
            P: "Papa",
            Q: "Quebec",
            R: "Romeo",
            S: "Sierra",
            T: "Tango",
            U: "Uniform",
            V: "Victor",
            W: "Whiskey",
            X: "X-ray",
            Y: "Yankee",
            Z: "Zulu"
          };
          return alphabetPhonetics[value] || "Not Available";
        } else if (type === "number") {
          var numberPhonetics = {
            0: "Nadazero",
            1: "Unaone",
            2: "Bissotwo",
            3: "Terrathree",
            4: "Kartefour",
            5: "Pantafive",
            6: "Soxisix",
            7: "Setteseven",
            8: "Oktoeight",
            9: "Novenine",
            "0.0": "Decimal",
            ".": "Stop"
          };
          return numberPhonetics[value] || "Not Available";
        }
      }


      function getPhonetics2(type, value) {
        var alphabetSpokenValues = {
            A: "AL FAH", B: "BRAH VOH", C: "CHAR LEE", D: "DELL TAH",
            E: "ECK OH", F: "FOKS TROT", G: "GOLF", H: "HOH TELL",
            I: "IN DEE AH", J: "JEW LEE ETT", K: "KEY LOH", L: "LEE MAH",
            M: "MIKE", N: "NO VEM BER", O: "OSS CAH", P: "PAH PAH",
            Q: "KEH BECK", R: "ROW ME OH", S: "SEE AIR RAH", T: "TANG GO",
            U: "YOU NEE FORM", V: "VIK TAH", W: "WISS KEY", X: "ECKS RAY",
            Y: "YANG KEY", Z: "ZOO LOO"
            // Add more as needed
        };
    
        var numberSpokenValues = {
            0: "NAH-DAH-ZAY-ROH", 1: "OO-NAH-WUN", 2: "BEES-SOH-TOO",
            3: "TAY-RAH-TREE", 4: "KAR-TAY-FOWER", 5: "PAN-TAH-FIVE",
            6: "SOK-SEE-SIX", 7: "SAY-TAY-SEVEN", 8: "OK-TOH-AIT",
            9: "NO-VAY-NINER", "0.0": "DAY-SEE-MAL", ".": "STOP"
            // Add more as needed
        };
    
        return type === "alphabet" ? alphabetSpokenValues[value] : numberSpokenValues[value];
    }
      
      function displaySelection(type, value) {
        if (type === "alphabet") {
            const pronounceDiv =document.querySelector('.pronounceDiv');
            pronounceDiv.style.display='flex';

            const audText =document.querySelector('.audText');
            audText.style.display ='flex';

            document.querySelector('.alphaSelect').textContent = value;
            document.querySelector('.phoneticsText').textContent = getPhonetics(type, value);
            document.querySelector('.alpha1').style.display = 'inline'; // Show alphabet
            document.querySelector('.alpha2').style.display = 'inline'; // Show phonetics for alphabet
            document.querySelector('.num1').style.display = 'none'; // Hide figure code
            document.querySelector('.num2').style.display = 'none'; // Hide phonetics for figure code
            document.getElementById('alphabetTable').style.display = 'none';
            document.getElementById('backDiv').style.display = 'flex';
            document.getElementById('mainDiv2').style.display='flex';
            document.getElementById('backButton').style.display ='flex';
            
        } else if (type === "number") {
            const pronounceDiv =document.querySelector('.pronounceDiv');
            pronounceDiv.style.display='flex';

            const audText =document.querySelector('.audText');
            audText.style.display ='flex';
            document.querySelector('.figurecodeSelect').textContent = value;
            document.querySelector('.phoneticsText2').textContent = getPhonetics(type, value);
            document.querySelector('.num1').style.display = 'inline'; // Show figure code
            document.querySelector('.num2').style.display = 'inline'; // Show phonetics for figure code
            document.querySelector('.alpha1').style.display = 'none'; // Hide alphabet
            document.querySelector('.alpha2').style.display = 'none'; // Hide phonetics for alphabet
            document.getElementById('figureCodeTable').style.display = 'none';
            document.getElementById('mainDiv2').style.display='flex';
            document.getElementById('backDiv').style.display = 'flex';
            document.getElementById('backButton').style.display='flex';
            // console.log("backbtn")
        }
    }
    
      
// Add event listener to the pronounce button
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('pronounce').addEventListener('click', function() {
//         var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
//         var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
//         var spokenValue = "";
//         document.querySelector('.spokenvaleDiv').style.display = 'block';

//         if (selectedAlphabet) {
//             spokenValue = getPhonetics2("alphabet", selectedAlphabet);
//         } else if (selectedNumber) {
//             spokenValue = getPhonetics2("number", selectedNumber);
//         }

//         // Display the spoken value
//         document.querySelector('.spokenvalue').textContent = spokenValue;

//         // Use getPhonetics function for speech synthesis
//         var audioValue = selectedAlphabet ? getPhonetics("alphabet", selectedAlphabet) : getPhonetics("number", selectedNumber);

//         if (audioValue) {
//             var utterance = new SpeechSynthesisUtterance(audioValue);

//             // Select a clear and suitable voice
//             var voices = speechSynthesis.getVoices();
//             for (var i = 0; i < voices.length; i++) {
//                 if (voices[i].lang === 'en-US' || voices[i].name.includes('Google US English')) {
//                     utterance.voice = voices[i];
//                     break;
//                 }
//             }

//             // Adjust the rate, pitch, and volume for clarity
//             utterance.rate = 0.9;
//             utterance.pitch = 1;
//             utterance.volume = 1;

//             // Speak the phonetic value
//             speechSynthesis.speak(utterance);
//         }
//     });  
// });


//Old used code ===========>
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('pronounce').addEventListener('click', function() {
//         var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
//         var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
//         var spokenValue = "";
//         document.querySelector('.spokenvaleDiv').style.visibility = 'visible';
//         document.querySelector('.spokenvalue').style.visibility = 'visible';
//         // Determine spoken value based on selection
//         if (selectedAlphabet) {
//             spokenValue = getPhonetics2("alphabet", selectedAlphabet.toUpperCase()); // Ensure uppercase for mapping
//         } else if (selectedNumber) {
//             spokenValue = getPhonetics2("number", selectedNumber.toUpperCase());
//         } else {
//             spokenValue = "Please select an alphabet or number."; // Default message if nothing is selected
//         }

//         // Display the spoken value
//         document.querySelector('.spokenvalue').textContent = spokenValue;

//         // Use the spoken value for speech synthesis
//         if (spokenValue && spokenValue !== "Please select an alphabet or number.") {
//             // Remove spaces to combine words for proper pronunciation
//             var formattedValue = spokenValue.replace(/\s+/g, ''); // Remove spaces

//             var utterance = new SpeechSynthesisUtterance(formattedValue);

//             // Select a clear and suitable voice
//             var voices = speechSynthesis.getVoices();
//             for (var i = 0; i < voices.length; i++) {
//                 if (voices[i].lang === 'en-US' || voices[i].name.includes('Google US English')) {
//                     utterance.voice = voices[i];
//                     break;
//                 }
//             }

//             // Adjust the rate, pitch, and volume for clarity
//             utterance.rate = 0.9;
//             utterance.pitch = 1;
//             utterance.volume = 1;

//             // Speak the phonetic value
//             speechSynthesis.speak(utterance);
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Function to store and retrieve the preferred voice from localStorage
//     function getPreferredVoice(voices) {
//         var preferredVoiceName = localStorage.getItem('preferredVoiceName');
//         if (preferredVoiceName) {
//             return voices.find(voice => voice.name === preferredVoiceName) || null;
//         }
//         return null;
//     }

//     // Function to save the preferred voice to localStorage
//     function savePreferredVoice(voice) {
//         localStorage.setItem('preferredVoiceName', voice.name);
//     }

//     document.getElementById('pronounce').addEventListener('click', function() {
//         var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
//         var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
//         var spokenValue = "";
//         document.querySelector('.spokenvaleDiv').style.visibility = 'visible';
//         document.querySelector('.spokenvalue').style.visibility = 'visible';

//         // Determine spoken value based on selection
//         if (selectedAlphabet) {
//             spokenValue = getPhonetics2("alphabet", selectedAlphabet.toUpperCase());
//         } else if (selectedNumber) {
//             spokenValue = getPhonetics2("number", selectedNumber.toUpperCase());
//         } else {
//             spokenValue = "Please select an alphabet or number.";
//         }

//         // Display the spoken value
//         document.querySelector('.spokenvalue').textContent = spokenValue;

//         // Use the spoken value for speech synthesis
//         if (spokenValue && spokenValue !== "Please select an alphabet or number.") {
//             var utterance = new SpeechSynthesisUtterance(spokenValue);

//             // Ensure the voices are loaded before using them
//             speechSynthesis.onvoiceschanged = function() {
//                 var voices = speechSynthesis.getVoices();
//                 var selectedVoice = null;

//                 // Prioritize a male voice for consistent pronunciation
//                 voices.forEach(voice => {
//                     // Adjust logic to select male voices more reliably
//                     if (voice.name.includes('male') || voice.name.includes('Google US English')) {
//                         selectedVoice = voice;
//                         savePreferredVoice(selectedVoice);  // Save the preferred voice to localStorage
//                     }
//                 });

//                 // Fallback to any available voice if no male voice is found
//                 if (!selectedVoice) {
//                     selectedVoice = voices[0];  // Use the first voice available
//                 }

//                 // Set the selected voice
//                 utterance.voice = selectedVoice;

//                 // Adjust the rate, pitch, and volume
//                 utterance.rate = 1;  // Set to normal speed
//                 utterance.pitch = 1; // Set to normal pitch
//                 utterance.volume = 1; // Full volume

//                 // Speak the spoken value as a whole
//                 speechSynthesis.speak(utterance);
//             };

//             // Trigger the voice change in case voices are already loaded
//             if (speechSynthesis.getVoices().length) {
//                 speechSynthesis.onvoiceschanged();
//             }
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('pronounce').addEventListener('click', function() {
//         var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
//         var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
//         var spokenValue = "";

//         document.querySelector('.spokenvaleDiv').style.visibility = 'visible';
//         document.querySelector('.spokenvalue').style.visibility = 'visible';

//         // Determine spoken value based on selection
//         if (selectedAlphabet) {
//             spokenValue = getPhonetics2("alphabet", selectedAlphabet.toUpperCase()); // Ensure proper phonetic word
//         } else if (selectedNumber) {
//             spokenValue = getPhonetics2("number", selectedNumber.toUpperCase());
//         } else {
//             spokenValue = "Please select an alphabet or number."; // Default message if nothing is selected
//         }

//         // Display the spoken value (phonetic word)
//         document.querySelector('.spokenvalue').textContent = spokenValue;

//         // Use the spoken value for speech synthesis
//         if (spokenValue && spokenValue !== "Please select an alphabet or number.") {
//             var utterance = new SpeechSynthesisUtterance(spokenValue.replace(/ +/g, ' ').trim()); // Remove extra spaces

//             // Function to set the desired voice
//             function setVoice() {
//                 var voices = speechSynthesis.getVoices();
//                 var selectedVoice = null;

//                 // Select "Google US English" if available or other male en-US voice
//                 for (var i = 0; i < voices.length; i++) {
//                     if (voices[i].name === 'Google US English') {
//                         selectedVoice = voices[i];
//                         break;
//                     }
//                     // Fallback to male US English voice
//                     if (voices[i].lang === 'en-US' && voices[i].name.includes('Male')) {
//                         selectedVoice = voices[i];
//                     }
//                 }

//                 // Fallback to the first US English voice if no male voice is available
//                 if (!selectedVoice) {
//                     selectedVoice = voices.find(voice => voice.lang === 'en-US') || voices[0];
//                 }

//                 // Apply the selected voice
//                 utterance.voice = selectedVoice;

//                 // Set the speech rate, pitch, and volume for clarity
//                 utterance.rate = 0.9;
//                 utterance.pitch = 1;
//                 utterance.volume = 1;

//                 // Speak the phonetic word
//                 speechSynthesis.speak(utterance);
//             }

//             // Ensure voices are loaded before speaking
//             if (speechSynthesis.getVoices().length) {
//                 setVoice(); // If voices are already loaded
//             } else {
//                 speechSynthesis.onvoiceschanged = setVoice; // Wait until voices are available
//             }
//         }
//     });
// });












// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('pronounce').addEventListener('click', function() {
//         var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
//         var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
//         var spokenValue = "";
//         document.querySelector('.spokenvaleDiv').style.visibility = 'visible';
//         document.querySelector('.spokenvalue').style.visibility = 'visible';

//         // Determine spoken value based on selection
//         if (selectedAlphabet) {
//             spokenValue = getPhonetics2("alphabet", selectedAlphabet.toUpperCase()); // Ensure uppercase for mapping
//         } else if (selectedNumber) {
//             spokenValue = getPhonetics2("number", selectedNumber.toUpperCase());
//         } else {
//             spokenValue = "Please select an alphabet or number."; // Default message if nothing is selected
//         }

//         // Display the spoken value
//         document.querySelector('.spokenvalue').textContent = spokenValue;

//         // Use the spoken value for speech synthesis
//         if (spokenValue && spokenValue !== "Please select an alphabet or number.") {
//             // Format the value for pronunciation; preserve spaces for phonetic words
//             var formattedValue = spokenValue.replace(/\s+/g, ' ').trim(); // Remove extra spaces

//             var utterance = new SpeechSynthesisUtterance(formattedValue);

//             // Voice selection with mobile handling
//             function setVoice() {
//                 var voices = speechSynthesis.getVoices();
//                 // Ensure the voice selection works across devices
//                 var selectedVoice = null;

//                 // Search for Google US English or any en-US voice
//                 for (var i = 0; i < voices.length; i++) {
//                     if (voices[i].name === 'Google US English' || voices[i].lang === 'en-US') {
//                         selectedVoice = voices[i];
//                         break;
//                     }
//                 }

//                 // Fallback: If no US voice, use the first available voice
//                 if (!selectedVoice) {
//                     selectedVoice = voices[0];
//                 }

//                 utterance.voice = selectedVoice;

//                 // Set the speech rate, pitch, and volume for clarity
//                 utterance.rate = 0.9;
//                 utterance.pitch = 1;
//                 utterance.volume = 1;

//                 // Speak the phonetic value
//                 speechSynthesis.speak(utterance);
//             }

//             // Wait until voices are loaded (on mobile devices, voices may load later)
//             if (speechSynthesis.getVoices().length) {
//                 setVoice(); // Voices are already available
//             } else {
//                 speechSynthesis.onvoiceschanged = setVoice; // Wait for voices to be loaded
//             }
//         }
//     });
// });








// document.addEventListener('DOMContentLoaded', function() {
//     var pronounceButton = document.getElementById('pronounce');

//     // Add both click and touchstart for better responsiveness on mobile
//     pronounceButton.addEventListener('click', pronounceHandler);
//     pronounceButton.addEventListener('touchstart', pronounceHandler);

//     function pronounceHandler(event) {
//         event.preventDefault(); // Prevent any default behavior (useful for touch)

//         var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
//         var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
//         var spokenValue = "";

//         // Show the spoken value divs
//         document.querySelector('.spokenvaleDiv').style.visibility = 'visible';
//         document.querySelector('.spokenvalue').style.visibility = 'visible';

//         // Determine the spoken value based on the selection
//         if (selectedAlphabet) {
//             spokenValue = getPhonetics2("alphabet", selectedAlphabet.toUpperCase());
//         } else if (selectedNumber) {
//             spokenValue = getPhonetics2("number", selectedNumber.toUpperCase());
//         } else {
//             spokenValue = "Please select an alphabet or number.";
//         }

//         // Display the spoken value
//         document.querySelector('.spokenvalue').textContent = spokenValue;

//         // Use the spoken value for speech synthesis if valid
//         if (spokenValue && spokenValue !== "Please select an alphabet or number.") {
//             // Format the value for pronunciation
//             var formattedValue = spokenValue.replace(/\s+/g, ''); // Remove spaces

//             var utterance = new SpeechSynthesisUtterance(formattedValue);

//             // Ensure voices are loaded and refreshed
//             loadAndSpeak(utterance);
//         }
//     }

//     // Function to load voices and handle the speech synthesis
//     function loadAndSpeak(utterance) {
//         var voices = speechSynthesis.getVoices(); // Force refresh voice list

//         if (voices.length === 0) {
//             // Fallback: if voices are still not loaded, wait for the 'onvoiceschanged' event
//             speechSynthesis.onvoiceschanged = function() {
//                 voices = speechSynthesis.getVoices();
//                 assignVoiceAndSpeak(utterance, voices);
//             };
//         } else {
//             assignVoiceAndSpeak(utterance, voices); // If voices are loaded, proceed
//         }
//     }

//     // Function to assign the correct voice and speak
//     function assignVoiceAndSpeak(utterance, voices) {
//         // Preferred voice selection (Google US English as default)
//         var preferredVoice = voices.find(voice => voice.name.includes('Google US English')) ||
//                              voices.find(voice => voice.lang === 'en-US') || // Fallback to any en-US voice
//                              voices[0]; // If no en-US voice is available, choose the first available voice

//         // Assign the selected voice
//         utterance.voice = preferredVoice;

//         // Adjust the rate, pitch, and volume for consistency across devices
//         utterance.rate = 0.9; // Normal speaking rate
//         utterance.pitch = 1;  // Normal pitch
//         utterance.volume = 1; // Full volume

//         // Clear any previous speech and speak the current utterance
//         speechSynthesis.cancel(); // Stop any ongoing speech to prevent overlap
//         speechSynthesis.speak(utterance);

//         // Add an event listener to handle the end of speech
//         utterance.onend = function() {
//             console.log("Speech has finished.");
//         };
//     }
// });


//new//
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pronounce').addEventListener('click', function() {
        var selectedAlphabet = document.querySelector('.alphaSelect').textContent.trim();
        var selectedNumber = document.querySelector('.figurecodeSelect').textContent.trim();
        var spokenValue = "";

        document.querySelector('.spokenvaleDiv').style.visibility = 'visible';
        document.querySelector('.spokenvalue').style.visibility = 'visible';

        // Determine spoken value based on selection
        if (selectedAlphabet) {
            spokenValue = getPhonetics2("alphabet", selectedAlphabet.toUpperCase()); // Ensure uppercase for mapping
        } else if (selectedNumber) {
            spokenValue = getPhonetics2("number", selectedNumber.toUpperCase());
        } else {
            spokenValue = "Please select an alphabet or number."; // Default message if nothing is selected
        }

        // Display the spoken value
        document.querySelector('.spokenvalue').textContent = spokenValue;

        // Use the spoken value for speech synthesis
        if (spokenValue && spokenValue !== "Please select an alphabet or number.") {
            // On mobile, retain the spaces between words for better pronunciation
            var formattedValue = spokenValue;

            // Detect if the user is on a mobile device
            var isMobile = /Mobi|Android/i.test(navigator.userAgent);

            if (isMobile) {
                // Ensure spaces are kept on mobile for better word pronunciation
                formattedValue = spokenValue; // Do not remove spaces on mobile
            } else {
                // Remove spaces on desktop for smoother pronunciation
                formattedValue = spokenValue.replace(/\s+/g, ''); // Remove spaces only on desktop
            }

            var utterance = new SpeechSynthesisUtterance(formattedValue);

            // Select a clear and suitable voice
            var voices = speechSynthesis.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].lang === 'en-US' || voices[i].name.includes('Google US English')) {
                    utterance.voice = voices[i];
                    break;
                }
            }

            // Adjust the rate, pitch, and volume for clarity
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 1;

            // Speak the phonetic value
            speechSynthesis.speak(utterance);
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');
    

    if (backButton) {
        backButton.addEventListener('click', function() {
            // Hide the back button
            document.getElementById('backDiv').style.display = 'none';
            document.getElementById('mainDiv2').style.display='none';
            document.querySelector('.alpha1').style.display = 'none'; // Show alphabet
            document.querySelector('.alpha2').style.display = 'none'; // Show phonetics for alphabet
            document.querySelector('.num1').style.display = 'none'; // Hide figure code
            document.querySelector('.num2').style.display = 'none'; // Hide phonetics for figure code

            document.querySelector('.spokenvaleDiv').style.visibility = 'hidden';
            document.querySelector('.spokenvalue').style.visibility = 'hidden';
            const pronounceDiv =document.querySelector('.pronounceDiv');
            pronounceDiv.style.display='none';
            const audText =document.querySelector('.audText');
            audText.style.display ='none';

            // Check if the selected alphabet or figure code is visible
            const alphaSelect = document.querySelector('.alphaSelect');
            const figurecodeSelect = document.querySelector('.figurecodeSelect');

            if (alphaSelect && alphaSelect.textContent.trim() !== '') {
                // Hide alpha1 and alpha2
                // document.querySelector('.alpha1').style.display = 'none';
                // document.querySelector('.alpha2').style.display = 'none';

                // Show the alphabet table
                document.getElementById('alphabetTable').style.display = 'flex';
                document.getElementById('figureCodeTable').style.display = 'none';

                // Reset any content
                // document.querySelector('.alphaSelect').textContent = '';
                // document.querySelector('.phoneticsText').textContent = '';

            } else if (figurecodeSelect && figurecodeSelect.textContent.trim() !== '') {
                // Hide num1 and num2
                // document.querySelector('.num1').style.display = 'none';
                // document.querySelector('.num2').style.display = 'none';

                // Show the figure code table
                document.getElementById('alphabetTable').style.display = 'none';
                document.getElementById('figureCodeTable').style.display = 'flex';

                // Reset any content
                // document.querySelector('.figurecodeSelect').textContent = '';
                // document.querySelector('.phoneticsText2').textContent = '';
            }
        });
    }
});







  function validateInput() {
      const inputField = document.getElementById('alphabetInput');
      const errorText = document.getElementById('errorText');
      const hintButton = document.getElementById('hintButton');
      const morseOutput = document.getElementById('morseOutput');
      const outputImg = document.querySelector(".outputImg");
      const playButton = document.getElementById('playButton'); 

  }


function handleInputChange() {
  const input = document.getElementById('alphabetInput');
  const hintButton = document.getElementById('hintButton');
  const isAlphabetic = /^[a-zA-Z]$/.test(input.value);

  if (isAlphabetic) {
      hintButton.style.display = 'block';
  } else {
      hintButton.style.display = 'none';
  }
}
  
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("alphabetInput");
  const hintButton = document.getElementById("hintButton");

  document.querySelector(".out").textContent = "";

  validateInput();
});

function disableQBoxes() {
    const qBoxes = document.querySelectorAll('.Q-Box');
    qBoxes.forEach(box => {
        box.style.pointerEvents = 'none';  // Disable clicks
        box.style.cursor = 'not-allowed';  // Change cursor to indicate disabled state
        box.style.opacity = '1';         // Optional: make it look disabled
    });
    console.log("disabled");
    
}

// Function to enable Q-Box elements
function enableQBoxes() {
    const qBoxes = document.querySelectorAll('.Q-Box');
    qBoxes.forEach(box => {
        box.style.pointerEvents = 'auto';  // Enable clicks
        box.style.cursor = 'pointer';      // Restore cursor
        box.style.opacity = '1';           // Restore opacity
    });
    console.log("enabled");
}

let isFirstCharacter = true;
let isAnimationCompleted = true;
let fullMorse = '';
let clickCount = 0; 
let currentCharIndex = 0;

let isPlaying = false;
async function playMorseSequence() {
    if (isPlaying) return;

    const inputField = document.getElementById('searchInput');
    const userInput = inputField.value.toUpperCase();
    const playButton = document.getElementById("playButton");
    
    // Check if the input matches any element with class="out"
    const matchesOutClass = Array.from(document.getElementsByClassName('out'))
        .some(element => element.textContent.trim().toUpperCase() === userInput);
    
    if (!matchesOutClass) {
        // If no match is found, return and do not execute the rest of the function
        playButton.style.cursor='not-allowed';
        return;
    }


    isPlaying = true;
    playButton.style.cursor='pointer';

    // const inputField = document.getElementById('searchInput');
    inputField.disabled = true;

    const toggleBtn =document.getElementById('toggle');
    toggleBtn.disabled =true;

    const backBtn =document.getElementById("backButton");
    backBtn.disabled =true;

    // const userInput = inputField.value.toUpperCase();
    const morseOutput = document.querySelector('#morseOutput');
    morseOutput.textContent = '';
    disableQBoxes(); // Disable Q-Box elements

    

    let currentCharIndex = 0;

    const intervalDuration = 800;
    const context = new (window.AudioContext || window.webkitAudioContext)();
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

                        if (symbol === '.') {
                            setTimeout(() => {
                                oscillator.stop();
                                morseOutput.textContent += '.';
                            }, 100);
                        } else if (symbol === '-') {
                            setTimeout(() => {
                                oscillator.stop();
                                morseOutput.textContent += '-';
                            }, 300);
                        }

                        morseIndex++;
                        setTimeout(playSymbol, intervalDuration);
                    } else {
                        morseOutput.textContent += ' '; 
                        currentCharIndex++;
                        setTimeout(animateMorseCode, intervalDuration);
                    }
                }

                playSymbol();
            } else {
                morseOutput.textContent += 'Invalid character: ' + char;
                currentCharIndex++;
                await sleep(intervalDuration);
                setTimeout(animateMorseCode, intervalDuration);
            }
        } else {
            isPlaying = false;
            inputField.disabled = false;
            toggleBtn.disabled =false;
            backBtn.disabled =false;
            document.getElementById("playButton").disabled = false;
            enableQBoxes(); // Re-enable Q-Box elements
        }
    }

    document.getElementById("playButton").disabled = true;
    animateMorseCode();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




  function repeat(){
	
	console.log("clickedrepeat");
   
simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
  
 
document.getElementById("canvas1").style.visibility="visible";
document.getElementById("repeat").style.visibility="hidden";

const selectclear=document.getElementById('myselect');
selectclear.selectedIndex=0;
}
function repeat(){
	
	console.log("clickedrepeat");
   
    simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
    document.getElementById("canvas1").style.visibility="visible";
    document.getElementById("repeat").style.visibility="hidden";
  
    document.getElementById('morsedisplay').innerHTML = "";


    var morseImage = document.getElementById('morseImage');

   morseImage.style.visibility='hidden';

   var numericInput = document.getElementById("numberInput");
   var rangeInput = document.getElementById("slider");

   numericInput.value = 0;

   numberMorse();
 
   


}




function updateMorseOutput(alphabet, reset = false) {
    const char = alphabet.toUpperCase();
    const morseCodeMapping = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..'
    };

    const morseCode = morseCodeMapping[char];
    const morseOutput = document.getElementById('morseOutput');

    if (morseCode) {
        if (reset) {
            morseOutput.textContent = '';
        }
        morseOutput.style.visibility = "visible";
    } else {
        morseOutput.textContent = '';
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
  }
}


const charToMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '?': '..--..'
    };



    

   
	
	 
        function getMorseCodeForAlphabet(alphabet) {
            const morseCodes = {
            A: '.-',     // Morse code for A
            B: '-...',   // Morse code for B
            C: '-.-.',   // Morse code for C
            D: '-..',    // Morse code for D
            E: '.',      // Morse code for E
            F: '..-.',   // Morse code for F
            G: '--.',    // Morse code for G
            H: '....',   // Morse code for H
            I: '..',      // Morse code for I
            J: '.---',   // Morse code for J
            K: '-.-',    // Morse code for K
            L: '.-..',   // Morse code for L
            M: '--',     // Morse code for M
            N: '-.',     // Morse code for N
            O: '---',    // Morse code for O
            P: '.--.',   // Morse code for P
            Q: '--.-',   // Morse code for Q
            R: '.-.',    // Morse code for R
            S: '...',    // Morse code for S
            T: '-',      // Morse code for T
            U: '..-',    // Morse code for U
            V: '...-',   // Morse code for V
            W: '.--',    // Morse code for W
            X: '-..-',   // Morse code for X
            Y: '-.--',   // Morse code for Y
            Z: '--..'    // Morse code for Z
            };
            
            
            return morseCodes[alphabet] || '';
            }
		
         



            const tableContainer = document.querySelector('.table-container');




            const questionOptions = [
                { id: "q1", text: "QRA?", question: "What is the name (or call sign) of your station?" },
                { id: "q2", text: "QRG?", question: "Will you tell me my exact frequency (or that of...)?" },
                { id: "q3", text: "QRH?", question: "Does my frequency vary?" },
                { id: "q4", text: "QRI?", question: "How is the tone of my transmission?" },
                { id: "q5", text: "QRJ?", question: "How many voice contacts do you want to make?" },
                { id: "q6", text: "QRK?", question: "What is the readability of my signals?" },
                { id: "q7", text: "QRL?", question: "Are you busy? \nIs the frequency in use?" },
                { id: "q8", text: "QRM?", question: "Do you have interference?" },
                { id: "q9", text: "QRN?", question: "Are you troubled by static?" },
                { id: "q10", text: "QRO?", question: "Shall I increase power?" },
                { id: "q11", text: "QRP?", question: "Shall I decrease power?" },
                { id: "q12", text: "QRQ?", question: "Shall I send Master?" },
                { id: "q13", text: "QRS?", question: "Shall I send more slowly?" },
                { id: "q14", text: "QRT?", question: "Shall I cease or suspend operation? \n shutoff the radio ?" },
                { id: "q15", text: "QRU?", question: "Do you have you anything for me?" },
                { id: "q16", text: "QRV?", question: "Are you ready?" },
                { id: "q17", text: "QRW?", question: "Shall I advise...that you are calling him on...kHz?" },
                { id: "q18", text: "QRX?", question: "When will you call me back?" },
                { id: "q19", text: "QRZ?", question: "Who was calling me?" },
                { id: "q20", text: "QSA?", question: "What is the strength of my signals?" },
                { id: "q21", text: "QSB?", question: "Is my signal fading?" },
                { id: "q22", text: "QSD?", question: "Is my keying defective?" },
                { id: "q23", text: "QSG?", question: "Shall I send ... telegrams (messages) at a time?" },
                { id: "q24", text: "QSK?", question: "Can you hear me between your signals?" },
                { id: "q25", text: "QSL?", question: "Can you confirm reception?" },
                { id: "q26", text: "QSM?", question: "Shall I repeat the last telegram (message) which I sent you, or some previous telegram (message)?" },
                { id: "q27", text: "QSN?", question: "Did you hear me (or ... (call sign)) on .. kHz (or MHz)?" },
                { id: "q28", text: "QSO?", question: "Can you make contact with...(me)?" },
                { id: "q29", text: "QSP?", question: "Will you relay a message to ...?" },
                { id: "q30", text: "QSR?", question: "Do you want me to repeat my call?" },
                { id: "q31", text: "QSS?", question: "What working frequency will you use?" },
                { id: "q32", text: "QST?", question: "-" },
                { id: "q33", text: "QSU?", question: "Shall I send or reply on this frequency or on.....kHz with ...emission of class?" },
                { id: "q34", text: "QSW?", question: "Will you send on this frequency or on ...khz with...emission of class?" },
                { id: "q35", text: "QSX?", question: "Can you listen on...?" },
                { id: "q36", text: "QSY?", question: "Shall I start transmitting on another frequency?" },
                { id: "q37", text: "QSZ?", question: "Shall I send each word or group twice?" },
                { id: "q38", text: "QTA?", question: "Shall I cancel telegram (message) No. as if it had not been sent?" },
                { id: "q39", text: "QTC?", question: "Do you have a message for me?" },
                { id: "q40", text: "QTH?", question: "What is your location (latitude and longitude or by name of the location)?" },
                { id: "q41", text: "QTR?", question: "What is the exact time?" },
                { id: "q42", text: "QTU?", question: "At what times are you operating?" },
                { id: "q43", text: "QTX?", question: "Will you keep your station open for further communication with me until further notice (or until... hours)?" },
                { id: "q44", text: "QUA?", question: "Have you news of ... (call sign)?" },
                { id: "q45", text: "QUC?", question: "What is the number (or other indication) of the last message you received from me (or from ... (call sign))?" },
                { id: "q46", text: "QUD?", question: "Have you received the urgency signal sent by ... (call sign of mobile station)?" },
                { id: "q47", text: "QUE?", question: "Can you speak in ... (language), - with interpreter if necessary; if so, on what frequencies?" },
                { id: "q48", text: "QUF?", question: "Have you received the distress signal sent by ... (call sign of mobile station)?" }
            ];
            


            const answerOptions = [
                { id: "q1", text: "QRA", question: "The name (or call sign) of my station is ..." },
                { id: "q2", text: "QRG", question: "Your exact frequency (or that of...) is ... kHz (or MHz)." },
                { id: "q3", text: "QRH", question: "Your frequency varies." },
                { id: "q4", text: "QRI", question: "The tone of your transmission is....\n1.Good\n2.Variable\n3.Bad" },
                { id: "q5", text: "QRJ", question: "I want to make ... voice contacts." },
                { id: "q6", text: "QRK", question: "The readability of your signals is:\n1:Bad\n2:Fairly bad\n3:Reasonably good\n4:Good\n5:Excellent" },
                { id: "q7", text: "QRL", question: "I am busy.\nThe frequency is in use." },
                { id: "q8", text: "QRM", question: "I am interfered with.\n1:I am not at all interfered with\n2:Slightly\n3:Moderately\n4:Strongly\n5:Very strongly" },
                { id: "q9", text: "QRN", question: "I am bothered by atmospherics\n1:Not at all\n2:Slightly\n3:Moderately\n4:Strongly\n5:Very Strongly" },
                { id: "q10", text: "QRO", question: "Increase power." },
                { id: "q11", text: "QRP", question: "Decrease power." },
                { id: "q12", text: "QRQ", question: "Send faster (... wpm)" },
                { id: "q13", text: "QRS", question: "Send more slowly (... wpm)" },
                { id: "q14", text: "QRT", question: "I am suspending operation.\nShutting off the radio" },
                { id: "q15", text: "QRU", question: "I have nothing for you." },
                { id: "q16", text: "QRV", question: "I am ready." },
                { id: "q17", text: "QRW", question: "Please advise...that I am calling him on kHz." },
                { id: "q18", text: "QRX", question: "Please standby. I will call you again at ... (hours) on ... kHz (or MHz)" },
                { id: "q19", text: "QRZ", question: "You are being called by ... on ... kHz (or MHz)" },
                { id: "q20", text: "QSA", question: "The strength of your signals is:\n1:Bad\n2:Fairly bad\n3:Reasonable good\n4:Good\n5:Excellent" },
                { id: "q21", text: "QSB", question: "Your signal is fading." },
                { id: "q22", text: "QSD", question: "Your keying is defective." },
                { id: "q23", text: "QSG", question: "Send ... telegrams (messages) at a time." },
                { id: "q24", text: "QSK", question: "I can hear you between my signals." },
                { id: "q25", text: "QSL", question: "I confirm reception." },
                { id: "q26", text: "QSM", question: "Repeat the last telegram (message) which you sent me (or telegrams messages) numbers ...)." },
                { id: "q27", text: "QSN", question: "I did hear you (or ... (call sign)) on ..kHz (or MHz)." },
                { id: "q28", text: "QSO", question: "I can make contact with...(you)." },
                { id: "q29", text: "QSP", question: "I will relay a message to ... ." },
                { id: "q30", text: "QSR", question: "Please repeat your call; I did not hear you." },
                { id: "q31", text: "QSS", question: "I will use the working frequency ... kHz (or MHz)." },
                { id: "q32", text: "QST", question: "Here is a broadcast message to all amateurs." },
                { id: "q33", text: "QSU", question: "Send or reply on this frequency or on...kHz with...emission of class." },
                { id: "q34", text: "QSW", question: "I am going to send on this frequency or on...kHz with...emission of class." },
                { id: "q35", text: "QSX", question: "Listen on..." },
                { id: "q36", text: "QSY", question: "Start transmitting on...\nAlso:change frequency(to...)." },
                { id: "q37", text: "QSZ", question: "Send each word or group twice." },
                { id: "q38", text: "QTA", question: "Cancel telegram (message) No. as if it had not been sent." },
                { id: "q39", text: "QTC", question: "I have a message for you." },
                { id: "q40", text: "QTH", question: "My location is...latitude and longitude\nor:my location is..." },
                { id: "q41", text: "QTR", question: "The exact time is..." },
                { id: "q42", text: "QTU", question: "I am operating from ... to ... hours." },
                { id: "q43", text: "QTX", question: "I will keep my station open for further communication with you until further notice (or until ... hours)." },
                { id: "q44", text: "QUA", question: "Here is news of ... (call sign)." },
                { id: "q45", text: "QUC", question: "The number (or other indication) of the last message I received from you (or from ... (call sign)) is ..." },
                { id: "q46", text: "QUD", question: "I have received the urgency signal sent by ... (call sign of mobile station) at ... hours." },
                { id: "q47", text: "QUE", question: "I can speak in ... (language) on ... kHz (or MHz)." },
                { id: "q48", text: "QUF", question: "I have received the distress signal sent by ... (call sign of mobile station) at ... hours." }
            ];
            
            
            

            
            
            


 
            


            function filterQcodes() {
                const input = document.getElementById('searchInput').value.toUpperCase().trim();
                const qBoxes = document.querySelectorAll('.Q-Box');
                const errorMessage = document.getElementById('errorMessage');
                const menuContainer=document.querySelector('.menu-container');
                const questOutput = document.getElementById("questOutput");
                const answerOutput = document.getElementById("answerOutput");
                const meanText = document.getElementById("meaningText");
                let hasMatch = false;
        
                qBoxes.forEach(box => {
                    if (box.textContent.toUpperCase().includes(input)) {
                        box.style.display = 'block';
                        hasMatch = true;
                    } else {
                        box.style.display = 'none';
                    }
                });
        
                if (hasMatch) {
                    errorMessage.style.display = 'none';
                    menuContainer.style.display ='flex';
                    // meanText.style.display="block";
                    // questOutput.style.display ="block";
                    
                } else {
                    errorMessage.style.display = 'block';
                    menuContainer.style.display ='none';
                    questOutput.style.display ="none";
                    answerOutput.style.display="none";
                    meanText.style.display="none";
                }
            }

                // Function to handle Q-Box clicks
                // function setupQBoxClicks() {
                //     const qBoxes = document.querySelectorAll('.Q-Box');
                //     const searchInput = document.getElementById('searchInput');
                //     const outputSpan = document.querySelector('.out');
                //     const morseOutput = document.getElementById('morseOutput');
                //     const backButton = document.getElementById("backButton");
                //     const menuContainer = document.querySelector(".menu-container");
                //     const morsePlay = document.querySelector(".morsePlay");
                //     const audText = document.querySelector(".text3");
                //     const questOutput = document.getElementById("questOutput");
                //     const answerOutput = document.getElementById("answerOutput");
                //     const meanText = document.getElementById("meaningText");
                
                //     const questionOptions = [
                //         { id: "q1", text: "QRA?", question: "What is the name (or call sign) of your station?" },
                //         { id: "q2", text: "QRG?", question: "Will you tell me my exact frequency (or that of...)?" },
                //         { id: "q3", text: "QRH?", question: "Does my frequency vary?" },
                //         { id: "q4", text: "QRI?", question: "How is the tone of my transmission?" },
                //         { id: "q5", text: "QRJ?", question: "How many voice contacts do you want to make?" },
                //         { id: "q6", text: "QRK?", question: "What is the readability of my signals?" },
                //         { id: "q7", text: "QRL?", question: "Are you busy? \nIs the frequency in use?" },
                //         { id: "q8", text: "QRM?", question: "Do you have interference?" },
                //         { id: "q9", text: "QRN?", question: "Are you troubled by static?" },
                //         { id: "q10", text: "QRO?", question: "Shall I increase power?" },
                //         { id: "q11", text: "QRP?", question: "Shall I decrease power?" },
                //         { id: "q12", text: "QRQ?", question: "Shall I send Master?" },
                //         { id: "q13", text: "QRS?", question: "Shall I send more slowly?" },
                //         { id: "q14", text: "QRT?", question: "Shall I cease or suspend operation? \n shutoff the radio ?" },
                //         { id: "q15", text: "QRU?", question: "Do you have you anything for me?" },
                //         { id: "q16", text: "QRV?", question: "Are you ready?" },
                //         { id: "q17", text: "QRW?", question: "Shall I advise...that you are calling him on...kHz?" },
                //         { id: "q18", text: "QRX?", question: "When will you call me back?" },
                //         { id: "q19", text: "QRZ?", question: "Who was calling me?" },
                //         { id: "q20", text: "QSA?", question: "What is the strength of my signals?" },
                //         { id: "q21", text: "QSB?", question: "Is my signal fading?" },
                //         { id: "q22", text: "QSD?", question: "Is my keying defective?" },
                //         { id: "q23", text: "QSG?", question: "Shall I send ... telegrams (messages) at a time?" },
                //         { id: "q24", text: "QSK?", question: "Can you hear me between your signals?" },
                //         { id: "q25", text: "QSL?", question: "Can you confirm reception?" },
                //         { id: "q26", text: "QSM?", question: "Shall I repeat the last telegram (message) which I sent you, or some previous telegram (message)?" },
                //         { id: "q27", text: "QSN?", question: "Did you hear me (or ... (call sign)) on .. kHz (or MHz)?" },
                //         { id: "q28", text: "QSO?", question: "Can you make contact with...(me)?" },
                //         { id: "q29", text: "QSP?", question: "Will you relay a message to ...?" },
                //         { id: "q30", text: "QSR?", question: "Do you want me to repeat my call?" },
                //         { id: "q31", text: "QSS?", question: "What working frequency will you use?" },
                //         { id: "q32", text: "QST?", question: "Should I repeat the prior message to all amateurs I contact?" },
                //         { id: "q33", text: "QSU?", question: "Shall I send or reply on this frequency or on.....kHz with ...emission of class?" },
                //         { id: "q34", text: "QSW?", question: "Will you send on this frequency or on ...khz with...emission of class?" },
                //         { id: "q35", text: "QSX?", question: "Can you listen on...?" },
                //         { id: "q36", text: "QSY?", question: "Shall I start transmitting on another frequency?" },
                //         { id: "q37", text: "QSZ?", question: "Shall I send each word or group twice?" },
                //         { id: "q38", text: "QTA?", question: "Shall I cancel telegram (message) No. as if it had not been sent?" },
                //         { id: "q39", text: "QTC?", question: "Do you have a message for me?" },
                //         { id: "q40", text: "QTH?", question: "What is your location (latitude and longitude or by name of the location)?" },
                //         { id: "q41", text: "QTR?", question: "What is the exact time?" },
                //         { id: "q42", text: "QTU?", question: "At what times are you operating?" },
                //         { id: "q43", text: "QTX?", question: "Will you keep your station open for further communication with me until further notice (or until... hours)?" },
                //         { id: "q44", text: "QUA?", question: "Have you news of ... (call sign)?" },
                //         { id: "q45", text: "QUC?", question: "What is the number (or other indication) of the last message you received from me (or from ... (call sign))?" },
                //         { id: "q46", text: "QUD?", question: "Have you received the urgency signal sent by ... (call sign of mobile station)?" },
                //         { id: "q47", text: "QUE?", question: "Can you speak in ... (language), - with interpreter if necessary; if so, on what frequencies?" },
                //         { id: "q48", text: "QUF?", question: "Have you received the distress signal sent by ... (call sign of mobile station)?" }
                //     ];
                
                //     const answerOptions = [
                //         { id: "q1", text: "QRA", question: "The name (or call sign) of my station is ..." },
                //         { id: "q2", text: "QRG", question: "Your exact frequency (or that of...) is ... kHz (or MHz)." },
                //         { id: "q3", text: "QRH", question: "Your frequency varies." },
                //         { id: "q4", text: "QRI", question: "The tone of your transmission is....\n1.Good\n2.Variable\n3.Bad" },
                //         { id: "q5", text: "QRJ", question: "I want to make ... voice contacts." },
                //         { id: "q6", text: "QRK", question: "The readability of your signals is:\n1:Bad\n2:Fairly bad\n3:Reasonably good\n4:Good\n5:Excellent" },
                //         { id: "q7", text: "QRL", question: "I am busy.\nThe frequency is in use." },
                //         { id: "q8", text: "QRM", question: "I am interfered with.\n1:I am not at all interfered with\n2:Slightly\n3:Moderately\n4:Strongly\n5:Very strongly" },
                //         { id: "q9", text: "QRN", question: "I am bothered by atmospherics\n1:Not at all\n2:Slightly\n3:Moderately\n4:Strongly\n5:Very Strongly" },
                //         { id: "q10", text: "QRO", question: "Increase power." },
                //         { id: "q11", text: "QRP", question: "Decrease power." },
                //         { id: "q12", text: "QRQ", question: "Send faster (... wpm)" },
                //         { id: "q13", text: "QRS", question: "Send more slowly (... wpm)" },
                //         { id: "q14", text: "QRT", question: "I am suspending operation.\nShutting off the radio" },
                //         { id: "q15", text: "QRU", question: "I have nothing for you." },
                //         { id: "q16", text: "QRV", question: "I am ready." },
                //         { id: "q17", text: "QRW", question: "Please advise...that I am calling him on kHz." },
                //         { id: "q18", text: "QRX", question: "Please standby. I will call you again at ... (hours) on ... kHz (or MHz)" },
                //         { id: "q19", text: "QRZ", question: "You are being called by ... on ... kHz (or MHz)" },
                //         { id: "q20", text: "QSA", question: "The strength of your signals is:\n1:Bad\n2:Fairly bad\n3:Reasonable good\n4:Good\n5:Excellent" },
                //         { id: "q21", text: "QSB", question: "Your signal is fading." },
                //         { id: "q22", text: "QSD", question: "Your keying is defective." },
                //         { id: "q23", text: "QSG", question: "Send ... telegrams (messages) at a time." },
                //         { id: "q24", text: "QSK", question: "I can hear you between my signals." },
                //         { id: "q25", text: "QSL", question: "I confirm reception." },
                //         { id: "q26", text: "QSM", question: "Repeat the last telegram (message) which you sent me (or telegrams messages) numbers ...)." },
                //         { id: "q27", text: "QSN", question: "I did hear you (or ... (call sign)) on ..kHz (or MHz)." },
                //         { id: "q28", text: "QSO", question: "I can make contact with...(you)." },
                //         { id: "q29", text: "QSP", question: "I will relay a message to ... ." },
                //         { id: "q30", text: "QSR", question: "Please repeat your call; I did not hear you." },
                //         { id: "q31", text: "QSS", question: "I will use the working frequency ... kHz (or MHz)." },
                //         { id: "q32", text: "QST", question: "Here is a broadcast message to all amateurs." },
                //         { id: "q33", text: "QSU", question: "Send or reply on this frequency or on...kHz with...emission of class." },
                //         { id: "q34", text: "QSW", question: "I am going to send on this frequency or on...kHz with...emission of class." },
                //         { id: "q35", text: "QSX", question: "Listen on..." },
                //         { id: "q36", text: "QSY", question: "Start transmitting on...\nAlso:change frequency(to...)." },
                //         { id: "q37", text: "QSZ", question: "Send each word or group twice." },
                //         { id: "q38", text: "QTA", question: "Cancel telegram (message) No. as if it had not been sent." },
                //         { id: "q39", text: "QTC", question: "I have a message for you." },
                //         { id: "q40", text: "QTH", question: "My location is...latitude and longitude\nor:my location is..." },
                //         { id: "q41", text: "QTR", question: "The exact time is..." },
                //         { id: "q42", text: "QTU", question: "I am operating from ... to ... hours." },
                //         { id: "q43", text: "QTX", question: "I will keep my station open for further communication with you until further notice (or until ... hours)." },
                //         { id: "q44", text: "QUA", question: "Here is news of ... (call sign)." },
                //         { id: "q45", text: "QUC", question: "The number (or other indication) of the last message I received from you (or from ... (call sign)) is ..." },
                //         { id: "q46", text: "QUD", question: "I have received the urgency signal sent by ... (call sign of mobile station) at ... hours." },
                //         { id: "q47", text: "QUE", question: "I can speak in ... (language) on ... kHz (or MHz)." },
                //         { id: "q48", text: "QUF", question: "I have received the distress signal sent by ... (call sign of mobile station) at ... hours." }
                //         // ... other answer options ...
                //     ];
                
                //     let previousValue = '';
                
                //     qBoxes.forEach(box => {
                //         box.addEventListener('click', () => {
                //             const text = box.textContent;
                //             searchInput.value = text;
                //             menuContainer.style.display = "none";
                //             morsePlay.style.display = "grid";
                //             backButton.style.display = "block";
                //             audText.style.display = "block";
                //             meanText.style.display = "block";
                            
                            
                //             console.log("Q-box is clicked");
                //             outputSpan.textContent = text;
                
                //             let isQuestion = text.endsWith("?");
                
                //             if (isQuestion) {
                //                 const questionOption = questionOptions.find(option => option.text === text);
                //                 if (questionOption) {
                //                     questOutput.textContent = questionOption.question;
                //                     answerOutput.textContent = "";
                //                     questOutput.style.display ="block";
                //                 }
                //             } else {
                //                 const answerOption = answerOptions.find(option => option.text === text);
                //                 if (answerOption) {
                //                     answerOutput.textContent = answerOption.question;
                //                     questOutput.textContent = "";
                //                     answerOutput.style.display="block";
                //                 }
                //             }
                
                //             if (text !== previousValue) {
                //                 morseOutput.textContent = '';
                //                 previousValue = text;
                //             }
                //         });
                //     });
                
                //     searchInput.addEventListener('input', () => {
                //         if (searchInput.value.trim() === '') {
                //             outputSpan.textContent = '';
                //             morseOutput.textContent = '';
                //         } else if (searchInput.value !== previousValue) {
                //             morseOutput.textContent = '';
                //             previousValue = searchInput.value;
                //         }
                //     });
                
                //     backButton.addEventListener("click", () => {
                //         backButton.style.display = "none";
                //         morseOutput.innerHTML = ""; // Clear the morseOutput content
                //         menuContainer.style.display = errorMessage.style.display === "block" ? "none" : "flex";
                //         morsePlay.style.display = "none";
                //         audText.style.display = "none";
                //         questOutput.style.display ="none";
                //         answerOutput.style.display="none";
                //         meanText.style.display = "none";
                //     });
                // }
                
                

    // Initialize click handlers after DOM content is loaded
    // document.addEventListener('DOMContentLoaded', setupQBoxClicks);

    



















