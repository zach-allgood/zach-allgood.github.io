<?php

$name="";
$email="";
$subject="";
$message="";

if(isset($_POST['name'])){
    $name=$_POST['name'];
}
if(isset($_POST['email'])){
    $email=$_POST['email'];
}

$message = $name . "\r\n" . $email . "\r\n\r\n";

if(isset($_POST['subject'])){
    $subject=$_POST['subject'];
}

if(isset($_POST['message'])){
    $message.=$_POST['message'];
}

if(strlen($message) > 70){
    $message = wordwrap($message,70);
}

mail('zacharycallgood@gmail.com', $subject, $message);