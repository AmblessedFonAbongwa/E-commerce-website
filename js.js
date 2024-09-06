
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const comein=document.getElementById("come")

if (bar) {
	bar.addEventListener('click', () => {
	 nav.style.display="block"
	})
}
else{
   nav.style.display="none"
};
if(comein){
    comein.addEventListener("click", () => {
        nav.style.display="none";
    })
};
