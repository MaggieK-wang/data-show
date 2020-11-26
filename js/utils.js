var Utils = {
  // 防抖
  debounce(fn, wait) {
    let timeout = null;
    return function () {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(fn, wait);
    }
  },
  // 数字转换
  changeNum(Num) {
    if (isNaN(Num)) { //验证输入的字符是否为数字
      return;
    }
    let num = Num > 9999 ? (Num / 10000).toFixed(1) + '万' : Num
    return num;
  }
};