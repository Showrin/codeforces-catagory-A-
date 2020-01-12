var mat = [], x = 0, y = 0, row;
 
for(var i=0; i<5; i++) {
    row = readline().split(' ');
    mat.push(row);
    
    if(row.indexOf('1') >= 0) {
        x = i;
        y = row.indexOf('1');
    }
}
 
print(Math.abs(2-x) + Math.abs(2-y));