const form = document.getElementById("email-subs");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  const emailVal = email.value;
  e.preventDefault();

  if (validateEmail(emailVal)) {
    form.classList.remove("error");
    console.log(form);
  } else {
    form.classList.add("error");
  }
});
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
