<?php
session_start();

if ($_SESSION["chk"] == "") {
    header("Location:../index.php");
}
$username = $_SESSION['Fname'];
$Lname = $_SESSION['Lname'];
$email = $_SESSION['email'];
$today = date("ym-His");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
        integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
        crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
        integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
</head>

<body>
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="index.php">รายการแจ้งซ่อม</a>
                        <a class="nav-link" href="repair_user.php">ติดตามการแจ้งซ้อม</a>
                    </div>
                </div>    
                <span>
                     <?php echo trim($username, '""');
                            echo ("\n");
                            echo trim($Lname, '""'); ?>
                </span>
                <span ><a class="nav-link-Lg" href="../Admin/View/logout.php"><i
                        class="fa-sharp fa-solid fa-right-from-bracket"></i>Logout</a></span>
            </div>
        </nav>
       
        <div class="container p-3  mt-5">
            <hr>
            <h3>รายการแจ้งซ่อม</h3>
            <hr>
            <div class="row">
                <div class="form-group col-md-12">
                <label for="receipt_number">รหัสแจ้งซ้อม</label>
                <input type="text" class="form-control" value="<?php echo $today ?>" id="receipt_number"
                    name="receipt_number" placeholder="รหัสแจ้งซ้อม" readonly>
            </div><br>
            </div>
            
            <div class="row">
            <div class="form-group col-md-6">
                <label for="prefix">Name prefix:</label>
                <select name="prefix" id="prefix" class="custom-select form-control" required>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Mr">Mr.</option>
                </select>
            </div><br>
            <div class="form-group col-md-6">
                <label for="Fname">ชื่อ:</label>
                <input type="text" value="<?php echo trim($username, '""'); ?>" readonly class="form-control" id="Fname" name="Fname" placeholder="ชื่อ">
                <small id="Fcheck" style="color: red;">**Username is missing</small>
            </div><br>
            </div>
           
            <div class="row">
                    <div class="form-group col-md-6">
                    <label for="Lname">นามสกุล:</label>
                    <input type="text" class="form-control" value="<?php echo trim($Lname, '""'); ?>" readonly  id="Lname" name="Lname" placeholder="นามสกุล">
                    <small id="Lcheck" style="color: red;">**Lname is missing</small>
                </div><br>
                <div class="form-group col-md-6">
                    <label for="p_number">เบอร์โทร:</label>
                    <input type="text" maxlength="10" size="10" onkeyup="this.value=this.value.replace(/[^0-9+() -.]/g,'')"
                        class="form-control" id="p_number" name="p_number" placeholder="เบอร์โทร">
                    <small id="p_numbercheck" style="color: red;">**Phone is missing</small>
                </div><br>
            </div>
           <div class="row">
                <div class="form-group col-md-6">
                <label for="email">Email:</label>
                <input type="email" value="<?php echo trim($email, '""'); ?>" readonly  class="form-control" id="email" name="email" placeholder="Email">
                <small id="emailvalid" class="form-texttext-muted invalid-feedback">Your
                    email must be a valid email</small>
            </div><br>
            <div class="form-group col-md-6">
                <label for="D_name">ชื่ออุปกรณ์:</label>
                <input type="text" class="form-control" id="D_name" name="D_name" placeholder="ชื่ออุปกรณ์">
                <small id="D_namecheck" style="color: red;">Your
                    Device_name is missing</small>
            </div><br>
           </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label for="cause">รายละเอียด: </label><br>
                <textarea name="cause" id="cause" cols="62" rows="10" required></textarea>
                <small id="causecheck" style="color: red;">Your
                    cause is missing</small>
            </div> <br>
            <div class="col-6">
                <div class="form-group">
                    <label for="status">สถานะ</label>
                    <input type="text" class="form-control" id="status" value="รอดำเนินการ" name="status" readonly>
                </div>
            </div>
        </div>
            
            <button type="submit" class="btn btn-primary" name="insert" onclick="addrepair()">แจ้งซ่อม</button>
        </div>
    </div>

    <!--   Core JS Files   -->

    <script src="script.js"></script>
    <script src="../Admin/view/js/script_singup.js"></script>

</body>

</html>