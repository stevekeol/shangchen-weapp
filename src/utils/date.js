export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const formatTodayTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-') + ' ' + '00:00';
}

export const formatMonthTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return [year, month].map(formatNumber).join('-') + '-01 00:00';
}

export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const today = () => {
  return formatTodayTime(new Date());
}

export const month = () => {
  return formatMonthTime(new Date());  
}