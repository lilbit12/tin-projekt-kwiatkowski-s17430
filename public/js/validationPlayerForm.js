function validateForm() {

    const ingameNameInput = document.getElementById('ingameName');
    const emailInput = document.getElementById('email');
    const guildRankInput = document.getElementById('guildRank');
    const actualClassInput = document.getElementById('actualClass');
    const gearScoreInput = document.getElementById('gearScore');
    const errorsSummary = document.getElementById('errorsSummary');

    const errorIngameName = document.getElementById('errorIngameName');
    const errorEmail = document.getElementById('errorEmail');
    const errorGuildRank = document.getElementById('errorGuildRank');
    const errorGearScore = document.getElementById('errorGearScore');
    const errorActualClass = document.getElementById('errorActualClass');


    resetErrors([ingameNameInput, emailInput, guildRankInput, actualClassInput, gearScoreInput], [errorIngameName, errorEmail, errorGuildRank,
        errorActualClass, errorGearScore], errorsSummary);

    let valid = true;

    if (!checkRequired(ingameNameInput.value)) {
        valid = false;
        ingameNameInput.classList.add("error-input");
        errorIngameName.innerText = "Field is required.";
    }

    if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "This is not valid email address.";
    }

    if (!checkListView(guildRankInput.value)) {
        valid = false;
        guildRankInput.classList.add("error-input");
        errorGuildRank.innerText = "You must choose your guild rank.";
    }

    if (!checkListView(actualClassInput.value)) {
        valid = false;
        actualClassInput.classList.add("error-input");
        errorActualClass.innerText = "You must choose class from the game.";
    }

    if(gearScoreInput.value < 30 || gearScoreInput.value >100){
        valid = false;
        gearScoreInput.classList.add("error-input");
        errorGearScore.innerText = "You must pick number from 30 to 100 only.";
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



function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
}


function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === "") {
        return false;
    }
    return true;
}


