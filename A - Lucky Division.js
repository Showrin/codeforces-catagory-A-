var n = readline().split(''), 
    result = true,
    lucky = [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777];
 
for(var el of n) {
    
    if(el !== '4' && el !== '7') {
        
        for(var luckyNum of lucky) {
            if(parseInt(n.join(''), 10)%luckyNum === 0) {   
                result = true;
                break;
            } else result = false; 
        }
        break;
    }
}
 
print((result) ? 'YES' : 'NO')
 
// for(var i=1; i<=1000; i++) {
//     var j=0;
//     var str = i.toString().split('');
//     var leng = str.length;
//     str.forEach((el, i) => {
//         if(el === '4' || el === '7') {
//             j++; 
//         }
//     })
//     if(j===leng) print(i);
// }
// will return [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777]