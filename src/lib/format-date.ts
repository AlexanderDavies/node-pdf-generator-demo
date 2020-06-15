const formatDate = (): string  => {
  const date = new Date();
  const year = date.getFullYear().toString();
  let month = date.getMonth().toString();
  let day = date.getDate().toString();
  if (day.length == 1) {
    day = '0' + day;
  }
  if (month.length == 1) {
    month = '0' + month;
  }
  return year + month + day;
};

export default formatDate;
