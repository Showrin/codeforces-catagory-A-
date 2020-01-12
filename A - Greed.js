var n = parseInt(readline(), 10)
    a = readline().split(' ').map(el => parseInt(el, 10)),
    b = readline().split(' ').map(el => parseInt(el, 10)).sort((a,b) => b-a);
    
print((a.reduce((a,b) => a+b) <= b[0]+b[1]) ? 'YES' : 'NO');