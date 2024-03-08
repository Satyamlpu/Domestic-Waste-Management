document.getElementById('carbonCalculator').addEventListener('submit', function(event) {
  event.preventDefault();
  var plasticWaste = parseFloat(document.getElementById('plasticWaste').value);
  var organicWaste = parseFloat(document.getElementById('organicWaste').value);
  var electronicWaste = parseFloat(document.getElementById('electronicWaste').value);
  var carbonFootprint = calculateCarbonFootprint(plasticWaste, organicWaste, electronicWaste);
  document.getElementById('result').innerText = 'Your estimated carbon footprint from waste is ' + carbonFootprint + ' kg CO2e/year.';
});

function calculateCarbonFootprint(plasticWaste, organicWaste, electronicWaste) {
  // These are rough estimates and may not be accurate for all types of waste.
  var plasticFootprint = plasticWaste * 52 * 6; // 6 kg CO2e/kg
  var organicFootprint = organicWaste * 52 * 1; // 1 kg CO2e/kg
  var electronicFootprint = electronicWaste * 50; // 50 kg CO2e/kg
  return plasticFootprint + organicFootprint + electronicFootprint;
}
