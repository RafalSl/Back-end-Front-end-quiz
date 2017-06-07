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
			   
var score = 0;
var quesNum = 0;
	var pulaPlus = 0;
	var pulaMinus = 0;
var pula = 0;

var questNumber = Object.keys(question).length;



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
			if(question[i][j]>=0){
				pulaPlus += question[i][j];
				
			}else{
				pulaMinus+= question[i][j];
				
			}
		}

	}

}	
	
fpula();




function moveBar(sc) {
    var elem = document.getElementById("myBar");
    var width = 50;
	var side=1;
	var ile=3;
    var id1 = setInterval(frame, 7);
    
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
			if (width > sc) {
				width--;
				elem.style.width = width + '%';
			}else{
				clearInterval(id);
				
				var mainBody = document.getElementById("quiz");
				mainBody.innerHTML = "<h1>Sprawdzam prezefencje</h1>";
			}	
		}
    }
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

			udzial=Math.round(((score+Math.abs(pulaMinus))/(Math.abs(pulaMinus)+pulaPlus))*100);
			
			
		if (score < (-questNumber * 100 * 1 / 3)){
			
				mainBody.innerHTML = "<h1>Gratulacje! Twój profil to Front-end</h1>"+
				"<hr style=\"margin-top: 20px\">"+
				"<h2>"+"Twój zmysł artystyczny wskazuje na to, że świetnie odnajdziesz się we frontendzie."+ "</h2>"+
				
				 "<div class=\"progress\">"+
				" <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">Front-end</div>"+
				"<div class=\"progress-bar progress-bar-warning\" style=\"width: 30%\">Full-stack</div>"+
				"<div class=\"progress-bar progress-bar-danger\" style=\"width: 35%\">Beck-end</div>"+
				" </div>"+
				
				"<div id=\"myProgress\">"+
					"<div id=\"myBar\"></div>"+
				"</div>"+
				"<h2>Będziesz mógł zgłębić się w języki programowania:</h2>"+
				"<div id=\"picture\">"+
				"<center>"+
				
					"<img src=\"images/front.jpg\">"+
					
				"</center>"+
				
				"<\div>"+
				
				"<hr style=\"margin-top: 20px\">"+
				"<div id=\"mail\"><a href='http://reaktor.pwn.pl/kurs/front-end-developer/'>Dowiedz się więcej!</a></div>";
				
				
			}else if (score > (questNumber * 100 * 1 / 3)){
				
				
				mainBody.innerHTML = "<h1>Gratulacje! Twój profil to Back-end</h1>"+
				"<hr style=\"margin-top: 20px\">"+
				"<h2>"+"Twoja umiejętność analitycznego myślenia predysponują Cię do pracy w backendzie.</h2>"+
				"<div class=\"progress\">"+
				 " <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">Front-end</div>"+
				 "<div class=\"progress-bar progress-bar-warning\" style=\"width: 30%\">Full-stack</div>"+
				  "<div class=\"progress-bar progress-bar-danger\" style=\"width: 35%\">Beck-end</div>"+
			   " </div>"+
							
				"<div id=\"myProgress\">"+
					"<div id=\"myBar\"></div>"+
				"</div>"+
				"<h2>Będziesz mógł zgłębić się w języki programowania:</h2>"+
				"<div id=\"picture\">"+
				"<center>"+
				
					"<img src=\"images/back.jpg\">"+
					
				"</center>"+
				
				"<\div>"+
				
				
				"<hr style=\"margin-top: 20px\">"+
			
				"<div id=\"mail\">"+"<a href='http://reaktor.pwn.pl/kurs/back-end-developer/'>Dowiedz się więcej!</a></div>";
				
								
				
			}else{
				mainBody.innerHTML = "<h1>Gratulacje! Twój profil to Fullstack developer</h1>"+
				"<hr style=\"margin-top: 20px\">"+
				"<h2>"+"Posiadasz zdolności predysponująe Cię do pracy jako fullstack developer.</h2>"+ 
				
				
        "<div class=\"progress\">"+
         " <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">Front-end</div>"+
         "<div class=\"progress-bar progress-bar-warning\" style=\"width: 30%\">Full-stack</div>"+
          "<div class=\"progress-bar progress-bar-danger\" style=\"width: 35%\">Beck-end</div>"+
       " </div>"+
				
				
				"<div id=\"myProgress\">"+
					"<div id=\"myBar\"></div>"+
				"</div>"+
				"<h2>Będziesz mógł zgłębić się w języki programowania:</h2>"+
				"<div id=\"picture\">"+
				"<center>"+
					"<img src=\"images/back.jpg\"><br>"+
					"<img src=\"images/front.jpg\">"+
					
				"</center>"+
				
				"<\div>"+
				
				"<hr style=\"margin-top: 20px\">"+
				"<div id=\"mail\">"+"<a href= 'http://reaktor.pwn.pl/kurs/back-end-developer/'>Dowiedz się więcej!</a></div>";
				
				;
				
			}
			
			moveBar(udzial);
		 }
		
		quesNum++;

     }


function listen(cl) {
	
    validate(cl);
	displayQuiz();
	
}
