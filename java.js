const bar = document.getElementById('bar');
const come = document.getElementById('come');
const nav = document .getElementById('navbar'); 

if (bar) { 
	bar.addEventListener('click',()=> {nav.classList.add('active');
})};
	if (come) { 
	come.addEventListener('click',()=> {nav.classList.remove('active');
})};



