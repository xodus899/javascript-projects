const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkBoxes);

let lastChecked;

function handleCheck(event) {
	let inBetween = false;
	if(event.shiftKey && this.checked) {
		checkBoxes.forEach(checkbox => {
			console.log(checkbox);
			if(checkbox === this || checkbox  === lastChecked) {
				inBetween = !inBetween;
			}
			if(inBetween) {
				checkbox.checked = true;
			}
		});

	}
	lastChecked = this;
}
 
checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
