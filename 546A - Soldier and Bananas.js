var inp = readline().split(' ').map(el => parseInt(el, 10)), totalMoney = 0, borrow = 0;
 
for(var i=1; i<=inp[2]; i++) {
    totalMoney += i * inp[0];
}
 
borrow = totalMoney > inp[1] ? totalMoney - inp[1] : 0 ;
 
print(borrow);