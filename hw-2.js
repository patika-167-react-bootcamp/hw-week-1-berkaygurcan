
strList = ["Berkay", "uTku", "FuaT", "berat", "iLHAn", "batuhan"];

Array.prototype.includesCi = function (targetItem) {

    let resultStr = "";

    for(item of strList) {
        if(item.trim().toLowerCase() === targetItem.trim().toLowerCase()) { //trim ile ekstra sağ ve soldaki boşluklardan da kurtulmak istedim
            resultStr = item;
            break;
        }
       
    }
    if(resultStr == "") { // eğer kayıt bulunamadıysa
        return -1;
    } else { //kayıt mevcut ise
        return resultStr;
    }
    
}

a = strList.includesCi("Utku");
console.log(a);