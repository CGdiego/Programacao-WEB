<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";
$banco = "escola";
$user = "root";
$senha = "";

$pdo = new PDO("mysql:host=$host;dbname=$banco",$user,$senha);
$sql = $pdo->query("SELECT * FROM escola.usuarios;");
$dados = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($dados);

?>