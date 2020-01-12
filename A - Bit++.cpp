#include <iostream>
using namespace std;
 
int main()
{
    string statement;
    int x=0, n;
 
    cin >> n;
 
    for (int i=1; i<=n; i++) {
 
        cin >> statement;
 
        for (int j=0; j<3; j++) {
 
            if (statement.at(j) == '+') {
 
                x++;
                break;
            } else if (statement.at(j) == '-') {
 
                x--;
                break;
            }
        }
    }
 
    cout << x << endl;
 
    return 0;
}