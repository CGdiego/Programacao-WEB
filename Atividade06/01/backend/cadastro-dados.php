<?php

// Configs de seguranca
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Verificar se é a request de config
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Capturar o post do front, e transformar em json
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput,true);

// Acessa o array e pegar os valores
$nome = $data['nome'] ?? "sem nome";
$idade = $data['idade'] ?? "sem idade";

// Criar os dados, e colocar no meu banco
date_default_timezone_set('America/Sao_Paulo');
$arrayData = [
    "timestamp" => date("Y-m-d H:i:s"),
    "nome" => $nome,
    "idade" => $idade
];

$dados = file_get_contents("cadastro-dados.json");
$lista = json_decode($dados,true);

$lista[] = $arrayData;

$jsonString = json_encode($lista, JSON_PRETTY_PRINT);
file_put_contents('cadastro-dados.json',$jsonString);

// Resposta para o front
echo json_encode([
    "status" => "success",
    "message" => "Recebi $nome e $idade"
])

?>