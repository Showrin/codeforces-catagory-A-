var t = parseInt(readline(), 10);
 
for(var i=1; i<=t; i++) {
    var inputs = readline().split(' ').map(el => parseInt(el, 10));
    var n = inputs[0], k1 = inputs[1], k2 = inputs[2];
    var a = readline().split(' ').map(el => parseInt(el, 10));
    var b = readline().split(' ').map(el => parseInt(el, 10));
    
    print(a.sort((a,b) => a-b).pop() > b.sort((a,b) => a-b).pop() ? 'YES' : 'NO');
}