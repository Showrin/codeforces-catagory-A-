var year = parseInt(readline(), 10),
    localYear = '',
    valid = true,
    result = '';
 
for(var i=year+1, j; ; i++) {
    localYear = i.toString().split('');
    valid = true;
    
    for(j=0; j<localYear.length-1; j++) { 
        for(var k=j+1; k<localYear.length; k++) {
            if(localYear[j] === localYear[k]) {
                valid = false;
                break;
            }   
        }
            
        if(!valid) break;
    }
    
    if(j === localYear.length-1) {
        result = i;
        break;
    }
}
 
print(result);