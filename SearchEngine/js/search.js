
var SERVER_URL="https://data.cityofnewyork.us/resource/5scm-b38n.json"
function searchByFName(fName){
		
		var doc=document;
		var uri=SERVER_URL+"?first_name="+fName;	
		var response = getList(uri);
		if(response!=undefined){
			var data = JSON.parse(response);
			extractData(data);
		}
		
		
}
function searchByLName(lName){
		
		
		var uri=SERVER_URL+"?last_name="+lName;	
		var response = getList(uri);
		if(response!=undefined){
			var data = JSON.parse(response);
			extractData(data);
		}
		
		
}
function searchByFirstAndLName(fName,lName){
		
		
		var uri=SERVER_URL+"?last_name="+lName+"&first_name="+fName;	
		var response = getList(uri);
		if(response!=undefined){
			var data = JSON.parse(response);
			extractData(data);
		}
		
		
}
function searchByDefault(){
		
		
		var uri=SERVER_URL;	
		var response = getList(uri);
		if(response!=undefined){
			var data = JSON.parse(response);
			extractData(data);
		}
		
		
}
function extractData(data){
	var doc=document;
	var table = document.getElementById("dataTable");
	var column=["S.No","list_no","exam_no","first_name","last_name","list_agency_desc","list_title_desc","published_date"];
	var colLength=column.length;
for(var i in data){
var rowIndex=parseInt(i)+1;	
	var row = table.insertRow(rowIndex);
	
	for(var j=0;j<colLength;j++){
		
		var cell = row.insertCell(j);
		if(j==0){
			cell.innerHTML=rowIndex;
		}else{
		cell.innerHTML=data[i][column[j]]==undefined ?"&nbsp":data[i][column[j]];
		}
		}
	
	
}

	
	
}
function search(){
	
	
	try{
	var doc=document;
	var fName=doc.getElementById("form_fname").value.trim();
	var lName=doc.getElementById("form_lastname").value.trim();
	
		
			if((fName!=undefined && fName!="") &&  (lName==undefined ||  lName=="")){
				
				searchByFName(fName);
			}else if((lName!=undefined && lName!="") &&  (fName==undefined ||  fName=="")){
				searchByLName(lName)
			}
			else if((lName!=undefined && lName!="") &&  (fName!=undefined ||  fName!="")){
				searchByFirstAndLName(fName,lName)
			}else {
			searchByDefault();	
			}
	
	
	
	
	
	}catch(e){
		alert(e.message);
	}
	
	
}

function getList(url){
var xhttp;
var response;
hide("errorMsg");

  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	   response=this.responseText;
    }else{
		
	}
};
xhttp.open("GET", url, false);
xhttp.send(); 
if(response==undefined||response.length==3){
document.getElementById("errorMsg").innerHTML=NO_RECORD_FOUND_ERR_MSG;
show("errorMsg");	
}

return  response; 
}

function deleteTable(){
	var elmtTable = document.getElementById('dataTable');
var tableRows = elmtTable.getElementsByTagName('tr');
var rowCount = tableRows.length;

for (var x=rowCount-1; x>0; x--) {
   elmtTable.removeChild(tableRows[x]);
}
}
