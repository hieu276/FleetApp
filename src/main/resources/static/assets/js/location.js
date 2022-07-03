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
		document.getElementById("ddlCountryEdit").value = jsonObject.countryid;
		document.getElementById("addressEdit").value = jsonObject.name;
		document.getElementById("detailsEdit").value = jsonObject.details;
		document.getElementById("ddlStateEdit").value = jsonObject.countryid;
		document.getElementById("nameEdit").value = jsonObject.name;
		document.getElementById("descriptionEdit").value = jsonObject.details;
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
		document.getElementById("ddlCountryDetails").value = jsonObject.countryid;
		document.getElementById("ddlStateDetails").value = jsonObject.stateid;
		document.getElementById("descriptionDetails").value = jsonObject.description;
		document.getElementById("detailsDetails").value = jsonObject.details;
		document.getElementById("cityDetails").value = jsonObject.city;
		document.getElementById("addressDetails").value = jsonObject.address;
	};
	
	var myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
	myModal.show();
});
});

});


