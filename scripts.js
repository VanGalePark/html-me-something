function init() {
  mainState = document.getElementById("theState")
  missouri = document.getElementById("missouri")
  kansas = document.getElementById("kansas")
  florida = document.getElementById("florida")
  illinois = document.getElementById("illinois")
  colorado = document.getElementById("colorado")
  georgia = document.getElementById("georgia")
  california = document.getElementById("california")
  michigan = document.getElementById("michigan")

  missouri.addEventListener("click", function(event) {
    theState.innerHTML = "Missouri"
  })


}

window.onload = init;
