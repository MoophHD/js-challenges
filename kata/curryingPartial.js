// https://www.codewars.com/kata/currying-vs-partial-application/javascript

function nest(fn, i, args) {
    return (...props) => {
      if (i + props.length >= fn.length) {
        return fn(...args, ...props);
      }
      return nest(fn, i + props.length, [...args, ...props]);
    };
  }
  
  function curryPartial(fn, ...args) {
    return nest(fn, args.length, args || [])();
  }
  