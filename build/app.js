var submit = document.getElementById('applyNowBtn');
var checkbox = document.getElementById('termsCheckbox');
    
const disableSubmit = function(e) {
    submit.disabled = !this.checked
};

checkbox.addEventListener('change', disableSubmit);