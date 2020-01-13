var n = parseInt(readline(), 10), 
    inp = readline().split(' ').map(el => parseInt(el, 10)).sort((a,b) => b-a), 
    totalMoney = 0,
    tempMoney = 0,
    coin = 0;
    
totalMoney = inp.reduce((a,b) => a+b);
 
while(1) {
    
    tempMoney += inp[coin];
    
    if(tempMoney > totalMoney/2) break;
    
    coin++;
}
 
print(++coin);