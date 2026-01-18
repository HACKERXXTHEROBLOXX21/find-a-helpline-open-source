const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
  "Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina",
  "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia",
  "Comoros","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark",
  "Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia",
  "Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Guatemala","Guinea","Haiti","Honduras","Hungary","Iceland","India","Indonesia",
  "Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
  "Kenya","Kuwait","Laos","Latvia","Lebanon","Liberia","Libya","Lithuania",
  "Luxembourg","Madagascar","Malaysia","Maldives","Mali","Malta","Mauritania",
  "Mauritius","Mexico","Moldova","Mongolia","Montenegro","Morocco","Myanmar",
  "Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria",
  "North Korea","North Macedonia","Norway","Oman","Pakistan","Panama","Paraguay",
  "Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
  "Saudi Arabia","Senegal","Serbia","Singapore","Slovakia","Slovenia","Somalia",
  "South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tunisia","Turkey","Uganda",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay",
  "Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const select = document.getElementById("countrySelect");
const button = document.getElementById("findHelpBtn");

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  select.appendChild(option);
});

select.addEventListener("change", () => {
  button.disabled = select.value === "";
});

button.addEventListener("click", () => {
  const country = encodeURIComponent(select.value);
  const url = `https://findahelpline.com/?country=${country}`;
  window.open(url, "_blank");
});
