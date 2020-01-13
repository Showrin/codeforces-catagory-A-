var n = parseInt(readline(), 10),
    a = readline().split(' ').map(el => parseInt(el, 10)),
    maxCount = 1,
    localCount = 1;
    
for(var i=1; i<a.length; i++) {
    if(a[i] >= a[i-1]) {
        localCount++;
    } else {
        maxCount = localCount > maxCount ? localCount : maxCount;
        localCount = 1;
    }
    
    if(i === a.length-1) {
        maxCount = localCount > maxCount ? localCount : maxCount;
    }
}
 
print(maxCount);