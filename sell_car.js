 function checkNull(txt){
    if (txt.value.length == 0)
        return true;
    return false;
 }
 function validForm(f,event){
    event.preventDefault();
    //  check rong brand
    if (checkNull(f.carBrand)){
        document.getElementById("brandStatus").style.display="block";
        f.carBrand.focus();
        return;
    }
    else{
        document.getElementById("brandStatus").style.display="none";
    }
     //  check rong model
    if (checkNull(f.carModel)){
        document.getElementById("modelStatus").style.display="block";
        f.carModel.focus();
        return;
    }
    else{
        document.getElementById("modelStatus").style.display="none";
    }
     //  check rong year
    if (checkNull(f.yearOfManufacture)){
        document.getElementById("yearStatus").style.display="block";
        f.yearOfManufacture.focus();
        return;
    }
    else{
        document.getElementById("yearStatus").style.display="none";
    }
    //  check rong phien ban
    if (checkNull(f.version)){
        document.getElementById("versionStatus").style.display="block";
        f.version.focus();
        return;
    }
    else{
        document.getElementById("versionStatus").style.display="none";
    }
    //  check rong so km da di
    if (checkNull(f.mileage)){
        document.getElementById("mileageStatus").style.display="block";
        f.mileage.focus();
        return;
    }
    else{
        document.getElementById("mileageStatus").style.display="none";
    }
     //  check rong so dien thoai
     if (checkNull(f.phoneNumber)){
        document.getElementById("phoneNumberStatus").style.display="block";
        f.phoneNumber.focus();
        return;
    }
    else{
        document.getElementById("phoneNumberStatus").style.display="none";
    }
    
    alert("Bạn đã nhập thành công!");
    f.submit(); // Chỉ gửi form nếu tất cả đều hợp lệ
 }