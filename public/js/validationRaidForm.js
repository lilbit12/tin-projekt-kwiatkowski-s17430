function validateForm() {

    const instanceNameInput = document.getElementById('instanceName');
    const raidDateInput = document.getElementById('raidDate');
    const errorsSummary = document.getElementById('errorsSummary');

    const errorInstanceName = document.getElementById('errorInstanceName');
    const errorRaidDate = document.getElementById('errorRaidDate');

    resetErrors([instanceNameInput, raidDateInput], [errorInstanceName, errorRaidDate], errorsSummary);

    let valid = true;


    let nowDate = new Date();



    if(!checkListView(instanceNameInput.value)){
        valid = false;
        instanceNameInput.classList.add("error-input");
        errorInstanceName.innerText = "You must choose instance name.";
    }

    if(!checkDateIfAfter(raidDateInput.value,nowDate)){
        valid = false;
        raidDateInput.classList.add("error-input");
        errorRaidDate.innerText = "Date cannot be from the past.";
    }

    return valid;
}

function checkListView(value){
    if(value.includes('choose')){
        return false;
    }
    return true;
}

function checkDateIfAfter(value, compareTo) {

    if (!value) {
        return false;
    }
    if (!compareTo) {
        return false;
    }

    /*const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/;
    if (!pattern.test(value)) {
        return false;
    }
    if (!pattern.test(compareTo)) {
        return false;
    }*/

    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);
    if (valueDate.getTime() < compareToDate.getTime()) {
        return false;
    }
    return true;
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