<?php
include('conexao.php');
session_start();
//
// A very simple PHP example that sends a HTTP POST to a remote site
//

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,"/api/sistema/inserir");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,  ['indice' => 1]);
// curl_setopt($ch, CURLOPT_POSTFIELDS,
//             "postvar1=value1&postvar2=value2&postvar3=value3");

// In real life you should use something like:
// curl_setopt($ch, CURLOPT_POSTFIELDS, 
//          http_build_query(array('postvar1' => 'value1')));

// Receive server response ...

curl_exec($ch);

if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
    $_SESSION['resultado'] = $error_msg;
}
curl_close ($ch);

// Further processing ...
if ($server_output == "OK") { 
} 

function _isCurl(){
    return function_exists('curl_version');
}
$_SESSION['resultado'] = $server_output;

header('Location: ../index.php')

?>
