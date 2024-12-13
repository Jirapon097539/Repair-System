<?php
session_start();

if ($_SESSION["chk"] == "") {
    header("Location:../index.php");
}
$username = $_SESSION['Fname'];
$Lname = $_SESSION['Lname'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Portal</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portal - Bootstrap 5 Admin Dashboard Template For Developers">
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media">
    <link rel="shortcut icon" href="favicon.ico">
    <!-- FontAwesome JS-->
    <script defer src="../../assets/plugins/fontawesome/js/all.min.js"></script>
    <script src="../../assets/jquery/jquery.js"></script>
    <!-- App CSS -->
    <link id="theme-style" rel="stylesheet" href="../../assets/css/portal.css">

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body class="app">
    <header class="app-header fixed-top">
        <div class="app-header-inner">
            <div class="container-fluid py-2">
                <div class="app-header-content">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                            <a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                    role="img">
                                    <title>Menu</title>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                        stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                                </svg>
                            </a>
                        </div><!--//col-->
                        <div class="app-utilities col-auto">
                            <div class="app-utility-item app-user-dropdown dropdown">
                                <a class="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                    role="button" aria-expanded="false"><i class="fa fa-user-circle"
                                        style="font-size:24px"></i> <span id="showuser">
                                        <?php echo trim($username, '""');
                                        echo ("\n");
                                        echo trim($Lname, '""'); ?>
                                    </span> </a>
                                <ul class="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                    </li>
                                    <li><a class="dropdown-item" href="logout.php">Log Out</a></li>
                                </ul>
                            </div><!--//app-user-dropdown-->
                        </div><!--//app-utilities-->
                    </div><!--//row-->
                </div><!--//app-header-content-->
            </div><!--//container-fluid-->
        </div><!--//app-header-inner-->
        <div id="app-sidepanel" class="app-sidepanel">
            <div id="sidepanel-drop" class="sidepanel-drop"></div>
            <div class="sidepanel-inner d-flex flex-column">
                <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
                <div class="app-branding">
                    <a class="app-logo" href="../index.php"><img class="logo-icon me-2"
                            src="../../assets/images/app-logo.svg" alt="logo"><span class="logo-text">PORTAL</span></a>
                </div><!--//app-branding-->
                <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
                    <ul class="app-menu list-unstyled accordion" id="menu-accordion">
                        <li class="nav-item">
                            <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                            <a class="nav-link active" href="../index.php">
                                <span class="nav-icon">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                                        <path fill-rule="evenodd"
                                            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </span>
                                <span class="nav-link-text">หน้าหลัก</span>
                            </a><!--//nav-link-->
                        </li><!--//nav-item-->
                        <li class="nav-item">
                            <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                            <a class="nav-link" href="../view/member.php">
                                <span class="nav-icon">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path fill-rule="evenodd"
                                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                                        <circle cx="3.5" cy="5.5" r=".5" />
                                        <circle cx="3.5" cy="8" r=".5" />
                                        <circle cx="3.5" cy="10.5" r=".5" />
                                    </svg>
                                </span>
                                <span class="nav-link-text">จัดการสมาชิก</span>
                            </a><!--//nav-link-->
                        </li><!--//nav-item-->

                        <li class="nav-item">
                            <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                            <a class="nav-link" href="../view/orders.php">
                                <span class="nav-icon">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path fill-rule="evenodd"
                                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                                        <circle cx="3.5" cy="5.5" r=".5" />
                                        <circle cx="3.5" cy="8" r=".5" />
                                        <circle cx="3.5" cy="10.5" r=".5" />
                                    </svg>
                                </span>
                                <span class="nav-link-text">ข้อมูลแจ้งซ่อม</span>
                            </a><!--//nav-link-->
                        </li><!--//nav-item-->
                    </ul><!--//app-menu-->
                </nav><!--//app-nav-->
            </div><!--//sidepanel-inner-->
        </div><!--//app-sidepanel-->
    </header><!--//app-header-->
    <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
            <div class="container-xl">
                <h1 class="app-page-title">สมาชิก </h1>

                <div class="col-12 col-lg-12" id="addmember">
                    <div class="app-card app-card-chart h-100 shadow-sm">
                        <div class="app-card-header p-3">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-auto">
                                    <h4 class="app-card-title">เพิ่มสมาชิก</h4>
                                </div><!--//col-->
                            </div><!--//row-->
                        </div><!--//app-card-header-->
                        <div class="app-card-body p-3 p-lg-4">
                            <div class="mb-3 d-flex" id="editmember">
                                <input type="hidden" id="id" placeholder="Enter email" name="id">

                                <div class="row">
                                    <div class="col-6">

                                        <div class="form-group">
                                            <small> <label class="" for="signup-email">Your Email</label></small><br>
                                            <input type="email" id="email" name="email"
                                                class="form-control signup-email" placeholder="email"
                                                required="required">
                                            <small id="emailvalid" class="form-texttext-muted invalid-feedback">Your
                                                email must be a valid email</small>
                                        </div>
                                    </div><br>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <small><label class="" for="signup-name">Your FName</label></small><br>
                                            <input type="text" id="Fname" name="Fname" class="form-control signup-name"
                                                placeholder="full name" required="required">
                                            <small id="usercheck" style="color: red;">**Username is missing</small>
                                        </div>
                                    </div><br>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <small><label class="">LName</label></small><br>
                                            <input type="text" id="Lname" name="Lname" class="form-control signup-name"
                                                placeholder="last name" required="required">
                                            <small id="Lcheck" style="color: red;">**Username is missing</small>
                                        </div>
                                    </div><br>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <small><label class="" for="status">Position:</label></small><br>
                                            <select name="status" id="status"
                                                class="form-control"
                                                required>
                                                <option value="member">สมาชิก</option>
                                                <option value="technician">ช่าง</option>
                                                <option value="Admin">แอดมิน</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <small><label class="">password</label></small><br>
                                            <input type="password" id="password" name="password"
                                                class="form-control signup-password" placeholder="Create a password"
                                                required="required">
                                            <small id="passcheck" style="color: red;">**Please Fill the password</small>
                                        </div>
                                    </div><br>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <small> <label class="">Password_check</label></small><br>
                                            <input type="password" id="pass_chk" name="pass_chk"
                                                class="form-control signup-password" placeholder="check a password"
                                                required="required">
                                            <small id="conpasscheck" style="color: red;">**Password didn't match</small>
                                        </div>
                                    </div><br>

                                    <div class="col-3">
                                        <div class="form-group"><br>
                                            <button class="btn app-btn-primary w-100 theme-btn mx-auto"
                                                id="btn_save">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><!--//app-card-body-->
                    </div><!--//app-card-->
                </div><!--//col-->
                <!-- <br> -->
                <hr>
                <div class="col-12 col-lg-12">
                    <div class="app-card app-card-chart h-100 shadow-sm">
                        <div class="app-card-header p-3">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-auto">
                                    <h4 class="app-card-title">รายละเอียดสมาชิก</h4>
                                </div><!--//col-->
                                <div class="col-auto">
                                    <div class="card-header-action">
                                        <button class="btn btn-primary" style="color:white;"
                                            id="btn-add">+เพิ่มสมาชิก</button>
                                    </div><!--//card-header-actions-->
                                </div><!--//col-->
                            </div><!--//row-->
                        </div><!--//app-card-header-->
                        <div class="app-card-body p-3 p-lg-4">
                            <div class="mb-3 d-flex">
                                <input type="text" class="form-control  ms-auto d-inline-flex w-auto"
                                    value="<?php echo "ล่าสุด : " . date("d/m/Y") ?>" readonly>

                            </div>
                            <div id="div1"></div>
                        </div><!--//app-card-body-->
                    </div><!--//app-card-->
                </div><!--//col-->
            </div><!--//row-->
        </div><!--//app-wrapper-->
        <script src="../view/js/script_index.js"></script>
        <!-- Javascript -->
        <script src="../../assets/plugins/popper.min.js"></script>
        <script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <!-- Charts JS -->
        <script src="../../assets/plugins/chart.js/chart.min.js"></script>
        <!-- Page Specific JS -->
        <script src="../../assets/js/app.js"></script>
</body>

</html>