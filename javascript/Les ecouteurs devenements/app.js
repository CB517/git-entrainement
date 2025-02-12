// ======================== //
// ====== Section 1 ======= //
// ======================== //
/**
 * 
 * @param {PointerEvent} event 
 */
function onButtonClick (event) {
    console.trace(event);
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", onButtonClick);
});