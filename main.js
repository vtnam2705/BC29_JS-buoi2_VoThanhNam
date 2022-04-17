// Bài tập 1
/*
    - Input: 
        + Lương 1 ngày 100.000
    - Xử lý: 
        + Nhập số ngày làm 
        + Lương nhân viên = lương 1 ngày * số ngày làm 
    - Output: Tiền lương nhân viên
*/

document.getElementById("btn-result").onclick = function () {
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var soNgay = document.getElementById("txtNgayLam").value;
    var luongNgay = document.getElementById("selectLuong").value;
    var tienLuong = soNgay * luongNgay;
    var result = document.getElementById("result").innerHTML = `Tiền lương nhân viên nhận được trong ${soNgay} ngày : ${currentFormat.format(tienLuong)} VND`;

    document.getElementById("result").classList.add("alert-success");
}


// ------------------------------------------------------------------------------
// Bài tập 2
/*
    - Input: 
        + Nhập 5 số thực (a, b, c, d, e)
    - Xử lý:  
        + Tính trung bình của 5 số = (a + b + c + d + e) / 5 
    - Output: giá trị trung bình
*/

document.getElementById("btn-ketqua").onclick = function() {
    var so1 = parseInt(document.getElementById("so1").value);
    var so2 = parseInt(document.getElementById("so2").value);
    var so3 = parseInt(document.getElementById("so3").value);
    var so4 = parseInt(document.getElementById("so4").value);
    var so5 = parseInt(document.getElementById("so5").value);

    var trungBinh = parseFloat((so1 + so2 + so3 + so4 + so5) / 5);

    var inResult = document.getElementById("printKetqua").innerHTML = 
    `Trung bình cộng của 5 số: ${trungBinh}`;

    document.getElementById("btn-ketqua").classList.add("alert-success");
}
// -------------------------------------------------------------------------------
// Bài tập 3
/*
    - Input: 
        + Giá USD : 23.500 vnd
        + Nhập số tiền USD
    - Xử lý:  
        + Quy đổi USD sang VNĐ = giá USD * 23.500 
    - Output: Giá quy đổi USD sang VNĐ
*/

document.getElementById("btn-console").onclick = function () {
    var curentFormat = new Intl.NumberFormat("vn-VN");
    var selectUSD = document.getElementById("selectVND").value;
    var luongUSD = document.getElementById("luongUSD").value;
    var quyDoi = selectUSD * luongUSD;

    var ketQua = document.getElementById("printConsole").innerHTML
        = `Gía quy đổi ${luongUSD} USD sang VND: ${curentFormat.format(quyDoi)} VND`;

    document.getElementById("printConsole").classList.add("alert-success");
}


// Bài tập 4
/*
    -Input: 
        + Nhập chiều dài, chiều rộng
    -Xử lý: 
        + Chu vi = (chiều dài + chiều rộng) * 2;
        + Diện tích = chiều dài * chiều rộng
    -Output: Chu vi, diện tích hình chữ nhật 
 */

document.getElementById("btn_result").onclick = function() {
    //chuyển những giá trị số nguyên sang số thập phân
    var chieuDai = parseFloat(document.getElementById("chieuDai").value); 
    var chieuRong = parseFloat(document.getElementById("chieuRong").value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    
    var inKetQua = document.getElementById("print_result").innerHTML = 
    `Chu vi hình chữ nhật: ${chuVi} </br> Diện tích hình chữ nhật: ${dienTich}`;

    document.getElementById("print_result").classList.add("alert-success");
}

// Bài tập 5
/*
    -Input:
        + Nhập 1 só có 2 chữ số
    - Xử lý: 
        - Tách chữ số hàng đơn vị: sô đã nhập % 10;
        - Tách chữ số hàng chục: số đã nhập / 10;
        - Tổng của số hàng đơn vị và hàng chục = đơn vị + hàng chục;
    - Output: tổng của hàng đơn vị và hàng chục 
*/

document.getElementById("btn__result").onclick = function() {
    var number = document.getElementById("nhapSo").value;
    var donVi = number % 10;
    var hangChuc = Math.floor(number / 10);
    var tong = donVi + hangChuc;

    var showKetQua = document.getElementById("print__result").innerHTML = 
    `Chữ số hàng đơn vị: ${donVi} </br> 
    Chữ số hàng chục: ${hangChuc} </br> 
    Tổng của 2 chữ số hàng đơn vị và hàng chục: ${tong}`

    document.getElementById("print__result").classList.add("alert-success");
}