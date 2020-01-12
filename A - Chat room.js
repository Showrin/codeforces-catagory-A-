var s = readline().split(''), 
    test_s = ['h','e','l','l','o'];
    
for(var i=0, j=0; i<s.length; i++) {
    if(s[i] === test_s[j]) {
        j++;
        if(j === test_s.length) break;
    }
}
 
print((j === test_s.length) ? 'YES' : 'NO');