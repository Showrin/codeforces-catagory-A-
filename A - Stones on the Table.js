var n = parseInt(readline(), 10), 
    s = readline().split(''), 
    count = 0;
    
for(var i=0; i<s.length-1; i++) {
    if(s[i] === s[i+1]) count++;
}
 
print(count);