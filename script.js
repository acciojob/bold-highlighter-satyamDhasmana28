let strongs = document.getElementsByTagName("strong");
function highlight() {
    for(let i=0 ; i<strongs.length ; i++){
		let ele = strongs[i];
		ele.classList.add("high-light");
	}	
}


function return_normal() {
    for(let i=0 ; i<strongs.length ; i++){
		let ele = strongs[i];
		ele.classList.remove("high-light");
	}	
}


