<?php

// configs de seguranca
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// pegar dados do POST
$jsonInput = file_get_contents('php://input');
// transformar dados em array
$data = json_decode($jsonInput, true);

// Colocando dados em variaveis
$username = $data['nome'] ?? 'sem nome';
$password = $data['senha'] ?? 'sem senha';


// 2. Append new data 
date_default_timezone_set('America/Sao_Paulo');
$timestamp = date("Y-m-d H:i:s");

$arrayData = [
    "timestamp" => $timestamp,
    "username" => $username,
    "password" => sha1($password)
];


// transforma array de valores em um json
$jsonString = json_encode($arrayData, JSON_PRETTY_PRINT);
// salvo o json no meu dados.json
file_put_contents('dados.json', $jsonString);




// Send a JSON response back to JavaScript
echo json_encode([
    "status" => "success",
    "message" => "Hello $username, your password is $password."
]);
?>
