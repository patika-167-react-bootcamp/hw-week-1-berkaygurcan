
strList = ["berkay", "uTku", "FuaT", "berat", "iLHAn", "batuhan"];

Array.prototype.includesCi = function (targetItem) {

    for(item of strList) {
        if(( typeof(item) === "string" && item.trim().toLowerCase() ) === (typeof(targetItem) === "string" && targetItem.trim().toLowerCase())) { //trim ile ekstra sağ ve soldaki boşluklardan kurtulduk.
            return true // ifade eşleirse return döner, Returns true if there is a match
        }

    }
    return false // eğer eşdeğer bir ifade bulamadıysa false döner , returns false if no equivalent expression was found
    
}

console.log(strList.includesCi("Utku"))  //true
console.log(strList.includesCi("FuarT")) //false