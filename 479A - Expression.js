var a = parseInt(readline(), 10),
    b = parseInt(readline(), 10),
    c = parseInt(readline(), 10),
    result = [];
 
result.push( (a+b)*c );
result.push( (a*b)+c );
result.push( a+(b*c) );
result.push( a*(b+c) );
result.push( a*b*c );
result.push( a+b+c );
 
print(result.sort((a,b) => a-b).pop());