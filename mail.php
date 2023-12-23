<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer-6.9.1/src/Exception.php';
require './PHPMailer-6.9.1/src/SMTP.php';
require './PHPMailer-6.9.1/src/PHPMailer.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $objet = $_POST['objet'];
}
 
    $mail = new PHPMailer(true);

    try {
      
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                   
        $mail->isSMTP();                                           
        $mail->Host       = 'smtp.gmail.com';                  
        $mail->SMTPAuth   = true;                                  
        $mail->Username   = 'felixdespois61@gmail.com';                  
        $mail->Password   = 'qauz ejvy kilk kyis';                               
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
        $mail->Port = 465;                                   

        
        $mail->setFrom($email, $objet);
        $mail->addAddress('felix.despois@sts-sio-caen.info'); 

        $mail->isHTML(true);
        $mail->Subject = $email;
        $mail->Body = $message;

        
        $mail->send();

        
        echo "Mail envoyé !";
        exit();
    } catch (Exception $e) {
        
        echo "Erreur d'envoi du mail. Rééssaye encore !";
        exit();
    }
?>