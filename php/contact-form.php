<?php
$question = $_POST["question"];
$name = $_POST["name"];
$email = $_POST["email"];
$to = "c4m0.group@gmail.com";
$subject = "question or request";
$headers = "From: $email";
$message = "name: $name\nquestion: $question";

$user = "$email";
$usersubject = "your question/request has been received";
$userheaders = "From: c4m0.group@gmail.com";
$usermessage = "Thank you for sending your question or request your message will be answered as soon as possible.";
if (mail($to,$subject,$message,$headers)){
    echo ("email successfully send to $to ");
}else{
    echo ("email sending failed ");
}


if (mail($user,$usersubject,$usermessage,$userheaders)){
    echo ("email successfully send to $email ");
}else{
    echo ("email sending failed ");
}

