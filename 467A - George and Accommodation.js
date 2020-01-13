var n = parseInt(readline(), 10),
    inp = '',
    room = 0;
 
for(var i=1; i<=n; i++) {
    inp = readline().split(' ');
    
    if(inp[1]-inp[0] >= 2) room++; 
}
 
print(room);