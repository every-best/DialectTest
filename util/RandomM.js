//origAry 里面 随机选取 nNumber 个数字 sdf
module.exports = function(aOrigAry,n){
    if(n > origAry.length){
        return null;
    }
    var aRandData = [];
    aOrigAry.forEach(function(oData,nIndex){
        if(nIndex < n){
            aRandData.push(oData);
        }else if(Math.random() < n/(nIndex+1.0)){
            const nRepleaceIndex = Math.floor(Math.random()*n);
            aRandData[nRepleaceIndex] = oData;
        }
    });
    return aRandData;
};