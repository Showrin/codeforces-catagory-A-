var n = parseInt(readline(), 10),
    magnet = [],
    group = 1;
 
for(var i=0; i<n; i++) {
    magnet.push(readline().split(''));
    if(i !== 0) {
        if(magnet[i-1][1] === magnet[i][0]) group++;
    }
}
 
print(group);