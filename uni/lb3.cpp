#include <iostream>
#include <math.h>
#include <iomanip>

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


int main() {
    double x, from, to, step, steps, funS, funY;
    int n,i;

    // cout << "Enter From: ";
    //     cin >> from;
    // cout << "Enter To: ";
    //     cin >> to;
    // cout << "Enter Steps: ";
    //     cin >> steps;

    from = 0.1;
    to = 1;
    steps = 10;

    if (from >= to) {
        cout << "FROM has to contain value smaller than TO";
        return -1;
    }

    step = (to - from) / steps;
    n = 80;
    x = from;
    while (x <= to) {
        funS = (exp(x) - exp(-x)) * 0.5;

        funY = 1;
        for (i = 0; i < n; i++) {
            int factorial = fact(2*i + 1);
            if (factorial > 0) {
                funY += (pow(x, 2 * i + 1) / factorial);
            }
            
        }
        
    cout << "x: " << fixed << x << setw(10)
    << "y(x): " << funY << setw(10) 
    << "s(x): " << funS << endl;
    x += step;
    }
 
    return 0;
}