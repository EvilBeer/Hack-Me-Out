//Tests all items in array according to predefined function.
//call like this:
//myArray.allItemsAre(function(item)){return item.x is something && item.y is something;}
//
Array.prototype.allItemsAre = function(xAndY){
   for(var i = 0; i < this.length; i++)
	{
		if(!xAndY(this[i])){
			return false;
		}
	}
	return true;
}

//Counts amount of items in array that follow a particular pattern.
//call like this:
//myArray.countWhere(function(item)){return item.x is something && item.y is something;}
//
Array.prototype.countWhere = function(xAndY){
	var count = 0;
	for(var i = 0; i < this.length; i++)
	{
		if(xAndY(this[i])){
			count++;
		}
	}
	return count;
}

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (targetArray) {
    // if the other array is a falsy value, return
    if (!targetArray)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != targetArray.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && targetArray[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(targetArray[i]))
                return false;       
        }           
        else if (this[i] != targetArray[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   //taken from http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript

// set array to equal array properly.
Array.prototype.setTo = function (targetArray) {
    // if the other array is a falsy value, return
    if (!targetArray || targetArray.length < 1)
        return false;
        
    if(this.length != size)
    {
    	for(var i = 0; i < size; i++)
	{
		this.push([]);
	}
    }
    
    for (var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++)
        {
            this[i][j] = targetArray[i][j];
        }
    }       
    return this;
} 
