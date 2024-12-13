<?php
session_start();

if ($_SESSION["chk"] == "") {
    header("Location:../../index.php");
}

?>
<?php
include_once "../Admin/model/db.php";

class inform_repair extends db{
    public function create_repair($opt)
    {
        $sql = "INSERT INTO `repair`(`receipt_number`, `prefix`, `Fname`, `Lname`, `Phone_number`, `email`, `Device_name`, `cause`, `status`)
         VALUES (:receipt_number,:prefix,:Fname,:Lname,:Phone_number,:email,:Device_name,:cause,:status)";
        $stmt = $this->db->prepare($sql);
        $data = [
            ":receipt_number" => $opt["receipt_number"],
            ":prefix" => $opt["prefix"],
            ":Fname" => $opt["Fname"],
            ":Lname" => $opt["Lname"],
            ":Phone_number" => $opt["p_number"],
            ":email" => $opt["email"],
            ":Device_name" => $opt["D_name"],
            ":cause" => $opt["cause"],
            ":status" => $opt["status"]
        ];
        return ($stmt->execute($data) ? 1 : 0);

    }
    public function getALL()
    {
        return $this->db->query("SELECT * FROM `repair`")->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>