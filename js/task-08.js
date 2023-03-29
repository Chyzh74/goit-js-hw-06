const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSabmit);

function onFormSabmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { mail, password };

  if (mail === "" || password === "") {
    alert("Bсі поля повинні бути заповнені!");
  } else {
    console.log(formData);
  }

  formEl.reset();
}