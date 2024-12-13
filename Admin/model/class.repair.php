<?php
session_start();

if ($_SESSION["chk"] == "") {
    header("Location:../index.php");
}

?>
<?php
include_once "db.php";

class inform_repair extends db{

    public function getALL()
    {
        return $this->db->query("SELECT * FROM `repair`")->fetchAll(PDO::FETCH_ASSOC);
    }
    public function updatebyid($status,$end_date,$Edit_case,$id){
        $sql = "UPDATE `repair` SET
                                -- `receipt_number`=:receipt_number,
                                -- `prefix`=:prefix,
                                -- `Fname`=:Fname,
                                -- `Lname`=:Lname,
                                -- `Phone_number`=:Phone_number,
                                -- `email`=:email,
                                -- `Device_name`=:Device_name,
                                -- `cause`=:cause,
                                `status`=:status,
                                -- `create_date`=:create_date,
                                `end_date`=:end_date,
                                `Edit_case`=:Edit_case
                                WHERE `id` = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute(["status"=>$status,"end_date"=>$end_date,"Edit_case"=>$Edit_case,"id"=>$id ]);
        return true;
    }
}
?>