
strList = ["Berkay", "uTku", "FuaT", "berat", "iLHAn", "batuhan"];

Array.prototype.includesCi = function (targetItem) {

    for(item of strList) {
        if(item.trim().toLowerCase() === targetItem.trim().toLowerCase()) { //trim ile ekstra sağ ve soldaki boşluklardan kurtulduk.
            return true // ifade bulundu true döner
        }

    }
    return false // eğer eşdeğer bir ifade bulamadıysa false döner
    
}

console.log(strList.includesCi("UtKU"))  //true
console.log(strList.includesCi("FuarT")) //false