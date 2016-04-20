//origAry 里面 随机选取 nNumber 个数字 sdf

// m个数据里面选出 n个不重复的数据值

module.exports = function(aOrigAry,n){
    if(n > aOrigAry.length){
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
    console.log(aRandData);
    return aRandData;
};