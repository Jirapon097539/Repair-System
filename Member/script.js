exec_getall()
$(document).ready(function () {
    // Validate Username
    $("#Fcheck").hide();
    let usernameError = true;
    $("#Fname").keyup(function () {
        validateUsername();
    });
    $("#Lcheck").hide();
    let LnameError = true;
    $("#Lname").keyup(function () {
        validateLname();
    });
    $("#p_numbercheck").hide();
    let p_numberError = true;
    $("#p_number").keyup(function () {
        validatep_number();
    });
    $("#D_namecheck").hide();
    let D_namecheckError = true;
    $("#D_name").keyup(function () {
        validateD_namechecke();
    });
    $("#causecheck").hide();
    let causecheckError = true;
    $("#cause").keyup(function () {
        validatecausecheck();
    });

    function validateUsername() {
        let usernameValue = $("#Fname").val();
        if (usernameValue.length == "") {
            $("#Fcheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#Fcheck").show();
            $("#Fcheck").html("**length  must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#Fcheck").hide();
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
            $("#Lcheck").html("**length  must be between 3 and 10");
            LnameError = false;
            return false;
        } else {
            $("#Lcheck").hide();
        }
    }
    function validatep_number() {
        let p_numberValue = $("#p_number").val();
        if (p_numberValue.length == "") {
            $("#p_numbercheck").show();
            p_numberError = false;
            return false;
        } else if ( p_numberValue.length < 10) {
            $("#p_numbercheck").show();
            $("#p_numbercheck").html("**length  must be  10");
            usernameError = false;
            return false;
        } else {
            $("#p_numbercheck").hide();
        }
    }
    function validateD_namechecke() {
        let D_Value = $("#D_name").val();
        if (D_Value.length == "") {
            $("#D_namecheck").show();
            D_namecheckError = false;
            return false;
        } else if (D_Value.length < 3 || D_Value.length > 10) {
            $("#D_namecheck").show();
            $("#D_namecheck").html("**length of  must be between 3 and 10");
            D_namecheckError = false;
            return false;
        } else {
            $("#D_namecheck").hide();
        }
    }
    function validatecausecheck() {
        let C_value = $("#cause").val();
        if (C_value.length == "") {
            $("#causecheck").show();
            causecheckError = false;
            return false;
        } else if (C_value.length < 3 || C_value.length > 10) {
            $("#causecheck").show();
            $("#causecheck").html("**length of  must be between 3 and 10");
            causecheckError = false;
            return false;
        } else {
            $("#causecheck").hide();
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




});



async function addrepair() {
    const postData = {
        receipt_number: document.getElementById("receipt_number").value,
        prefix: document.getElementById("prefix").value,
        Fname: document.getElementById("Fname").value,
        Lname: document.getElementById("Lname").value,
        p_number: document.getElementById("p_number").value,
        email: document.getElementById("email").value,
        D_name: document.getElementById("D_name").value,
        cause: document.getElementById("cause").value,
        status: document.getElementById("status").value,
    }
    Url = "http://localhost/Assignment/Member/rest_member.php";
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
        // document.getElementById("showstatus").innerHTML = "<div style='color:green'> บันทึกการแจ้งซ่อม " +document.getElementById("receipt_number").value  + " สำเร็จ</div>";
        // clear()
        exec_getall() 
        setTimeout(() => {
            window.location.href = 'repair_user.php';
            widow.location.href = url;
        }, 3000);
        console.log(data);
    } catch (error) {
        console.log("Error" + error);
    }

}

async function exec_getall() {
    Url = "http://localhost/Assignment/Member/rest_member.php";
 
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
        document.getElementById("showdetail").innerHTML = "<div>" + member + "</div>";
        console.log(result);


    } catch (error) {
        console.log("Error" + error);
    }
}

function build_table() {
    var text = "";
    var header = "<tr class='thead-light'>" +
        "<th>ลำดับที่</th>" +
        " <th>รหัสแจ้งซ่อม</th>" +
        " <th>ชื่ออุปกรณ์</th>" +
        " <th>สาเหตุ</th>" +
        " <th>ผู้แจ้งซ่อม</th>" +
        " <th>เบอร์โทร</th>" +
        " <th>สถานะ</th>" +
        " <th>วันที่บันทึกข้อมูล</th>" +
        " <th>วิธีซ่อม</th>" +
        " <th>วันที่ซ่อมสำเร็จ</th>" +
        "</tr>";
        const convertedValue = JSON.stringify(member_data);
        items = JSON.parse(convertedValue);
        for (var i = 0; i < items.length; i++) {
                text += "<tbody>";
                text += "<tr>";
                text += "<td>" + ( i+1) + "</td>";
                text += "<td>" +  items[i].receipt_number + "</td>";
                text += "<td>" +  items[i].Device_name + "</td>";
                text += "<td>" +  items[i].cause + "</td>";
                text += "<td>" +  items[i].Fname+" "+items[i].Lname + "</td>";
                text += "<td>" +  items[i].Phone_number + "</td>";
                if(items[i].status == "รอดำเนินการ"){
                    text += "<td><div class=\"badge bg-warning\"> " +  items[i].status + "</div></td>";
                }else if(items[i].status == "สำเร็จ"){
                    text += "<td><div class=\"badge bg-success\"> " +  items[i].status + "</div></td>";
                }else if(items[i].status == "ยกเลิก"){
                    text += "<td><div class=\"badge bg-danger\"> " +  items[i].status + "</div></td>";
                }
              
                text += "<td>" +  items[i].create_date + "</td>";
                text += "<td>" +  items[i].Edit_case + "</td>";
                text += "<td>" +  items[i].end_date + "</td>";
               
                text += "</tr>";
                text += "</tbody>";
            
        }
    text = "<table  class='table table-bordered table-hover table-responsive-sm'>" + header + text + "</table>";

    return text;
}