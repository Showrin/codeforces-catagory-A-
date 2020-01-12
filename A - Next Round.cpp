#include <iostream>
using namespace std;
 
int main()
{
    int n,k,selected = 0,min_score=0;
 
    cin >> n >> k;
 
    int scores[n];
 
    for (int i=0; i<n; i++) {
 
        cin >> scores[i];
 
        if (i<k-1 && scores[i] != 0) selected++;
        else if (i==k-1 && scores[i] != 0) {
 
            selected++;
            min_score = scores[i];
        } else {
 
            if (scores[i] == min_score && scores[i] != 0) selected++;
        }
 
    }
 
    cout << selected << endl;
 
    return 0;
}