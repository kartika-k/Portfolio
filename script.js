const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
})
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kartikakannojiya28@gmail.com",
        Password : "kartika28@",
        To : 'kartikakannojiya28@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}