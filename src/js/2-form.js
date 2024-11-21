const formData = {
    email: "",
    message: "",
}

const S_KEY = "feedback-form-state";

const form = document.querySelector(".form");

form.addEventListener("input", addText);
form.addEventListener("submit", submitForm);

populateText()

function addText (event) {
    const value = event.target.value
    const key = event.target.name

    formData[key] = value.trim();

    localStorage.setItem(S_KEY, JSON.stringify(formData));
}

function populateText() {
    const userObj = localStorage.getItem(S_KEY);
    
    if (userObj) {
        const origObj = JSON.parse(userObj);

        formData.email = origObj.email || "";
        formData.message = origObj.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
}

function submitForm(event) {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    
    localStorage.removeItem(S_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();

}


