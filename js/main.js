const nav = window.addEventListener("scroll", function() {
    const nav = document.querySelector(".bg-menu");
    nav.classList.toggle("sticky", window.scrollY>0);
})
const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_97fs1bt';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Enviado. ¡Gracias por confiar en nosotros!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });