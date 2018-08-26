// https://js.checkio.org/mission/date-and-time-converter/

const months = ["", 'January','February','March','April','May','June','July','August','September','October','November','December'];

function dateTime(date) {
  date = date.split(" ");
  let dt = date[0].split(".").map(n => parseInt(n));
  let t = date[1].split(":").map(n => parseInt(n));

  let [d, mon, y] = dt;
  let [hr, min] = t;

  return `${d} ${months[mon]} ${y} year ${hr} hour${hr != 1 ? "s" : ""} ${min} minute${min != 1 ? "s" : ""}`
}