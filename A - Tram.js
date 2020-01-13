var n = parseInt(readline(), 10), ab = [], minCap = 0, existPassenger = 0;
 
for(var i=1; i<=n-1; i++) {
    ab = readline().split(' ').map(el => parseInt(el, 10));
    existPassenger = existPassenger - ab[0] + ab[1];
    minCap = existPassenger > minCap ? existPassenger : minCap;
}
 
print(minCap);