let simsubscreennum = 0;
let temp = 0;

function navNext() {
  for (temp = 0; temp < 2; temp++) {
    const canvasElement = document.getElementById("canvas" + temp);
    if (canvasElement) {
      canvasElement.style.visibility = "hidden";
    }
  }
  simsubscreennum += 1;
  const nextCanvasElement = document.getElementById("canvas" + simsubscreennum);
  if (nextCanvasElement) {
    nextCanvasElement.style.visibility = "visible";
  }
  document.getElementById("nextButton").style.visibility = "hidden";
}

let simsubscreennum1 = 0;
let temp1 = 0;
function navNext1() {
  for (temp1 = 0; temp1 < 2; temp1++) {
    document.getElementById("canvas2" + temp1).style.visibility = "hidden";
  }
  simsubscreennum1 += 1;
  document.getElementById("canvas2" + simsubscreennum1).style.visibility =
    "visible";
  document.getElementById("nextButton1").style.visibility = "hidden";

  // magic();
}

document.addEventListener("DOMContentLoaded", function () {
  // ... [existing code] ...
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentine Republic",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan Republic",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Democratic Republic of Timor-Leste",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabonese Republic",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "International Civil Aviation Organization",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kingdom of Eswatini",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyz Republic",
    "Lao Peoples Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Authority",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwandese Republic",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe (Democratic Republic of)",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovak Republic",
    "Slovenia",
    "Solomon Islands",
    "Somali Democratic Republic",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togolese Republic",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Nations",
    "United Kingdom of Great Britain and Northan Ireland",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City State",
    "Venezuela",
    "Vietnam",
    "World Meteorological Organization",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const input = document.getElementById("countryDropdown");
  const dropdown = document.getElementById("countryList");

  function displayDropdown() {
    // ... [existing code] ...
    const searchQuery = input.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().startsWith(searchQuery)
    );

    dropdown.innerHTML = "";
    if (searchQuery === "") {
      // Show all countries when there's no input
      filteredCountries.push(...countries);
    }

    filteredCountries.forEach((country) => {
      const countryLink = document.createElement("a");
      countryLink.href = "#";
      countryLink.textContent = country;
      dropdown.appendChild(countryLink);

      countryLink.addEventListener("click", function (event) {
        input.value = country;
        dropdown.style.display = "none";
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

  input.addEventListener("input", displayDropdown);
  input.addEventListener("click", showDropdownOnClick);

  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is not the input or the dropdown
    if (
      !event.target.matches("#countryDropdown") &&
      !event.target.matches("#countryList")
    ) {
      hideDropdown();
    }
  });

  // ... [existing code] ...
  document
    .getElementById("convertButton")
    .addEventListener("click", function () {
      console.log("Submit button is clicked");
      const selectedCountryInput = input.value.trim().toLowerCase();
      const errorMessageElement = document.getElementById("errorMessage");

      if (selectedCountryInput === "") {
        errorMessageElement.textContent = "Please select a country.";
        errorMessageElement.style.marginLeft = "34px";
        return;
      }

      // Check if the entered country is valid in a case-insensitive manner
      const matchingCountry = countries.find(
        (country) => country.toLowerCase() === selectedCountryInput
      );

      if (!matchingCountry) {
        errorMessageElement.textContent =
          "Invalid country name. Please select from the list.";
        errorMessageElement.style.marginLeft = "-70px";
        return;
      }

      errorMessageElement.textContent = ""; // Clear error message

      // Now, you need to call the function to convert and display call signs for the selected country
      convertToCallSign(matchingCountry);
      document.getElementById("canvas2").style.visibility = "visible";

      // Redirect to the next page (replace 'next-page.html' with the actual URL of your next page)
    });
});

// page3
function convertToCallSign(countryCode) {
  // ... your existing code for converting and displaying call signs ...
  // Define call sign mappings for country codes
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
    France:
      "FAA-FZZ, HWA-HYZ, THA-THZ, TKA-TKZ, TMA-TMZ,\n" +
      "<span style='position: relative; left: 120px; bottom:195px'>TOA-TQZ, TVA-TXZ</span>",
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
    "Lao Peoples Democratic Republic": "XWA-XWZ",
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
    "Papua New Guinea": "PAA-PIZ, ZPA-ZPZ",
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
    "Togolese Republic":"5VA-5VZ",
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
    "United Kingdom of Great Britain and Northan Ireland":
      "GAA-GZZ, MAA-MZZ, VPA-VQZ, VSA-VSZ, ZBA-ZJZ,\n" +
      "<span style='position: relative; left: 120px; bottom:195px'>ZNA-ZOZ, ZQA-ZQZ,2AA-2ZZ</span>",
    "United States of America": "AAA-ALZ, KAA-KZZ, NAA-NZZ, WAA-WZZ, CAA-CXZ",
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

  // Get the corresponding call sign
  var callSign = callSigns[countryCode];
  if (callSign) {
    // Split the call sign into an array
    var codes = callSign.split(",").map((code) => code.trim());

    // Display each code on a new line
    document.getElementById("morse-code-value").innerHTML = codes.join(
      " " + "<br><br>"
    );

    // Display the country name
    var countryName = getCountryName(countryCode);

    // Break the country name if its length exceeds 20 characters
    if (countryName.length > 37) {
      var breakIndex = Math.min(countryName.lastIndexOf(" ", 32), 33);
      var firstLine = countryName.substring(0, breakIndex);
      var secondLine = countryName.substring(breakIndex).trim();
      countryName = firstLine + "<br>" + secondLine;
    }

    // Display the country name
    document.getElementById("country-name-display").innerHTML = countryName;
    console.log("Selected country is " + getCountryName(countryCode));

    const morseCodeText =
      document.getElementById("morse-code-value").textContent;

    // Log the morse code text to the console
    console.log(
      "call sign of " + getCountryName(countryCode) + " is/are " + morseCodeText
    );

    // After displaying call signs, show page3
    document.getElementById("canvas2").style.display = "block";
    // Optionally, you can hide other pages if needed
    document.getElementById("canvas0").style.display = "none";
    document.getElementById("canvas1").style.display = "none";
  } else {
    // Handle the case where callSign is undefined (countryCode not found)
    // console.error("Call sign not found for countryCode");
  }
}

function getCountryName(countryCode) {
  // ... your existing code for getting country name ...
  // Define country names for country codes
  var countryNames = {
    Afghanistan: "Afghanistan",
    Albania: "Albania",
    Algeria: "Algeria",
    Andorra: "Andorra",
    Angola: "Angola",
    "Antigua and Barbuda": "Antigua and Barbuda",
    "Argentine Republic": "Argentine Republic",
    Armenia: "Armenia",
    Australia: "Australia",
    Austria: "Austria",
    "Azerbaijan Republic":"Azerbaijan Republic",
    Bahamas: "Bahamas",
    Bahrain: "Bahrain",
    Bangladesh: "Bangladesh",
    Barbados: "Barbados",
    Belarus: "Belarus",
    Belgium: "Belgium",
    Belize: "Belize",
    Benin: "Benin",
    Bhutan: "Bhutan",
    Bolivia: "Bolivia",
    "Bosnia and Herzegovina": "Bosnia and Herzegovina",
    Botswana: "Botswana",
    Brazil: "Brazil",
    "Brunei Darussalam": "Brunei Darussalam",
    Bulgaria: "Bulgaria",
    "Burkina Faso": "Burkina Faso",
    Burundi: "Burundi",
    Cambodia: "Cambodia",
    Cameroon: "Cameroon",
    Canada: "Canada",
    "Cape Verde": "Cape Verde",
    "Central African Republic": "Central African Republic",
    Chad: "Chad",
    Chile: "Chile",
    China: "China",
    Colombia: "Colombia",
    Comoros: "Comoros",
    Congo: "Congo",
    "Costa Rica": "Costa Rica",
    "Côte d'Ivoire": "Côte d'Ivoire",
    Croatia: "Croatia",
    Cuba: "Cuba",
    Cyprus: "Cyprus",
    "Czech Republic": "Czech Republic",
    "Democratic People's Republic of Korea":
      "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo": "Democratic Republic of the Congo",
    "Democratic Republic of Timor-Leste": "Democratic Republic of Timor-Leste",
    Denmark: "Denmark",
    Djibouti: "Djibouti",
    Dominica: "Dominica",
    "Dominican Republic": "Dominican Republic",
    Ecuador: "Ecuador",
    Egypt: "Egypt",
    "El Salvador": "El Salvador",
    "Equatorial Guinea": "Equatorial Guinea",
    Eritrea: "Eritrea",
    Estonia: "Estonia",
    Ethiopia: "Ethiopia",
    Fiji: "Fiji",
    Finland: "Finland",
    France: "France",
    "Gabonese Republic": "Gabonese Republic",
    Gambia: "Gambia",
    Georgia: "Georgia",
    Germany: "Germany",
    Ghana: "Ghana",
    Greece: "Greece",
    Grenada: "Grenada",
    Guatemala: "Guatemala",
    Guinea: "Guinea",
    "Guinea-Bissau": "Guinea-Bissau",
    Guyana: "Guyana",
    Haiti: "Haiti",
    Honduras: "Honduras",
    Hungary: "Hungary",
    Iceland: "Iceland",
    India: "India",
    Indonesia: "Indonesia",
    "International Civil Aviation Organization":"International Civil Aviation Organization",
    Iran: "Iran",
    Iraq: "Iraq",
    Ireland: "Ireland",
    Israel: "Israel",
    Italy: "Italy",
    Jamaica: "Jamaica",
    Japan: "Japan",
    Jordan: "Jordan",
    Kazakhstan: "Kazakhstan",
    Kenya: "Kenya",
    "Kingdom of Eswatini": "Kingdom of Eswatini",
    Kiribati: "Kiribati",
    Korea: "Korea",
    Kosovo: "Kosovo",
    Kuwait: "Kuwait",
    "Kyrgyz Republic": "Kyrgyz Republic",
    "Lao Peoples Democratic Republic": "Lao Peoples Democratic Republic",
    Latvia: "Latvia",
    Lebanon: "Lebanon",
    Lesotho: "Lesotho",
    Liberia: "Liberia",
    Libya: "Libya",
    Lithuania: "Lithuania",
    Luxembourg: "Luxembourg",
    Madagascar: "Madagascar",
    Malawi: "Malawi",
    Malaysia: "Malaysia",
    Maldives: "Maldives",
    Mali: "Mali",
    Malta: "Malta",
    "Marshall Islands": "Marshall Islands",
    Mauritania: "Mauritania",
    Mauritius: "Mauritius",
    Mexico: "Mexico",
    Micronesia: "Micronesia",
    Moldova: "Moldova",
    Monaco: "Monaco",
    Mongolia: "Mongolia",
    Montenegro: "Montenegro",
    Morocco: "Morocco",
    Mozambique: "Mozambique",
    Myanmar: "Myanmar",
    Namibia: "Namibia",
    Nauru: "Nauru",
    Nepal: "Nepal",
    Netherlands: "Netherlands",
    "New Zealand": "New Zealand",
    Nicaragua: "Nicaragua",
    Niger: "Niger",
    Nigeria: "Nigeria",
    "North Macedonia": "North Macedonia",
    Norway: "Norway",
    Oman: "Oman",
    Pakistan: "Pakistan",
    Palau: "Palau",
    "Palestinian Authority": "Palestinian Authority",
    Panama: "Panama",
    "Papua New Guinea": "Papua New Guinea",
    Paraguay: "Paraguay",
    Peru: "Peru",
    Philippines: "Philippines",
    Poland: "Poland",
    Portugal: "Portugal",
    Qatar: "Qatar",
    Romania: "Romania",
    "Russian Federation": "Russian Federation",
    "Rwandese Republic": "Rwandese Republic",
    "Saint Kitts and Nevis": "Saint Kitts and Nevis",
    "Saint Lucia": "Saint Lucia",
    "Saint Vincent and the Grenadines": "Saint Vincent and the Grenadines",
    Samoa: "Samoa",
    "San Marino": "San Marino",
    "Sao Tome and Principe (Democratic Republic of)":
      "Sao Tome and Principe (Democratic Republic of)",
    "Saudi Arabia": "Saudi Arabia",
    Senegal: "Senegal",
    Serbia: "Serbia",
    Seychelles: "Seychelles",
    "Sierra Leone": "Sierra Leone",
    Singapore: "Singapore",
    "Slovak Republic": "Slovak Republic",
    Slovenia: "Slovenia",
    "Solomon Islands": "Solomon Islands",
    "Somali Democratic Republic": "Somali Democratic Republic",
    "South Africa": "South Africa",
    "South Sudan": "South Sudan",
    Spain: "Spain",
    "Sri Lanka": "Sri Lanka",
    Sudan: "Sudan",
    Suriname: "Suriname",
    Sweden: "Sweden",
    Switzerland: "Switzerland",
    "Syrian Arab Republic": "Syrian Arab Republic",
    Tajikistan: "Tajikistan",
    Tanzania: "Tanzania",
    Thailand: "Thailand",
    "Togolese Republic": "Togolese Republic",
    Tonga: "Tonga",
    "Trinidad and Tobago": "Trinidad and Tobago",
    Tunisia: "Tunisia",
    Turkey: "Turkey",
    Turkmenistan: "Turkmenistan",
    Tuvalu: "Tuvalu",
    Uganda: "Uganda",
    Ukraine: "Ukraine",
    "United Arab Emirates": "United Arab Emirates",
    "United Nations": "United Nations",
    "United Kingdom of Great Britain and Northan Ireland":
      "United Kingdom of Great Britain and Northan Ireland",
    "United States of America": "United States of America",
    Uruguay: "Uruguay",
    Uzbekistan: "Uzbekistan",
    Vanuatu: "Vanuatu",
    "Vatican City State": "Vatican City State",
    Venezuela: "Venezuela",
    Vietnam: "Vietnam",
    "World Meteorological Organization": "World Meteorological Organization",
    Yemen: "Yemen",
    Zambia: "Zambia",
    Zimbabwe: "Zimbabwe",
  };
  // Return the country name for the given code
  return countryNames[countryCode];
}

window.onload = function () {
  // Get the country query parameter from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var selectedCountry = urlParams.get("country");

  // Get the element to display the call sign
  var callSignElement = document.getElementById("yourCallSignElementId");

  // Convert the selected country code to call sign
  var callSign = convertToCallSign(selectedCountry);

  // Display the call sign
  if (callSignElement) {
    callSignElement.textContent = callSign;
  } else {
    // console.error("Element with ID 'yourCallSignElementId' not found.");
  }
};

// Extra content

// Store the selected values globally
var storedSignalType = "";
var storedMorseCodeValue = "";
var storedVoiceSignalValue = "";

function showNextPage() {
  // Hide page1 and display page2
  var page1 = document.getElementById("canvas0");
  var page2 = document.getElementById("canvas1");

  if (page1 && page2) {
    page1.style.display = "none";
    page2.style.display = "block";
  } else {
    console.error("Error: One or both pages not found.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("repeat").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Hide page3
    document.getElementById("canvas2").style.display = "none";

    // Optionally, you can hide other pages if needed
    document.getElementById("canvas0").style.display = "none";

    // Display page2
    var page2 = document.getElementById("canvas1");
    page2.style.display = "block";

    // Reset the state of page2 (unselect the country)
    var countryDropdown = page2.querySelector("#countryDropdown");
    countryDropdown.value = ""; // This assumes the default option has an empty value
  });
});
