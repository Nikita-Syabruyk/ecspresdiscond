<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registerUser";

$conn = new mysqli($servername, $username, $password, $dbname);

if(!$conn){
    die("Connection Fialed". mysqli_connect_error());
}else{
    echo "Успех";
} ?>