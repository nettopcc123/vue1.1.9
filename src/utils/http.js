import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use(config => {
  // loading
  console.log('11111111')
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  console.log('22222')
  return response
}, error => {
  console.log('33333')
  return Promise.resolve(error.response)
});
function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    console.log('666' + response.status + ' --- ' + response)
    return response.status
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: 404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === 404) {
    // alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    // alert(res.data.error_msg)
  }
  return res
}
export default {
  post (url, callback, params) {
    // axios.post(url,params)
    //   .then(function (response) {
    //     console.log('44444' + JSON.stringify(response))
    //     return response
    //   })
    //     .catch(function (error) {
    //       console.log('5555')
    //       return console.log(error);
    //   });
    // },
    axios.post(url, params)
    .then(function (response) {
      console.log('44444' + JSON.stringify(response));
      if (typeof callback === 'function') {
        return callback(response);
      }
    })
    .catch(function (error) {
      console.log('5555')
      return console.log(error);
    })
  },
  
  get (url,callback, params) {
    axios.get(url,params).then (
      (response) => {
        if (typeof callback === 'function') {
          return callback(response);
        }
      }
    ).then (
      (res) => {
        if (typeof callback === 'function') {
          return callback(res);
        }
      }
    )
  }
}
