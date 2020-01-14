var nm = readline().split(' ').map(el => parseInt(el, 10)),
    f = readline().split(' ').map(el => parseInt(el, 10)).sort((a,b) => a-b),
    min = Infinity,
    localMin = 0;
    
for(var i=0; i<=f.length-nm[0]; i++) {
    localMin = f[i+nm[0]-1] - f[i];
    min = localMin < min ? localMin : min;
}
    
print(min);