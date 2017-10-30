//判断是否为json对象
export const isJson = (obj) => {
  return typeof(obj) == "object" &&
    Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}
