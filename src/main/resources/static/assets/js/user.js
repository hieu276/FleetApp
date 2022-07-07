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
		document.getElementById("txtAddressEdit").value = jsonObject.address;
		document.getElementById("txtCityEdit").value = jsonObject.city;
		document.getElementById("ddlCountryEdit").value = jsonObject.countryid;
		document.getElementById("txtDetailsEdit").value = jsonObject.details;
		document.getElementById("txtEmailEdit").value = jsonObject.email;
		document.getElementById("txtIdEdit").value = jsonObject.id;
		document.getElementById("txtMobileEdit").value = jsonObject.mobile;
		document.getElementById("txtNameEdit").value = jsonObject.name;
		document.getElementById("txtPhoneEdit").value = jsonObject.phone;
		document.getElementById("ddlStateEdit").value = jsonObject.stateid;
		document.getElementById("txtWebsiteEdit").value = jsonObject.website;
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


