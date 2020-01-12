var s = readline().split(''), 
distinct_s = [];

for(var el of s) {
if(distinct_s.indexOf(el) < 0) {
    distinct_s.push(el);
}
} 

print((distinct_s.length % 2 === 0) ? 'CHAT WITH HER!' : 'IGNORE HIM!');