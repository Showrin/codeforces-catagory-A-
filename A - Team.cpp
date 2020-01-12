#include <iostream>
using namespace std;
 
int main()
{
    int n,surity[3],counting=0,problem=0,i;
 
    cin >> n;
 
    for (int j=1; j<=n; j++) {
 
        for (i=0, counting=0; i<3; i++) {
 
            cin >> surity[i];
 
            if (surity[i] == 1) counting++;
        }
 
        if (counting >= 2) problem++;
    }
 
    cout << problem << endl;
 
    return 0;
}