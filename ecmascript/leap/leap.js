export const isLeapYear = year => {

  let results = false;
  if(year % 100 === 0 && year % 400){
    results = false;
  } else if(year % 4 === 0){
    results = true;
  }
  return results;
}
