<?php
session_start();
?>
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
    if (isset($_GET["email"]) && isset($_GET["password"])) {
        $data = $user->getuser($_GET["email"], md5($_GET["password"]));
        if ($data != "") {
            if (count($data)) {
                echo json_encode(["status" => "ok", "data" => $data]);
                $_SESSION['email'] = json_encode($data['email']);
                $_SESSION['Fname'] = json_encode($data['Fname']);
                $_SESSION['Lname'] = json_encode($data['Lname']);
                $_SESSION["chk"] = 1;
            } else {
                echo json_encode(["status" => "error", "message" => "N/A"]);
            }
        }else{
            echo json_encode(["status" => "error", "data" => $data]);
        }

    } else {

    }
}
?>