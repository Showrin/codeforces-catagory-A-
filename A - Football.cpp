#include <iostream>
using namespace std;
 
int main()
{
    string sequense;
    int counting=0;
 
    cin >> sequense;
 
    for (int i=0; i<sequense.length(); i++) {
 
        if (sequense.at(i)=='0') {
 
            if (i!=0 && sequense.at(i-1)=='0') counting++;
            else if (i==0) counting++;
            else counting=1;
        } else {
 
            if (i!=0 && sequense.at(i-1)=='1') counting++;
            else if (i==0) counting++;
            else counting=1;
        }
 
        if (counting == 7) {
 
            cout << "YES" << endl;
            return 0;
        }
 
    }
 
    cout << "NO" << endl;
 
    return 0;
}