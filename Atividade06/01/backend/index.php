<?php

// Configs de seguranca
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Pegar dados do POST
$jsonInput = file_get_contents('php://input');
// Transformar dados em array
$data = json_decode($jsonInput, true);

// Colocando dados em variaveis
$username = $data['nome'] ?? 'sem nome';
$email = $data['email'] ?? 'sem email';
$birthday = $data['nascimento'] ?? 'sem nascimento';
$game = $data['jogo'] ?? 'sem jogo favorito';
$password = $data['senha'] ?? 'sem senha';

// Append new data 
date_default_timezone_set('America/Sao_Paulo');
$timestamp = date("Y-m-d H:i:s");

$arrayData = [
    "timestamp" => $timestamp,
    "username" => $username,
    "email" => $email,
    "birthday" => $birthday,
    "game" => $game,
    "password" => sha1($password)
];

// Transforma array de valores em um JSON
$jsonString = json_encode($arrayData, JSON_PRETTY_PRINT);
// Salvo o json no meu dados.json
file_put_contents('dados.json', $jsonString);

// Send a JSON response back to JavaScript
echo json_encode([
    "status" => "success",
    "message" => "Hello $username, your password is $password."
]);

?>