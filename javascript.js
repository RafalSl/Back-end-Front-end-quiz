var question = [
				["Jak przeglądasz stronę internetową, na co zwracasz uwagę w pierwszej kolejności?", "Obrazki", "Układ strony", "Szata graficzna", "Efekty specjalne", -100, +100, -50, +50],
				["Przy zakupie samochodu, na jakie rzeczy zwracasz uwagę w pierwszej kolejności?", "Niezawodność", "Wygląd", "Osiągi", "Szybkość", +100, -100, +25, +50],
				["Czy lubisz uczyć się języków obcych?", "Tak", "Raczej tak",  "Raczej nie", "Zdecydowanie nie", +100, +25, -50, -100],
				["Jaki zestaw umiejętności najtrafniej Cię określa?",  "Kreatywny i głodny nowych umiejętności", "Pracowity i dokładny", "Ostrożny i podejrzliwy", "Wzrokowiec i chłonny nowych wrażeń", -50, +100, +25, -100],
				["Gdzie byś najchętniej spędził czas wolny?", "W interaktywnym labie technologicznym", "W galerii sztuki", "Na łonie natury", "W krzemowej dolinie", +100, -100, 0, +50],
				["Na co zwracasz uwagę w pierwszej kolejności?", "Kolor samochodu", "Ile koni mechanicznych ma silnik", "Zużycie benzyny", "Markę samochodu", -100, +100, +50, -25],
				["Co jest dla Ciebie ważniejsze przy szykowaniu prezentacji?", "Treść", "Szablon graficzny", "Funkcjonalność", "Animacje i efekty wizualne", +50, -100, +100, -50],
				["Z jakiego przedmiotu w szkole byłeś najlepszy?", "Plastyka", "Muzyka", "Fizyka", "Matematyka", -100, -25, +75, +100],
				["Twoja pasja to:", "Czytanie książek", "Sport", "Rozwiązywanie zagadek", "Oglądanie filmów", 0, 0, +100, -100],
				["Jak pracujesz?", "Siła w pracy zespołowej", "Samodzielnie", "Lubię konsultować się z innymi", "Z nikim nic nie konsultuję", +100, -100, +50, 0]				

				
				];  

	 
var frontInfo="Twój zmysł artystyczny wskazuje na to, że świetnie odnajdziesz się we frontendzie";
var fullInfo="Posiadasz zdolności predysponująe Cię do pracy jako fullstack developer.";
var backInfo="Twoja umiejętność analitycznego myślenia predysponują Cię do pracy w backendzie";

			
var frontLink="'http://reaktor.pwn.pl/kurs/front-end-developer/'";
var fullLink="'http://reaktor.pwn.pl/kurs/back-end-developer/'";
var backLink="'http://reaktor.pwn.pl/kurs/back-end-developer/'";

	
var score = 0;


var questNumber = Object.keys(question).length;

var quesNum = 0;
	var pulaPlus = 0;
	var pulaMinus = 0;
var pula = 0;


document.addEventListener('DOMContentLoaded', function() {
	
    displayQuiz();
}, false);


function displayQuiz(){

var quest = document.getElementById("question");
quest.innerHTML = question[quesNum][0];

        
        var progress = document.getElementById("progres");
	progress.innerHTML = "<p>" + "Pytanie " + (quesNum+1) + " z " + questNumber + ".</p>";

  for(j=1; j<=4; j++){
     var opt = document.getElementById("choice"+j);
     opt.innerHTML = question[quesNum][j];
 }
}

function fpula(){
	for(i=0; i<=questNumber; i++){
		for(j=5; j<=8; j++){
			if(question[i][j]===100){
				pulaPlus += question[i][j];
				
			}else if (question[i][j]===-100){
				pulaMinus+= question[i][j];
				
			}
		}

	}

}	
	
	
function moveBar(sc) {
    var elem = document.getElementById("myBar");
 
	
	var width = 50;
	var side=1;
	var ile=3;
    var id1 = setInterval(frame, 10);
    
	function frame() {
		
		if(ile>0){
			if (side === 1) {
				if (width < 100) {
				width++;
				elem.style.width = width + '%';

				}else{
					side=2;
					ile--;
				}
			} else {	
				if (width > 1) {
				width--;
				elem.style.width = width + '%';
				}else{
					side=1;
					ile--;
				}
			}	
		}else{		
			if (width > udzial) {
				width--;
				elem.style.width = width + '%';
			}else{
				clearInterval(id);
			}	
		}
    }
}



function print(h1,h2,lin){
	
var mainBody = document.getElementById("quiz");	
	mainBody.innerHTML = "<h1>Gratulacje! Twój profil to : "+h1+"</h1>"+
				"<hr style=\"margin-top: 20px\">"+	
				"<p id=\"question\">"+h2+ "</p>"+
				
				 "<div class=\"progress\">"+
					" <div id=\"fr\" class=\"progress-bar progress-bar-success\" style=\"width: 35%\">Front-end</div>"+
					"<div id=\"fu\" class=\"progress-bar progress-bar-warning\" style=\"width: 30%\">Full-stack</div>"+
					"<div id=\"ba\"  class=\"progress-bar progress-bar-danger\" style=\"width: 35%\">Beck-end</div>"+
				" </div>"+
				
				"<div id=\"myProgress\">"+
					"<div id=\"myBar\" style=\"width: "+udzial+"%\"></div>"+
				"</div>"+
				"<hr style=\"margin-top: 20px\">"+
				"<h2>Będziesz mógł zgłębić się w języki programowania:</h2>"+
				"<div id=\"picture\">"+
					"<center>"+
						"<img src=\"images/front.jpg\">"+
					"</center>"+
				"<\div>"+
				
				"<hr style=\"margin-top: 20px\">"+
				"<div id=\"mail\"><a href='"+lin+"'>Dowiedz się więcej!</a></div>";
}


  function validate(item){
	if (item === "a"){
       	score += question[quesNum][5];
	}
	else if (item === "b"){
       	score += question[quesNum][6];
	}
	else if (item === "c"){
       	score += question[quesNum][7];
	}
	else if (item === "d"){
       	score += question[quesNum][8];
	}
        
		if(quesNum  === questNumber-1){

			var mainBody = document.getElementById("quiz");

				mainBody.innerHTML = "<h1>Quiz preferencji Front-end Back-end</h1>"+
				"<hr style=\"margin-top: 20px\">"+		
				"<p id=\"question\">Za chwilę dowiesz się jaki jest Twój profil programisty....</p>"+

				 "<div class=\"progress\">"+
					" <div id=\"fr\" class=\"progress-bar progress-bar-success\" style=\"width: 35%\">Front-end</div>"+
					"<div id=\"fu\" class=\"progress-bar progress-bar-warning\" style=\"width: 30%\">Full-stack</div>"+
					"<div id=\"ba\"  class=\"progress-bar progress-bar-danger\" style=\"width: 35%\">Beck-end</div>"+
				" </div>"+
				
				"<div id=\"myProgress\">"+
					"<div id=\"myBar\"></div>"+
				"</div>"+
				"<hr style=\"margin-top: 20px\">";

			udzial=Math.round(((score+Math.abs(pulaMinus))/(Math.abs(pulaMinus)+pulaPlus))*100);
			if (udzial===0){
				udzial=1;
			}else if (udzial===100){
				udzial=99;
			}
			
			
			moveBar(udzial);

			function delay(){
				return function(){
			
					if (udzial<=34){
				
						print("Front-end",frontInfo,frontLink);
					
					}else if (udzial>=66){
					
						print("Back-end",backInfo,backLink);

					}else{

					print("Full-stack",fullInfo,fullLink);				
				}
			}
		}
		setTimeout(delay(), 4100);
	}
	quesNum++;

}
fpula();

function listen(cl) {
	
    validate(cl);
	displayQuiz();
	
}