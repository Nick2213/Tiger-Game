//JS For Project


function startgame() {
  document.getElementById('StartScreen').style.display='none';
  document.getElementById('CharCreationScreen').style.display='block';
}

function charcreation() {
document.getElementById("CharCreationScreen").style.visibility="show";
}
//gender info
gender=0
function maletiger() {
gender=1

}

function femaletiger() {
gender=2

}
function SubmitChar(){ 
	document.getElementById("namebox").value ;
		if(gender===0)
		{
		alert("You forgot to chose a gender");
		}
		if(document.getElementById("namebox").value ==='')
		alert("You forgot to make a name")
}

