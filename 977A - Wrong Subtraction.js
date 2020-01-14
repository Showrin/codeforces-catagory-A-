var nk = readline().split(' ').map(el => parseInt(el, 10)),
    num = nk[0];
    
for(var i=1; i<=nk[1]; i++) {
    if(num%10 === 0) num /= 10;
    else num--;
}
    
print(num);