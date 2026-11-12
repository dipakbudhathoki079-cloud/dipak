
const form = document.getElementById("contactform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("formmessage");

    message.textContent =
        name + " さん、お問い合わせありがとうございます！";

    form.reset();

});
