module.exports={
    findCommonObjectsOfArrays: function(keys, ...arrayList){
        let noOfArrays = arrayList.length;
    
        if(noOfArrays > 1){
        let temp1 = arrayList[0];
        let temp2 = arrayList[1];
        let matchedArray  = this.returnMatched(keys, temp1, temp2);
        if(noOfArrays > 2){
            arrayList.splice(0,2);
            arrayList.forEach(arr=> matchedArray = returnMatched(keys, matchedArray, arr))
            return matchedArray;
        }else{
            return matchedArray;
        }
        }else{
        return arrayList[0];
        }
    },
 
    returnMatched: function(keys,temp1, temp2){
    
        return temp1.filter(ele1=> {
            return temp2.some(ele2 => {
                let matched = true;;
                keys.forEach(element => {
                    if(ele1[element] !== ele2[element])
                        matched = false
                });
                return matched;
            })
        })
        
    
    }
}