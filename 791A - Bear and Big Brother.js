var w = readline().split(' ').map(el => parseInt(el, 10));
 
print( Math.floor( ( calcLog(10, w[1]/w[0]) / calcLog(10, 1.5) ) + 1 ) );
 
function calcLog(base, x) {
    return Math.log(x)/Math.log(base);
}