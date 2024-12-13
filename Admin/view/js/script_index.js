operation()
function operation(){
    $(document).ready(function () {
        $("#btn-add").click(function () {
            setTimeout(() => {
                window.location.href = 'member.php';
                widow.location.href = url;
            }, 1000);
        });

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
        $("#btn_save").click(function () {
            if (
                $("#email").val() != "" &&
                $("#Fname").val() != "" &&
                $("#Lname").val() != "" &&
                $("#password").val() != "" &&
                $("#pass_chk").val() != ""
            ) {
                exec_ins()
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
        $("#btn_edit").click(function () {
            if (
                $("#email").val() != "" &&
                $("#Fname").val() != "" &&
                $("#Lname").val() != "" &&
                $("#password").val() != "" &&
                $("#pass_chk").val() != ""
            ) {
                exec_edit(id)
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
    
    });
}


exec_getall();
function addmember() {
    setTimeout(() => {
        window.location.href = 'member.php';
        widow.location.href = url;
    }, 1000);
}


async function exec_ins() {
    const postData = {
        email: document.getElementById("email").value,
        Fname: document.getElementById("Fname").value,
        Lname: document.getElementById("Lname").value,
        password: document.getElementById("password").value,
        status: document.getElementById("status").value,

    }
    Url = "http://localhost/Assignment/Admin/controller/rest_member.php";
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
        document.getElementById("div1").innerHTML = "<div>" + data + "</div>";
        console.log(data);
        exec_getall();
    } catch (error) {
        console.log("Error" + error);
    }
}

async function exec_getall() {
    Url = "http://localhost/Assignment/Admin/controller/rest_member.php";

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
        member_data = result.data;
        member = await build_table(member_data);
        document.getElementById("div1").innerHTML = "<div>" + member + "</div>";
        // console.log(result);

        // return data;
    } catch (error) {
        console.log("Error" + error);
    }
}
async function exec_del(id) {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            Url = "http://localhost/Assignment/Admin/controller/rest_member.php?id=" + id;
            try {
                const response = await fetch(Url, {
                    method: "delete",
                    headers: { "Contant-Type": "application/json" }
                })
                if (!response.ok) {
                    const message = "Error with Status Code : " + response.status;
                    throw new Error(message);
                }
                const result = await response.json();
                // debug = result;
                index = member_data.findIndex((member_data) => member_data.id == id);
                member_data.splice(index, 1);
                member = await build_table(member_data);
                document.getElementById("div1").innerHTML = "<div>" + member + "</div>";
            } catch (error) {
                console.log("Error " + error);
            }
        }
    })

}


async function exec_edit(id) {
    // alert(id)
    const postData = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        Fname: document.getElementById("Fname").value,
        Lname: document.getElementById("Lname").value,
        password: document.getElementById("password").value,
        status: document.getElementById("status").value,

    }
    Url = "http://localhost/Assignment/Admin/controller/rest_member.php?id=" + id;

    try {
        const response = await fetch(Url, {
            method: "put",
            headers: { "Contant-Type": "application/text" },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            const message = "Error with Status Code : " + response.status;
            throw new Error(message);
        }
        const data = await response.text();
        document.getElementById("div1").innerHTML = "<div>" + data + "</div>";
        console.log(postData);
        exec_getall();
        // return data;
    } catch (error) {
        console.log("Error" + error);
        // return 0;
    }
}



function build_table(data) {
    var text = "";
    var header = "<tr class='thead-light'>" +
        "<th>ลำดับที่</th>" +
        " <th>ชื่อ</th>" +
        " <th>นามสกุล</th>" +
        " <th>อีเมล</th>" +
        " <th>ต่ำแหน่ง</th>" +
        " <th>วันที่บันทึกข้อมูล</th>" +
        " <th colspas = '2'>operation</th>" +
        "</tr>";
    data.forEach(element => {
        text += "<tbody>";
        text += "<tr>";
        text += "<td>" + element["id"] + "</td>";
        text += "<td>" + element["Fname"] + "</td>";
        text += "<td>" + element["Lname"] + "</td>";
        text += "<td>" + element["email"] + "</td>";
        text += "<td>" + element["status"] + "</td>";
        text += "<td>" + element["create_date"] + "</td>";
        text += "<td style='padding:10px;'>" + "<button  class='btn btn-warning' onclick = 'build_input(" + element["id"] + ")'>edit" + "</button>&nbsp;";
        text += "<button class='btn btn-danger' onclick = 'exec_del(" + element["id"] + ")'>del</button>" + "</td>";

        text += "</tr>";
        text += "</tbody>";
    });
    text = "<table  class='table table-bordered table-hover table-responsive-sm'>" + header + text + "</table>";

    return text;
}
function build_input(id) {
    operation()
    const convertedValue = JSON.stringify(member_data);
    items = JSON.parse(convertedValue);
    var variable = "";
    for (var i = 0; i < items.length; i++) {
        if (id == items[i].id) {
            var variable = '<div class="app-card-body p-3 p-lg-4">'
                 variable+= '  <div class="mb-3 d-flex" id="editmember">' 
                variable+=  '     <input type=\"hidden\"  id=\"id\" placeholder=\"Enter email\"  value="' + items[i].id + '" name=\"id\">'
                variable+=  '      <div class="row">' 
                variable+=  '          <div class="col-6">' 
                variable +=  '              <div class="form-group">' 
                variable +=  '                  <small> <label class="" for="signup-email">Your Email</label></small><br>' 
                variable +=  '                  <input type="email" id="email" name="email"class="form-control signup-email" value="' + items[i].email + '" placeholder="email"required="required">' 
                variable +=  '                  <small id="emailvalid" class="form-texttext-muted invalid-feedback">Your email must be a valid email</small>' 
                variable +=  '              </div>' 
                variable +=  '          </div><br>' 
                variable +=  '          <div class="col-6">' 
                variable +=  '              <div class="form-group">' 
                variable +=  '                  <small><label class="" for="signup-name">Your FName</label></small><br>' 
                variable +=  '                  <input type="text" id="Fname" name="Fname" class="form-control signup-name"placeholder="full" value="' + items[i].Fname + '" name" required="required">' 
                variable +=  '                  <small id="usercheck" style="color: red;">**Username is missing</small>' 
                variable +=  '              </div>' 
                variable +=  '          </div><br>' 
                variable +=  '          <div class="col-6">' 
                variable +=  '              <div class="form-group">' 
                variable +=  '                  <small><label class="">LName</label></small><br>' 
                variable +=  '                  <input type="text" id="Lname" name="Lname" class="form-control signup-name"placeholder="last name"  value="' + items[i].Lname + '" required="required">' 
                variable +=  '                  <small id="Lcheck" style="color: red;">**Username is missing</small>' 
                variable +=  '              </div>' 
                variable +=  '          </div><br>' 
                variable +=  '          <div class="col-6">' 
                variable +=  '              <div class="form-group">' 
                variable +=  '                  <small><label class="" for="status">Position:</label></small><br>' 
                variable +=  '                  <select name=\"status\" id=\"status\"  class="form-control"  required>'
                variable += "                    <option value='" + items[i].status + "' >" + items[i].status + "</option>"
                variable += "                  </select>"
                variable +=  '              </div>' 
                variable +=  '          </div>' 
                variable +=  '          <div class="col-6">' 
                variable +=  '              <div class="form-group">'
                variable +=  '                  <small><label class="">password</label></small><br>'
                variable +=  '                  <input type="password" id="password" name="password"' 
                variable +=  '                      class="form-control signup-password" placeholder="Create a password" value="' + items[i].password + '" required="required">' 
                variable +=  '                  <small id="passcheck" style="color: red;">**Please Fill the password</small>' 
                variable +=  '              </div>' 
                variable +=  '          </div><br>' 
                variable +=  '          <div class="col-3">' 
                variable +=  '              <div class="form-group"><br>' 
                variable +=  '                  <button class="btn app-btn-primary w-100 theme-btn mx-auto" onclick = "exec_edit(' + items[i].id + ')" id="btn_edit">Edit</button>' 
                variable +=  '              </div>' 
                variable +=  '          </div>' 
                variable +=  '      </div>' 
                variable +=  '  </div>' 
        }
    }

    document.getElementById("editmember").innerHTML = "<div>" + variable + "</div>";
}



