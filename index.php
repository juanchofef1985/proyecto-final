<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <form method="post">
   
        <h2>Hola<h2>
        <p>inicia tu registro<p>
         
        <div class="input-wrapper">
            <input type="text" name="name" placeceholder="Nombre">
            <img class="input-icon" src="images/name.svg" alt="">
        </div>

        <div class="input-wrapper">
            <input type="email" name="email" placeceholder="correo">
            <img class="input-icon" src="images/email.svg" alt="">
        </div>

        <div class="input-wrapper">
            <input type="text" name="direction" placeceholder="direccion">
            <img class="input-icon" src="images/direction.svg" alt="">
        </div>

        <div class="input-wrapper">
            <input type="tel" name="phone" placeceholder="telefono">
            <img class="input-icon" src="images/phone.svg" alt="">
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeceholder="contraseña">
            <img class="input-icon" src="images/password.svg" alt="">
        </div>

        <input class="btn"type="submit" name="register" values="enviar">
    </form>
     
    <?php
        include("registrar.php");
    ?>


</body>
</html>