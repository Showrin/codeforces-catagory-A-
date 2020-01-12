var n = parseInt(readline(), 10), forceX = 0, forceY = 0, forceZ = 0, points = [];
    
for(var i=0; i<n; i++) {
    points.push(readline().split(' ').map(el => parseInt(el, 10)));
    forceX += points[i][0];
    forceY += points[i][1];
    forceZ += points[i][2];
}
 
print((forceX === 0 && forceY === 0 && forceZ === 0) ? 'YES' : 'NO');