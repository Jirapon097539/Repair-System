<?php
include_once "class.member.php";
?>
<?php

$inform = new inform_repair();
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = file_get_contents("php://input");
    $informdata = json_decode($data, true);
    // print_r($informdata);
    // convert to json again
    if ($inform->create_repair($informdata)) {
        echo json_encode([
            "status" => "ok",
            "message" => "insert {$informdata["receipt_number"]} success",
            "data" => $data
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error"]);
    }


}else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (!isset($_GET["receipt_number"])) {
        //showall
        $data = $inform->getALL();
        //echo count($data); //return จำนวนข้อมูล
        if (count($data)) {
            echo json_encode(["status" => "ok", "data" => $data]);
        } else {
            echo json_encode(["status" => "error", "message" => "N/A"]);
        }

    } else {

    }
}
?>