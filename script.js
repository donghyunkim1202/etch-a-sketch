// slider
var rangeSlider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
    output.innerHTML = this.value; 
}


