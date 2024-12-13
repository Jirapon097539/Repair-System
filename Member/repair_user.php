<?php
session_start();

if ($_SESSION["chk"] == "") {
    header("Location:../index.php");
}
$username = $_SESSION['Fname'];
$Lname = $_SESSION['Lname'];
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
    <div class="container-fluid p-3 ">
   
        <div class="container p-3  mt-5" id='showdetail'>        </div>
    </div>

    <!--   Core JS Files   -->

    <script src="script.js"></script>
    <script src="../Admin/view/js/script_singup.js"></script>

</body>

</html>