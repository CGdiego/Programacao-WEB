<?php

// Configs de seguranca
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Pegar dados do POST
$jsonInput = file_get_contents('php://input');


?>