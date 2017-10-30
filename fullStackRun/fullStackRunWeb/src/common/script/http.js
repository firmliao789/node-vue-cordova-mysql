/**
 * Created by liaoyi on 2017/6/21.
 */
import axios from 'axios'
import {api_url} from '../../utils/config'

export const http = async function (url, form, method = 'POST', query) {
  const config = {
    method: method,
    url: api_url + url,
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: false,
  }
  if (form)
    config.data = form;
  if (query)
    config.params = query;
  console.log(config);
  const result = await axios(config);
  console.log(result.data);
  return result.data;
}

