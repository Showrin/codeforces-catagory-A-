var n = parseInt(readline(), 10)
    p = readline().split(' ').map(el => parseInt(el, 10)),
    result = [],
    p_i = 0;
 
for(var i=0; i<p.length; i++) {
    p_i = p[i]-1;
    result[p_i] = i + 1;
}
 
print(result.join(' '));