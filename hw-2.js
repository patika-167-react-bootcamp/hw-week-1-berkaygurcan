/* `string.includes()` metodunun case insensitive versiyonunu yazmanızı bekliyoruz. */

strList = ["Berkay", "uTku", "FuaT", "berat", "iLHAn", "batuhan"];

Array.prototype.includesCi = function includesCi(targetItem) {

    let resultStr = "";

    for(item of strList) {
        if(item.trim().toLowerCase() === targetItem.trim().toLowerCase()) {
            // console.log(`İstenen değer : ${item}`);
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

a = strList.includesCi("Utku ");
console.log(a);