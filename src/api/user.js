import axios from '@/libs/api.request'
export const generateServey = ({ creatorserialId, remark, tag, title, list }) => {
  const data = {
    creatorserialId,
    remark,
    tag,
    title,
    list
  }
  return axios.request({
    url: '/user/generateServey',
    data,
    method: 'post'
  })
}
export const serveylist = ({ keyword, pageIndex, pageSize }) => {
  const data = {
    keyword,
    pageIndex,
    pageSize
  }
  return axios.request({
    url: 'user/servey',
    data,
    method: 'post'
  })
}
export const serveydetail = ({ surveyserialid }) => {
  const data = {
    surveyserialid
  }
  return axios.request({
    url: 'user/serveydetail',
    data,
    method: 'post'
  })
}
export const submitservey = ({ questionid, surveyserialid, answererserialId, remark, submitType }) => {
  const data = {
    questionid,
    surveyserialid,
    answererserialId,
    remark,
    submitType
  }
  return axios.request({
    url: 'user/submitServey',
    data,
    method: 'post'
  })
}

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
