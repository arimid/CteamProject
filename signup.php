<?php
if($_SERVER['REQUEST_METHOD']=== 'POST'){
    echo $_POST['first_name']. "<br>";
    echo @$_POST['last_name']. "<br>";
    echo @$_POST['email']. "<br>";
    echo @$_POST['password']. "<br>";
    echo @$_POST['sex']. "<br>";
    echo @$_POST['birthdate']. "<br>";
}else{
    header('Location: ./');
}
