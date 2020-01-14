var s = readline(),
    upper = 0,
    lower = 0;
 
for(var i=0; i<s.length; i++) {
    (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90) ? upper++ : lower++;
}
 
print((upper <= lower) ? s.toLowerCase() : s.toUpperCase());