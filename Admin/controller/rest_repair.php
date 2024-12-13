<?php
include_once "../model/class.repair.php";
?>

<?php 

$inform = new inform_repair();
if ($_SERVER['REQUEST_METHOD']  == 'PUT') {
	
    $data = file_get_contents("php://input");
    $informdata = json_decode($data, true);
    // convert to json again"receipt_number"=>$receipt_number,
    print_r($informdata);
    if ($inform->updatebyid(
                        //  $informdata['receipt_number'],
                        //  $informdata['prefix'],
                        //  $informdata['Fname'],
                        //  $informdata['Lname'],
                        //  $informdata['Phone_number'],
                        //  $informdata['email'],
                        //  $informdata['Device_name'],
                        //  $informdata['cause'],
                         $informdata['status'],
                        //  $informdata['create_date'],
                         $informdata['end_date'],
                         $informdata['Edit_case'],
                         $informdata['id']
        )){
        echo json_encode([
            "status" => "ok",
            "message" => "Update{$_GET["id"]} Success",
            "data" => $data
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error"]);
    }

}elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
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