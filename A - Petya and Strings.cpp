#include <iostream>
using namespace std;
 
int main()
{
    string str1, str2;
    int sum_str1=0, sum_str2=0;
 
    cin >> str1;
    cin >> str2;
 
    for (int i=0; i<str1.length(); i++) {
 
        if (str1.at(i) >= 'a' && str1.at(i) <= 'z') str1.at(i) = str1.at(i) - 32;
        if (str2.at(i) >= 'a' && str2.at(i) <= 'z') str2.at(i) = str2.at(i) - 32;
 
        if (str1.at(i) > str2.at(i)) {
 
            cout << "1" << endl;
            return 0;
        }
        if (str1.at(i) < str2.at(i)) {
 
            cout << "-1" << endl;
            return 0;
        }
    }
 
    if (str1.compare(str2) == 0) cout << "0" << endl;
 
    return 0;
}