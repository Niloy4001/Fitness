const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightValue = document.getElementById("height").value.split(".");
  const heightFootValue = parseFloat(heightValue[0]);
  const heightInchValue = parseFloat(heightValue[1]);
  const heightFootValueInMeter = heightFootValue * 0.3048;
  const heightInchValueInMeter = heightInchValue * 0.0254;
  const height = heightFootValueInMeter + heightInchValueInMeter;
  const BMI = weight / (height * height);
  if (isNaN(BMI)) {
    alert("Please provide number as input");
    return;
  }

  alert(`Your BMI is ${BMI.toFixed(2)}`);
});
