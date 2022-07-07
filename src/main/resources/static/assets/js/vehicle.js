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
		document.getElementById("txtAcquisitionDateEdit").value = jsonObject.acquisitionDate.substr(0,10);
		document.getElementById("txtDescriptionEdit").value = jsonObject.description;
		document.getElementById("ddlEmployeeEdit").value = jsonObject.employeeid;
		document.getElementById("txtFuelCapacityEdit").value = jsonObject.fuelCapacity
		document.getElementById("txtIdEdit").value = jsonObject.id;
		document.getElementById("ddlLocationEdit").value = jsonObject.locationid;
		document.getElementById("txtNameEdit").value = jsonObject.name
		document.getElementById("txtNetWeightEdit").value = jsonObject.netWeight;
		document.getElementById("txtPowerEdit").value = jsonObject.power;
		document.getElementById("txtRegistrationDateEdit").value = jsonObject.registrationDate.substr(0,10);
		document.getElementById("txtRemarksEdit").value = jsonObject.remarks;
		document.getElementById("ddlVehicleMakeEdit").value = jsonObject.vehiclemakeid;
		document.getElementById("ddlVehicleModelEdit").value = jsonObject.vehiclemodelid
		document.getElementById("txtVehicleNumberEdit").value = jsonObject.vehicleNumber;
		document.getElementById("ddlVehicleStatusEdit").value = jsonObject.vehiclestatusid;
		document.getElementById("ddlVehicleTypeEdit").value = jsonObject.vehicletypeid
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
const photoBtn = document.querySelectorAll('.table #photoButton')
photoBtn.forEach(button => {
	button.addEventListener('click', function(event) {
	event.preventDefault();
	let href1 = this.getAttribute('href');
	document.querySelector('#photoModal #vehiclePhoto').src = href1;
	var myModal = new bootstrap.Modal(document.getElementById('#photoModal'));
	myModal.show();
	});
});	

});


