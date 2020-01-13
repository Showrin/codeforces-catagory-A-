#include<bits/stdc++.h>
 
using namespace std;
 
int main () {
    string inp;
    char el;
    bool op = false;
    
    cin >> inp;
    
    for(int i=0; i<=inp.size()-1; i++){
        el = inp[i];
        
        if(el == 'H' || el == 'Q' || el == '9') op = true;
    }
    
    if(op) cout << "YES";
    else cout << "NO";
}