$(document).ready(function () {

    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#Fname").keyup(function () {
        validateUsername();
    });
    $("#Lcheck").hide();
    let LnameError = true;
    $("#Lname").keyup(function () {
        validateLname();
    });

    function validateUsername() {
        let usernameValue = $("#Fname").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
        }
    }
    function validateLname() {
        let LnameValue = $("#Lname").val();
        if (LnameValue.length == "") {
            $("#Lcheck").show();
            LnameError = false;
            return false;
        } else if (LnameValue.length < 3 || LnameValue.length > 10) {
            $("#Lcheck").show();
            $("#Lcheck").html("**length of username must be between 3 and 10");
            LnameError = false;
            return false;
        } else {
            $("#Lcheck").hide();
        }
    }
    // Validate Email
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        } else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    });

    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "**length of your password must be between 3 and 10"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
        }
    }

    // Validate Confirm Password
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#pass_chk").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#pass_chk").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Password didn't Match");
            $("#conpasscheck").css("color", "red");
            $("#btn_submit").prop("disabled", true)
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
            $("#btn_submit").prop("disabled", false)
        }
    }

    // Submit button
    $("#btn_submit").click(function () {
        if (
            $("#email").val() != "" &&
            $("#Fname").val() != "" &&
            $("#Lname").val() != "" &&
            $("#password").val() != "" &&
            $("#pass_chk").val() != ""
        ) {
            signup();
        } else {
            alert("กรุณากรอกข้อมูล")
        }
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        // validateEmail();
        validateLname()
        if (
            usernameError == true &&
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true &&
            LnameError == true
        ) {
            return true;
        } else {

            return false;

        }
    });
    $("#login").click(function () {
        if ($("#email").val() != "" && $("#password").val() != "") {
            login();
        } else {
            alert("กรุณากรอกข้อมูล")
        }
        validatePassword();
        if (
            passwordError == true &&
            emailError == true
        ) {
            return true;
        } else {
            return false;
        }
    });
});


async function signup() {
    const postData = {
        email: document.getElementById("email").value,
        Fname: document.getElementById("Fname").value,
        Lname: document.getElementById("Lname").value,
        password: document.getElementById("password").value,
        status: document.getElementById("status").value,

    }
    Url = "http://localhost/Assignment/Admin/controller/rest_singup.php";
    try {
        const response = await fetch(Url, {
            method: "post",
            headers: { "Contant-Type": "application/text" },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            const message = "Error with Status Code : " + response.status;
            throw new Error(message);
        }
        const data = await response.text();
        alert("บันทึกข้อมูลสำเร็จ");
        setTimeout(() => {
            window.location.href = '../../index.php';
            widow.location.href = url;
        }, 1000);
        // document.getElementById("div1").innerHTML = "<div>" + data + "</div>";
        // console.log(data);
        // exec_getall();
    } catch (error) {
        console.log("Error" + error);
        alert("บันทึกข้อมูลไม่สำเร็จ");
    }
}


async function login() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    Url = "http://localhost/Assignment/Admin/controller/rest_singup.php?email=" + email + "&password=" + password;

    try {
        const response = await fetch(Url, {
            method: "get",
            headers: { "Contant-Type": "application/json" }
        });
        if (!response.ok) {
            const message = "Error with Status Code : " + response.status;
            throw new Error(message);
        }
        const result = await response.json();
        var data = JSON.stringify(result);
        var item = JSON.parse(data);
        if (item.data == false) {
            alert("ไม่พบผู้ใช้งาน");
        } else {
            if (item.data.status == 'Admin') {
                alert("welcome " + item.data.Fname + " " + item.data.status);
                console.log(item.data.email);
                setTimeout(() => {
                    window.location.href = 'Admin/index.php';
                    widow.location.href = url;
                   
                }, 1000);
            }else{
                alert("welcome " + item.data.Fname + " " + item.data.status);
                console.log(item.data.email);
                setTimeout(() => {
                    window.location.href = 'Member/index.php';
                    widow.location.href = url;
                   
                }, 1000);
            }

        }

        console.log(result);
    } catch (error) {
        console.log("Error" + error);
    }
}