function validateNames(fName,lName)
{
	var isValidated=true;
	var doc=document;
		
			hide("errorMsg");
			if((fName==undefined || fName=="") && (lName ==undefined || lName=="")){
				alert("inside");
			doc.getElementById("errorMsg").innerHTML=FNAME_LNAME_EMPTY_ERR_MSG;
			show("errorMsg");
			isValidated=false;
			}	
	
return isValidated;
}
function hide(obj){
document.getElementById(obj).style.display = "none";
}
function show(obj){
	document.getElementById(obj).style.display = "block";
}