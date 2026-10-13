<?php
require 'Conexion.php';

session_start();

$Email = $_POST['email'];
$Password = $_POST['password'];

$q = "SELECT COUNT(*) as contar from loginp where email = '$Email' and password = '$Password'";
$consulta = mysqli_query($conexion,$q);
$array = mysqli_fetch_array($consulta);

if($array['contar']>0){
    $_SESSION['username'] = $Email;
    header("location: ../HTML/Menú/Home.html");
}else{
    header("location: ../HTML/Login Professor.html");
}

?>