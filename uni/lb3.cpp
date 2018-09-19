#include <iostream>
#include <math.h>
#include <iomanip>
#include <string>
#include <limits>


using namespace std;

int fact(int till) {
    int i = 1;
    int result = 1;

    while(i < till) {
        i++;

        result *= i;
    }

    return result;
}

double safeDblPrompt(string message) {
    double input;

    cout << message;
    while(!(cin >> input)) {
        cout << "Bad value!" << endl;
        cout << message;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }

    return input;
}   

int main() {
    double x, from, to, step, funS, funY;
    int n,i;
    
    // from = 0.1;
    // to = 1;
    // step = (to - from) / 10;


    from = safeDblPrompt("enter FROM: ");
    to = safeDblPrompt("enter TO: ");

    if (from >= to) {
        cout << "FROM has to contain value smaller than TO";
        return -1;
    }

    step = (to - from) / 10;
    n = 50;
    x = from;
    while (x <= to) {
        funY = (exp(x) - exp(-x)) * 0.5;

        funS = 1;
        for (i = 0; i < n; i++) {
            funS += pow(x, 2 * i + 1);
        }
        
        
    cout << "x: " << fixed << x << setw(10)
    << "y(x): " << funY << setw(10) 
    << "s(x): " << funS << endl;
    x += step;
    }
 
    return 0;
}