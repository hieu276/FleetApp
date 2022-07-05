document.addEventListener("DOMContentLoaded", function() {
const btnEditList = document.querySelectorAll('.table .btn-primary');
btnEditList.forEach(button => {
	button.addEventListener('click', function(event) {
	event.preventDefault();
	let href = this.getAttribute('href');
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", href);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function(){
		let jsonObject = JSON.parse(xmlHttp.responseText);
		document.getElementById("idEdit").value = jsonObject.id
		document.getElementById("ddlVehicleEdit").value = jsonObject.vehicleid;
		document.getElementById("ddlLocation1Edit").value = jsonObject.locationid1;
		document.getElementById("ddlLocation2Edit").value = jsonObject.locationid2;
		document.getElementById("date1Edit").value = jsonObject.date1.substr(0,10);
		document.getElementById("date2Edit").value = jsonObject.date2.substr(0,10);
		document.getElementById("remarksEdit").value = jsonObject.remarks;
	};
	
	var myModal = new bootstrap.Modal(document.getElementById('editModal'));
	myModal.show();
});
});

const btnDelList = document.querySelectorAll('.table .btn-danger')
btnDelList.forEach(button => {
	button.addEventListener('click', function(event) {
	event.preventDefault();
	let href1 = this.getAttribute('href');
	document.getElementById('confirmDelButton').href = href1;
	var myModal = new bootstrap.Modal(document.getElementById('deleteModal'));
	myModal.show();
	});
});		
const btnDetailsList = document.querySelectorAll('.table .btn-success');
btnDetailsList.forEach(button => {
	button.addEventListener('click', function(event) {
	event.preventDefault();
	let href = this.getAttribute('href');
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", href);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function(){
		let jsonObject = JSON.parse(xmlHttp.responseText);
		document.getElementById("idDetails").value = jsonObject.id;
		document.getElementById("ddlVehicleDetails").value = jsonObject.vehicleid;
		document.getElementById("ddlLocation1Details").value = jsonObject.locationid1;
		document.getElementById("ddlLocation2Details").value = jsonObject.locationid2;
		document.getElementById("date1Details").value = jsonObject.date1.substr(0,10);
		document.getElementById("date2Details").value = jsonObject.date2.substr(0,10);
		document.getElementById("ddlLocation2Details").value = jsonObject.remarks;
	};
	
	var myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
	myModal.show();
});
});

});


