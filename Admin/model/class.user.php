<?php
include_once "db.php";
class user  extends db
{
    public function create_user($opt)
    {
        $sql = "INSERT INTO `member`(`email`, `Fname`, `Lname`, `password`, `status`) 
        VALUES (:email,:Fname,:Lname,:password,:status)";
        $stmt = $this->db->prepare($sql);
        $data = [
            ":email" => $opt["email"],
            ":Fname" => $opt["Fname"],
            ":Lname" => $opt["Lname"],
            ":password" => md5($opt["password"]),
            ":status" => $opt["status"]
        ];
        return ($stmt->execute($data) ? 1 : 0);

    }
    public function getuser($email, $pass_word)
    {
        $sql = "SELECT * FROM `member` WHERE email = '$email' and password = '$pass_word'";
        $res = $this->db->query($sql);
        $data = $res->fetch(PDO::FETCH_ASSOC);
        return $data;
    }
    public function getrepair()
    {
        return $this->db->query("SELECT * FROM `member`")->fetchAll(PDO::FETCH_ASSOC);
    }


    public function deletebyid($id)
    {
        $sql = "DELETE FROM member WHERE `id` = ?";
        return ($this->db->prepare($sql)->execute([$id]) ? 1 : 0);
    }

    public function updatebyid($email,$Fname,$Lname,$password,$status,$id)
    {
        $sql = "UPDATE `member` SET
                                `email`=:email,
                                `Fname`=:Fname,
                                `Lname`=:Lname,
                                `password`=:password,
                                `status`=:status
                                WHERE `id` = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute(["email"=> $email,"Fname"=>$Fname,"Lname"=>$Lname,"password"=> $password,"status"=>$status,"id"=>$id]);
        return true;
    }
}
?>