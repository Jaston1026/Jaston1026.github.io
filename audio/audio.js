var synth = new Tone.Synth().toMaster();
var dragging = false;

var pad = document.getElementById("pad");
var label = document.getElementById("label");

function down(event) {
  dragging = true;
}

function up(event) {
  dragging = false;
  synth.triggerRelease();
  label.innerHTML = "CLICK & DRAG";
  pad.style.backgroundColor = 'black';
}

function move(event) {
  if (dragging) {
      var x = event.pageX;
      var xDf = event.offsetX;
      var yDf = event.offsetY;
      synth.setNote(x);
      label.innerHTML = Math.round(x) + "Hz";
      pad.style.backgroundColor =  'rgb(‘+x+’,’+y+’,100)';
  }
}

pad.addEventListener("pointerdown", down);
pad.addEventListener("pointerup", up);
pad.addEventListener("pointermove", move);
