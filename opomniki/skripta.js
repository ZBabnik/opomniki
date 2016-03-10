window.addEventListener('load', function() {
	//stran nalozena
	
			
	var izvediPrijavo = function(){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	document.querySelector("#prijavniGumb")
			.addEventListener("click", izvediPrijavo);
	
	
	//Dodaj opomnik
	var dodajOpomnik = function(){
		var vrednost = document.querySelector("#naziv_opomnika").value;
		//document.querySelector("#uporabnik").innerHTML = vrednost;
		var cas = document.querySelector("#cas_opomnika").value;
		//document.querySelector("#uporabnik").innerHTML = cas;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik senca rob'><div class='naziv_opomnika'>" + vrednost + "</div><div class='cas_opomnika'> Opomnik čez <span>" + cas + "</span> sekund.</div></div>";
	}
	
	document.querySelector("#dodajGumb")
			.addEventListener("click", dodajOpomnik);
		
	
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			if (cas == 0){
				var naziv_opomnika = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik!\n\nZADOLŽITEV " + naziv_opomnika +" JE POTEKLA");
				document.querySelector("#opomniki").removeChild(opomnik);
			} else {
				 casovnik.innerHTML = cas - 1;
			}
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});