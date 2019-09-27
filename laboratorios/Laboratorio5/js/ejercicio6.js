function ordernar(array){
    var temp;
    for( var i = 1; i<array.length;i++){
        for (var j = i; j>0;j--){
            if( array[j]< array[j-1]){
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    return array;
}

var x = [8,5,2,1,10,15,3,31,22];

var y = ordernar(x);

for(var i=0;i<y.length;i++){
    console.log(y[i]);
}