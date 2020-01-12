#include <iostream>
using namespace std;
 
int main()
{
    int n;
    string input_word;
    string output_word;
    string word;
 
    cin >> input_word;
 
    for (int i=0; i<input_word.length(); i++) {
 
        if (input_word.at(i) == 'A' || input_word.at(i) == 'E' || input_word.at(i) == 'I' || input_word.at(i) == 'O'
            || input_word.at(i) == 'U' || input_word.at(i) == 'Y' || input_word.at(i) == 'a' || input_word.at(i) == 'e'
            || input_word.at(i) == 'i' || input_word.at(i) == 'o' || input_word.at(i) == 'u' || input_word.at(i) == 'y') {
 
 
        } else {
 
            output_word.append(".");
 
            if (input_word.at(i) >= 'A' && input_word.at(i) <= 'Z') {
 
                word=input_word.at(i)+32;
                output_word.append(word);
            }
            else {
 
                word=input_word.at(i);
                output_word.append(word);
            }
        }
    }
 
    cout << output_word << endl;
 
    return 0;
}