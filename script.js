function volume_sphere(e) {
  e.preventDefault(); // stop form reload

  // get radius input
  let rad = document.getElementById("radius").value;
  let volume = document.getElementById("volume");

  // convert radius input to number
  let r = parseFloat(rad);

  // validation
  if (isNaN(r) || r < 0) {
    volume.value = "NaN";
  } else {
    let vol = (4 / 3) * Math.PI * Math.pow(r, 3);
    volume.value = vol.toFixed(4);
  }
}

// bind directly to form submit
window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
