#include <iostream>
using namespace std;
 
int main()
{
    long long int n,m,a,nmbr_sqr_piece_length,nmbr_sqr_piece_width;
 
    cin >> n >> m >> a;
 
    if (n%a != 0) nmbr_sqr_piece_length=(n/a)+1;
    else nmbr_sqr_piece_length=(n/a);
 
    if (m%a != 0) nmbr_sqr_piece_width=(m/a)+1;
    else nmbr_sqr_piece_width=(m/a);
 
    cout << nmbr_sqr_piece_length*nmbr_sqr_piece_width << endl;
 
    return 0;
}