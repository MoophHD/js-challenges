//http://www.codewars.com/kata/luck-check/javascript

function sumDigits(nums) {
  return nums.split("").reduce((accu, curr) => accu += parseInt(curr), 0)
}

function luckCheck(ticket){
  let halfLen = ~~(ticket.length * 0.5);
  return sumDigits(ticket.slice(0, halfLen)) == sumDigits(ticket.slice(-halfLen))
}