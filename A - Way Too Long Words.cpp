#include <iostream>
using namespace std;
 
int main()
{
    int n;
    string word;
 
    cin >> n;
 
    for (int i=1; i<=n; i++) {
 
        cin >> word;
 
        if (word.length() > 10) cout << word.at(0) << word.length()-2 << word.at(word.length()-1) << endl;
        else cout << word << endl;
    }
    return 0;
}