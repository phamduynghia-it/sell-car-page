 function checkNull(txt){
    if (txt.value.length == 0)
        return true;
    return false;
 }
 function validForm(f,event){
    event.preventDefault();
    //  check rong brand
    if (checkNull(f.brand)){
        document.getElementById("car_brand").style.display="block";
        f.brand.focus();
        return;
    }
    else{
        document.getElementById("car_brand").style.display="none";
    }
     //  check rong model
    if (checkNull(f.model)){
        document.getElementById("car_model").style.display="block";
        f.model.focus();
        return;
    }
    else{
        document.getElementById("car_model").style.display="none";
    }
     //  check rong year
    if (checkNull(f.year)){
        document.getElementById("car_year").style.display="block";
        f.year.focus();
        return;
    }
    else{
        document.getElementById("car_year").style.display="none";
    }
    //  check rong phien ban
    if (checkNull(f.version)){
        document.getElementById("car_version").style.display="block";
        f.version.focus();
        return;
    }
    else{
        document.getElementById("car_version").style.display="none";
    }
    //  check rong so km da di
    if (checkNull(f.mileage)){
        document.getElementById("car_mileage").style.display="block";
        f.mileage.focus();
        return;
    }
    else{
        document.getElementById("car_mileage").style.display="none";
    }
     //  check rong so dien thoai
     if (checkNull(f.phone)){
        document.getElementById("car_phone").style.display="block";
        f.phone.focus();
        return;
    }
    else{
        document.getElementById("car_phone").style.display="none";
    }
    
    alert("Bạn đã nhập thành công!");
    f.submit(); // Chỉ gửi form nếu tất cả đều hợp lệ
 }