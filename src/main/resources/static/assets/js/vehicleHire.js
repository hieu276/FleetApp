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
		document.getElementById("idEdit").value = jsonObject.id;
		document.getElementById("ddlClientEdit").value = jsonObject.clientid;
		document.getElementById("dateInEdit").value = jsonObject.dateIn.substr(0,10);
		document.getElementById("dateOutEdit").value = jsonObject.dateOut.substr(0,10);
		document.getElementById("timeInEdit").value = jsonObject.timeIn;
		document.getElementById("timeOutEdit").value = jsonObject.timeOut;
		document.getElementById("ddlLocationEdit").value = jsonObject.locationid;
		document.getElementById("priceEdit").value = jsonObject.price;
		document.getElementById("remarksEdit").value = jsonObject.remarks;
		document.getElementById("ddlVehicleEdit").value = jsonObject.vehicleid;
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

});


