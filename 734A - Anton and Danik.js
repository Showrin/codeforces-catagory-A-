var n = parseInt(readline(), 10),
    s = readline().split(''),
    A = 0,
    D = 0;
    
for(var el of s) {
    el === 'A' ? A++ : D++;
}
 
print(A === D ? 'Friendship' : A > D ? 'Anton' : 'Danik');