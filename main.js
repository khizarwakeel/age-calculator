let inputField = document.getElementById("inputField");
var currentDate = new Date();
let messageHeading = document.getElementById("messageHeading")

const ageCal = () => {

    let ageValue = inputField.value;

    if(ageValue === "" || ageValue === " ") {
        messageHeading.innerHTML = `<span class="text-danger">Please enter your date of birth!</span>`;
        return;
    }

    let ageValueDate = new Date(ageValue);

    if (isNaN(ageValueDate.getTime())) {
        messageHeading.innerHTML = `<span class="text-danger">Please enter a valid date format (e.g., YYYY-MM-DD).</span>`;
        return;
    }

    let yearDiffMilli = currentDate - ageValueDate;
    let yearDiff = yearDiffMilli / (1000 * 60 * 60 * 24 * 365);
    let result = Math.floor(yearDiff)
    messageHeading.innerHTML = `You are <span class="text-danger">${result} Years </span>old!`;

}