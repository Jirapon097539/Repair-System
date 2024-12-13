<?php
include_once "../model/class.user.php";
?>

<?php

$user = new user();
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = file_get_contents("php://input");
    $userdata = json_decode($data, true);
    // print_r($userdata["btn"]);
    // convert to json again
    if ($user->create_user($userdata)) {
        echo json_encode([
            "status" => "ok",
            "message" => "Insert {$userdata["email"]} Success",
            "data" => $data
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error"]);
    }


} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (!isset($_GET["id"])) {
        //showall
        $data = $user->getrepair();
        //echo count($data); //return จำนวนข้อมูล
        if (count($data)) {
            echo json_encode(["status" => "ok", "data" => $data]);
        } else {
            echo json_encode(["status" => "error", "message" => "N/A"]);
        }

    } else {

    }
} else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    if ($user->deletebyid($_GET['id'])) {
        echo json_encode([
            "status" => "ok",
            "message" => "Delete{$_GET["id"]} Success",
            "id" => $_GET['id']
        ]);

    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Error",
            "id" => -1
        ]);
    }

} else if ($_SERVER['REQUEST_METHOD']  == 'PUT') {
	
    $data = file_get_contents("php://input");
    $userdata = json_decode($data, true);
    // convert to json again
    if ($user->updatebyid($userdata['email'],$userdata['Fname'],$userdata['Lname'],$userdata['password'],$userdata['status'],$userdata['id'])) {
        echo json_encode([
            "status" => "ok",
            "message" => "Update{$_GET["id"]} Success",
            "data" => $data
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error"]);
    }

}
?>