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
		document.getElementById("priceEdit").value = jsonObject.price;
		document.getElementById("remarksEdit").value = jsonObject.remarks;
		document.getElementById("ddlSupplierEdit").value = jsonObject.supplierid;
		document.getElementById("ddlVehicleEdit").value = jsonObject.vehicleid;
		
		document.getElementById("startDateEdit").value = jsonObject.startDate.substr(0,10);;
		document.getElementById("endDateEdit").value = jsonObject.endDate.substr(0,10);
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
		document.getElementById("priceDetails").value = jsonObject.price;
		document.getElementById("remarksDetails").value = jsonObject.remarks;
		document.getElementById("ddlSupplierDetails").value = jsonObject.supplierid;
		document.getElementById("date1Details").value = jsonObject.startDate.substr(0,10);
		document.getElementById("date2Details").value = jsonObject.endDate.substr(0,10);
		document.getElementById("ddlVehicleDetails").value = jsonObject.vehicleid;
		document.getElementById("lastModifiedByDetails").value = jsonObject.lastModifiedBy;
		document.getElementById("lastModifiedDateDetails").value = jsonObject.lastModifiedDate.substr(0,19).replace("T", " ");
	};
	
	var myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
	myModal.show();
});
});

});


