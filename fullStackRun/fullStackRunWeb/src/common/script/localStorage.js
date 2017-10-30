import {isJson} from '../../utils/'
const ls = 'localStorage' in window && window.localStorage;
export const setObject = function (name, data) {
  if (!ls && !name)
    return false;
  if (data && isJson(data))
    data = JSON.stringify(data);
  ls.setItem(name, data);

}
export const getObject = function (name) {
  if (!ls && !name)
    return false;
  else
    return JSON.parse(ls.getItem(name));
}
export const clearItem = (name) => {
  ls && name && ls.removeItem(name);
}
export const clearAll = (name) => {
  ls && name && ls.clear();
}
