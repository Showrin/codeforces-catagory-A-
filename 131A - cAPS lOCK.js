var inp = readline(),
    valid = true,
    el = '';
 
for(var i=1; i<=inp.length-1; i++) {
    el = inp[i];
    if(el.charCodeAt(0) < 65 || el.charCodeAt(0) > 90) valid = false;
}
 
if(valid) {
    
    if(inp[0].charCodeAt(0) >= 65 && inp[0].charCodeAt(0) <= 90) {
        inp = inp.toLowerCase().split('');
        inp[0] = inp[0].toLowerCase();
    } else {
        inp = inp.toLowerCase().split('');
        inp[0] = inp[0].toUpperCase();
    }
    
    inp = inp.join('');
}
 
print(inp);