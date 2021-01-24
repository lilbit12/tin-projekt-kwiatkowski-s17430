function validateForm() {


    const pl_idInput = document.getElementById('pl_id');

    const errorPl_idInput = document.getElementById('errorPl_Id');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([pl_idInput], [errorPl_idInput], errorsSummary);

    let valid = true;


    if (!checkListView(pl_idInput.value)) {
        valid = false;
        pl_idInput.classList.add("error-input");
        errorPl_idInput.innerText = "You must choose player name.";
    }

    if (!valid) {
        errorsSummary.innerText = "Form contain errors.";
    }

    return valid;
}

function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkListView(value){
    if(value.includes('choose')){
        return false;
    }
    return true;
}
