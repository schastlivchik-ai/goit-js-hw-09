let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(`.feedback-form`);
form.addEventListener(`input`, event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
});

const allInputs = form.querySelectorAll(`input, textarea`)
form.addEventListener(`submit`, event => {
    event.preventDefault();
    if (Array.from(allInputs).some(input => input.value.trim() === ``)) {
        alert('Fill please all fields');
        return
    }
    console.log(formData);
    formData = {
        email: "",
        message: "",
    }
    localStorage.clear();
    form.reset()
})

window.addEventListener(`DOMContentLoaded`, () => {
    if (localStorage.getItem(`feedback-form-state`)) {
        
        const savedFormData = JSON.parse(localStorage.getItem(`feedback-form-state`));
        formData = savedFormData;
        Object.entries(savedFormData).map((input) => {
            form.querySelector(`[name="${input[0]}"]`).value = input[1]
        });
    };
});
