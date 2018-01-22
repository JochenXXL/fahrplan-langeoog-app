import { WEEKDAY, MONTH } from './dateConst';

export function formatDatePretty(date) {
  const result = `${WEEKDAY[date.getDay()]}, ${date.getDate().toString()}. ${
    MONTH[date.getMonth()]
  }`;

  return result;
}

export function formatDateApi(date) {
  // if day has only 1 digget, add a trailing 0 ( needed for api )
  const day = date.getDate();
  const dayTwoDigget = () => {
    if (day < 10) {
      return `0${day.toString()}`;
    }
    return day.toString();
  };

  // add +1 to month, because date.getMonth() returns 0-11
  // if month has only 1 digget, add a trailing 0 ( needed for api )
  const month = date.getMonth() + 1;
  const monthTwoDigget = () => {
    if (month < 10) {
      return `0${month.toString()}`;
    }
    return month.toString();
  };

  const result = `${dayTwoDigget()}-${monthTwoDigget()}-${date
    .getFullYear()
    .toString()}`;
  return result;
}
