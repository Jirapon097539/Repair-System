exec_getall()

async function exec_getall() {
    Url = "http://localhost/Assignment/Admin/controller/rest_repair.php";
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
        document.getElementById("showdetail").innerHTML = member + "</div>";

        // console.log(result);

        // return data;
    } catch (error) {
        console.log("Error" + error);
    }
}
async function Editdata(id) {
 
    const postData = {
        id: document.getElementById("id").value,
        status: document.getElementById("status").value,
        end_date: document.getElementById("end_date").value,
        Edit_case: document.getElementById("edit").value

    }
    Url = "http://localhost/Assignment/Admin/controller/rest_repair.php?id=" + id;

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
        // document.getElementById("viewEdit").innerHTML = "<div>" + data + "</div>";
       
        // console.log(postData);
        exec_getall();
        // return data;
    } catch (error) {
        console.log("Error" + error);
        // return 0;
    }
}


function build_table() {

    var text = "";
    var header = "<div class=\"tab-pane fade\" id=\"orders-pending\" role=\"tabpanel\" aria-labelledby=\"orders-pending-tab\">" +
        "<div class=\"app-card app-card-orders-table mb-5\">" +
        "<div class=\"app-card-body\">" +
        "<div class=\"table-responsive\">" +
        "<table class=\"table mb-0 text-left\">" +
        "<thead>" +
        "<tr class='thead-light'>" +
        "<th>ลำดับที่</th>" +
        " <th class=\"cell\">รหัสแจ้งซ่อม</th>" +
        " <th class=\"cell\">ชื่ออุปกรณ์</th>" +
        " <th class=\"cell\">สาเหตุ</th>" +
        " <th class=\"cell\">ผู้แจ้งซ่อม</th>" +
        " <th class=\"cell\">เบอร์โทร</th>" +
        " <th class=\"cell\">สถานะ</th>" +
        " <th class=\"cell\">วันที่บันทึกข้อมูล</th>" +
        "<th class=\"cell\"></th>" +
        "</tr>" +
        "</thead>";
    const convertedValue = JSON.stringify(member_data);
    items = JSON.parse(convertedValue);
    // var variable = "";
    for (var i = 0; i < items.length; i++) {
        text += "<tbody>";
        text += "<tr>";
        text += "<td class=\"cell\">" + (i) + "</td>";
        text += "<td class=\"cell\">" + items[i].receipt_number + "</td>";
        text += "<td class=\"cell\">" + items[i].Device_name + "</td>";
        text += "<td class=\"cell\">" + items[i].cause + "</td>";
        text += "<td class=\"cell\">" + items[i].Fname + " " + items[i].Lname + "</td>";
        text += "<td class=\"cell\">" + items[i].Phone_number + "</td>";
        if (items[i].status == 'รอดำเนินการ') {
            text += "<td class=\"cell\"><span class=\"badge bg-warning\">" + items[i].status + "</span></td>";
        } else if (items[i].status == 'สำเร็จ') {
            text += "<td class=\"cell\"><span class=\"badge bg-success\">" + items[i].status + "</span></td>";
        } else if (items[i].status == 'ยกเลิก') {
            text += "<td class=\"cell\"><span class=\"badge bg-danger\">" + items[i].status + "</span></td>";
        }
        text += "<td class=\"cell\">" + items[i].create_date + "</td>";
        text += "<td class=\"cell\" ><button class='btn app-btn-primary theme-btn mx-auto' onclick = 'build_input(" + items[i].id + ")' id='btn_view'>View</button></td>"
        text += "</tr>";
        text += "</tbody>";
    }
    text = "<table id='myTable'   class='table table-bordered  table-hover table-responsive-sm'>" + header + text + "</table>";
    return text;

}
function build_input(id) {
    const date = new Date();
    const convertedValue = JSON.stringify(member_data);
    items = JSON.parse(convertedValue);
    var variable = "";
    for (var i = 0; i < items.length; i++) {

        if (id == items[i].id) {
            variable = "<div class=\"col-12 col-lg-12\" id=\"addmember\">"
            variable += "<div class=\"app-card app-card-chart h-100 shadow-sm\">"
            variable += "<div class=\"app-card-header p-3\">"
            variable += "<div class=\"row justify-content-between align-items-center\">"
            variable += "<div class=\"col-auto\">"
            variable += "<h4 class=\"app-card-title\">ข้อมูลแจ้งซ่อม</h4>"
            variable += "</div>"
            variable += "</div>"
            variable += "</div>"
            variable += "<div class=\"app-card-body p-3 p-lg-4\">"
            variable += "<div class=\"mb-3 d-flex\" id=\"repair\">"
            variable += "<input type=\"hidden\" id=\"id\" placeholder=\"Enter id\" value='" + items[i].id + "' readonly name=\"id\">"
            variable += "<div class=\"row\">"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small> <label class=\"\" for=\"receipt_number\">receipt number</label></small><br>"
            variable += "<input type=\"text\" class=\"form-control\" value='" + items[i].receipt_number + "' readonly id=\"receipt_number\" name=\"receipt_number\">"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small> <label class=\"\" for=\"signup-email\">Your Email</label></small><br>"
            variable += "<input type=\"email\" id=\"email\" value='" + items[i].email + "' readonly name=\"email\"class=\"form-control signup-email\" required=\"required\">"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label for=\"prefix\">prefix:</label></small><br>"
            variable += "<input name=\"prefix\" value='" + items[i].prefix + "' id=\"prefix\" readonly class=\"form-control\">"
            variable += "</div>"
            variable += "   </div>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label class=\"\" for=\"signup-name\">Fname</label></small><br>"
            variable += "<input type=\"text\" value='" + items[i].Fname + "' id=\"Fname\" name=\"Fname\" readonly class=\"form-control signup-name\">"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label class=\"\">Lname</label></small><br>"
            variable += "<input type=\"text\" value='" + items[i].Lname + "' id=\"Lname\" name=\"Lname\" readonly class=\"form-control signup-name\">"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += '<small><label for="status">เลือกเปลี่ยนสถานะ</label></small><br>'
            if (items[i].status == "รอดำเนินการ") {
                variable += '<select name="status" id="status" class="form-control" required>'
                variable += '<option value=' + items[i].status + '>' + items[i].status + '</option>'
                variable += '<option value="ยกเลิก">ยกเลิก</option>'
                variable += '<option value="สำเร็จ">สำเร็จ</option>'
                variable += '</select>'
            } else if (items[i].status == "สำเร็จ") {
                variable += '<select name="status" id="status" class="form-control" required>'
                variable += '<option value=' + items[i].status + '>' + items[i].status + '</option>'
                variable += '<option value="ยกเลิก">ยกเลิก</option>'
                variable += '</select>'
            } else if (items[i].status == "ยกเลิก") {
                variable += '<select name="status" id="status" class="form-control" disabled>'
                variable += '<option value=' + items[i].status + '>' + items[i].status + '</option>'
                variable += '<option value="ยกเลิก">ยกเลิก</option>'
                variable += '<option value="สำเร็จ">สำเร็จ</option>'
                variable += '</select>'
            }
            variable += "</div>"
            variable += "</div>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small> <label for=\"p_number\">Phone Number:</label></small><br>"
            variable += "<input type=\"text\" readonly value='" + items[i].Phone_number + "' class=\"form-control\"  id=\"p_number\"  name=\"p_number\">"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small> <label for=\"create_date\">create_date</label></small><br>"
            variable += "<input type=\"text\" readonly value='" + items[i].create_date + "' class=\"form-control\" id=\"create_date\" name=\"create_date\">"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label class=\"\">Device_name</label></small><br>"
            variable += "<input type=\"text\" readonly value='" + items[i].Device_name + "' class=\"form-control\" id=\"D_name\" name=\"D_name\" required>"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label class=\"\">cause</label></small><br>"
            variable += "<textarea name=\"cause\" readonly value='" + items[i].cause + "' id=\"cause\" cols=\"90\" rows=\"1\" class=\"form-control\">" + items[i].cause + "</textarea>"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label class=\"\">วิธีการแก้ไข</label></small><br>"
            variable += "<textarea name=\"edit\" id=\"edit\" cols=\"90\" rows=\"1\" class=\"form-control\"></textarea>"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-6\">"
            variable += "<div class=\"form-group\">"
            variable += "<small><label class=\"\">วันที่ Update</label></small><br>"
            variable += "<input type=\"text\" readonly value='" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "' class=\"form-control\" id=\"end_date\" name=\"end_date\" required>"
            variable += "</div>"
            variable += "</div><br>"
            variable += "<div class=\"col-2\">"
            variable += "<div class=\"form-group\"><br>"
            variable += "<button class='btn app-btn-primary theme-btn mx-auto' onclick=\"Editdata('" + items[i].id + "')\"id=\"btn\">บันทึก</button>"
            variable += "</div>"
            variable += "</div>"
            variable += "</div>"
            variable += "</div>"
            variable += "</div>"
            variable += "</div>"
            variable += "</div>"
        }
    }
    document.getElementById("showdetail").innerHTML = variable;
}

