var inp = readline().split(''),
    isLucky = true,
    lucky = 0;
    
inp.map(el => {
    if(el === '4' || el === '7') {
        lucky++;
    }
    return el;
});
 
lucky = lucky.toString().split('');
 
for(var i=0; i<lucky.length; i++) {
    if(lucky[i] !== '4' && lucky[i] !== '7') {
        isLucky = false;
        break;
    }
}
 
print(isLucky ? 'YES' : 'NO');