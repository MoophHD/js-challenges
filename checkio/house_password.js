// https://js.checkio.org/mission/house-password

function housePassword(data){
    return (data.length >= 10 && (/[a-z]/).test(data) && (/[A-Z]/).test(data) && (/[0-9]/).test(data));
  }