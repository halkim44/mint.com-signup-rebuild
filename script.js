function whenFocus(container) {
	let helpText = container.querySelector('.help-text');
	helpText.style.display = 'block';
}

function leaveFocus(container) {
	let helpText = container.querySelector('.help-text');
	helpText.style.display = '';
}

//select all input container
let inputContainers = document.querySelectorAll('.input-container');

inputContainers.forEach((container) => {
	let input = container.querySelector('input');

	input.addEventListener('focus', () => {
		whenFocus(container);	
	});
	input.addEventListener('blur', () => {
		leaveFocus(container);	
	});
})
// iterate for each
// input onfocus
// whenFocus(current input-container)