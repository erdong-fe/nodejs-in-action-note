const oneDay = 86400000;  // 一天的毫秒数
const oneHour = 3600000;  // 一小时的毫秒数
const oneMin = 60000; // 一分钟的毫秒数
/**
 * 从某个时间间距interval开始算，会出现类似10分钟前，30分钟前等等
 * @param stamp 要计算的时间戳，毫秒
 * @param interval 时间间隔，毫秒，小于oneDay
 */
const formatTimeFrom = (stamp: number, interval: number) => {
  const d = new Date(stamp);
  const now = Date.now();
  const toDayZeroClock = now - (now%86400000);
  const distance = now - d.getTime();
  const isToday = d.getTime() >= toDayZeroClock;
  if (isToday) {
    if (distance < interval) {
      if (distance < oneMin) {
        return Math.ceil(distance/1000) + '秒前';
      }
      else if(distance < oneHour) {
        return Math.ceil(distance/oneMin) + '分钟前';
      } else {
        return Math.ceil(distance/oneHour) + '小时前';
      }
    }
    return '今天' + d.toLocaleTimeString();
  } 
  else {
    return formatTime(stamp);
  }
}

// 普通的时间解析，年月日时分
const formatTime = (stamp: number) => {
  return new Date(stamp).toLocaleString();
}

export {
  formatTimeFrom,
  formatTime
}