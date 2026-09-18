<?php

// Configs de segurança
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (file_exists("dados.json")){
    echo file_get_contents("dados.json");
} else {
    echo json_encode([]);
}

?>