// https://js.checkio.org/mission/middle-characters

function middle(text) {
  let mid = text.length / 2;

  return text.length % 2 == 0 ? text.slice(mid - 0.5, mid + 1.5) : text[~~mid];
}