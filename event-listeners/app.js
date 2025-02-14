// ======================== //
// ====== Section 1 ======= //
// ======================== //
/**
 * 
 * @param {PointerEvent} event 
 */
function onButtonClick (event) {
	console.log(this);
	event.preventDefault();
	event.stopPropagation();
}

document.querySelectorAll('#btn, a').forEach(button => {
  	button.addEventListener('click', onButtonClick);
});


// ======================== //
// ====== Section 2 ======= //
// ======================== //
document.querySelector('.maDiv').addEventListener('click', (event) => {
	console.log('Click on maDiv');
});


// ======================== //
// ====== Section 3 ======= //
// ======================== //
document.querySelector('#myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log('Nom :', data.get('username'));

});

document.querySelector("input[type='password']").addEventListener('input', (e) => {
    console.log("Mot de passe tapé :", e.target.value);
});

document.querySelector('select').addEventListener('change', (e) => {
	console.log('Option :', e.target.value);
});


// ======================== //
// ====== Section 4 ======= //
// ======================== //
document.addEventListener('keydown', (e) => {
	if (e.ctrlKey === true && e.key === 'k') {
		e.preventDefault();
		console.log('Raccourci utilisé !');
	}
});


// ======================== //
// ====== Section 5 ======= //
// ======================== //
window.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Bloque le menu contextuel
    console.log('Clic droit désactivé !');
});


// ======================== //
// ====== Section 6 ======= //
// ======================== //

const spoilers = document.querySelectorAll('.spoiler');

function revealSpoiler () {
	spoilers.forEach(spoiler => {
		spoiler.classList.remove('spoiler');
	});
}

spoilers.forEach(spoiler => {
	spoiler.addEventListener('click', revealSpoiler);
});
/*document.querySelectorAll('.spoiler').forEach(spoiler => {
	spoiler.addEventListener('click', (e) => {
		spoiler.classList.remove('spoiler');
	});
});*/


