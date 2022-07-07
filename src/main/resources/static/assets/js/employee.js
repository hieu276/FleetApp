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
		document.getElementById("txtIdEdit").value = jsonObject.id;
		document.getElementById("ddlTitleEdit").value = jsonObject.title;
		document.getElementById("txtInitialsEdit").value = jsonObject.initials;
		document.getElementById("txtSSNEdit").value = jsonObject.socialSecurityNumber;
		document.getElementById("txtFirstnameEdit").value = jsonObject.firstname;
		document.getElementById("txtLastnameEdit").value = jsonObject.lastname;
		document.getElementById("txtOthernameEdit").value = jsonObject.othername;
		document.getElementById("ddlGenderEdit").value = jsonObject.gender;
		document.getElementById("ddlNationalityEdit").value = jsonObject.countryid;
		document.getElementById("txtAddressEdit").value = jsonObject.address;
		document.getElementById("txtCityEdit").value = jsonObject.city;
		document.getElementById("txtDateOfBirthEdit").value = jsonObject.dateOfBirth.substr(0,10)
		document.getElementById("txtEmailEdit").value = jsonObject.email;
		document.getElementById("txtMobileEdit").value = jsonObject.mobile;
		document.getElementById("txtPhoneEdit").value = jsonObject.phone
		document.getElementById("ddlStateEdit").value = jsonObject.stateid;
		document.getElementById("ddlEmployeeTypeEdit").value = jsonObject.employeetypeid;
		document.getElementById("txtHireDateEdit").value = jsonObject.hireDate.substr(0,10);
		document.getElementById("ddlJobTitleEdit").value = jsonObject.jobtitleid;
		document.getElementById("ddlMaritalStatusEdit").value = jsonObject.maritalStatus;
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
const photoBtn = document.querySelectorAll('.photo')
photoBtn.forEach(button => {
	button.addEventListener('click', function(event) {
	event.preventDefault();
	let href1 = this.getAttribute('href');
	window.alert(href1)
	document.getElementById('employeePhoto').src = href1;
	var myModal = new bootstrap.Modal(document.getElementById('photoModal'));
	myModal.show();
	});
});	

});


