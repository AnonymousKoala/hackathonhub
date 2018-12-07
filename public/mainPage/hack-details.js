document.getElementById('join').addEventListener('click',
	function() {
		document.querySelector('.more-infoBg').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
	function() {
	document.querySelector('.more-infoBg').style.display = 'none';
});
