// https://www.codewars.com/kata/calculator/train/javascript

const Calculator = function() {
  this.evaluate = string => {
    // getting rid of spaces
    string = string.split(" ");
    if (string.length < 3) return parseInt(string);
    // - a => + -a
    for (let i = 1; i < string.length; i += 2) {
        let sign = string[i];
        if (sign == "-") {
            string[i] = "+";
            string[i+1] = -parseFloat(string[i+1]);
        } 
    }

      let calc = (n1, n2, operation) => {
          n1 = parseFloat(n1);
          n2 = parseFloat(n2);
          if (operation == "+") return n1 + n2;
          else if (operation == "*") return n1 * n2;
          else if (operation == "/") return n1 / n2;
      }


        while(string.length > 2) {
            for (let i = 1; i < string.length; i += 2) {
                let sign = string[i];

                if (sign == "+" && (string.indexOf("*") != -1 || string.indexOf("/") != -1)) continue;
              	string.splice(i - 1, 3, calc(string[i-1], string[i+1], sign));
              	i -= 2;
            }
        }
    	return string[0];
  }
};
