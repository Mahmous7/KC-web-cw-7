function BMI(weight, height) {
  let resuit = weight / (height * height);
  return resuit;
}
console.log(BMI(80, 1.8));

function Status(BodyMass) {
  if (BodyMass < 18) {
    return "لديك نقص في الوزن";
  } else if (BodyMass >= 18.5 && BodyMass <= 25) {
    return "وزنك صحي";
  } else {
    return "لديك زيادة في الوزن";
  }
}
function Calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_value = BMI(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");

  box.innerText = bmi_value + " == " + desc;
}
