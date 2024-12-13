<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title> Developers</title>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="description" content="Portal - Bootstrap 5 Admin Dashboard Template For Developers">
	<meta name="author" content="Xiaoying Riley at 3rd Wave Media">
	<link rel="shortcut icon" href="favicon.ico">

	<!-- FontAwesome JS-->
	<script defer src="assets/plugins/fontawesome/js/all.min.js"></script>
	<script src="assets/jquery/jquery.js"></script>
	<!-- App CSS -->
	<link id="theme-style" rel="stylesheet" href="assets/css/portal.css">

</head>

<body class="app app-login p-0">
	<div class="row g-0 app-auth-wrapper">
		<div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
			<div class="d-flex flex-column align-content-end">
				<div class="app-auth-body mx-auto">
				<h2 class="auth-heading text-center mb-5">เข้าสู่ระบบ</h2>
					<div class="auth-form-container text-start">
						<!-- <form class="auth-form login-form">          -->
						<div class="email mb-3">
							<label class="sr-only" for="signup-email">Your Email</label>
							<input type="email" id="email" name="email" class="form-control signup-email"
								placeholder="email" required="required">
							<small id="emailvalid" class="form-texttext-muted invalid-feedback">Your email must be a
								valid email</small>
						</div>
						<div class="password mb-3">
							<label class="sr-only">password</label>
							<input type="password" id="password" name="password" class="form-control signup-password"
								placeholder="Create a password" required="required">
							<small id="passcheck" style="color: red;">**Please Fill the password</small>
						</div>
						<div class="text-center">
							<button type="submit" id="login" class="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
						</div>
						</form>

						<div class="auth-option text-center pt-5">No Account? Sign up <a class="text-link"
								href="Admin/view/signup.php">here</a>.</div>
						<!-- </div> -->
						<!--//auth-form-container-->

					</div><!--//auth-body-->

					<footer class="app-auth-footer">
					</footer><!--//app-auth-footer-->
				</div><!--//flex-column-->
			</div><!--//flex-column-->
		</div><!--//auth-main-col-->
		<div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
			<div class="auth-background-holder">
			</div>
			<div class="auth-background-mask"></div>
			<div class="auth-background-overlay p-3 p-lg-5">
				<div class="d-flex flex-column align-content-end h-100">
					<div class="h-100"></div>
				</div>
			</div><!--//auth-background-overlay-->
		</div><!--//auth-background-col-->
	</div><!--//row-->
</body>

</html>
<script src="Admin/view/js/script_singup.js"></script>