// Tambahkan kode JavaScript kalian di file ini
const form = document.getElementById('formData');

function handleGetFormData(){

    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return {
        name,
        city,
        email,
        zipCode,
        status,
    };
}

function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked() {
    return document.getElementById('status').checked;
}

function validateFormData(formData){
    return formData && 
    isNumber(formData.zipCode) && 
    checkboxIsChecked()
}

'submit', function(event) {
    event.preventDefault(); 
    submit();
}

function submit() {
    const warning = document.getElementById('warning');
    
    if (!validateFormData(handleGetFormData())) {
        warning.innerText = 'Periksa form anda sekali lagi';
    } else {
        warning.innerText = ''; 
    }
}

form.addEventListener('submit', submit);
    
