import axios from '@/libs/api.request'

export const activecode = ({ userserialid, verificationCode }) => {
  const data = {
    userserialid,
    verificationCode
  }
  return axios.request({
    url: 'activecode',
    data,
    method: 'post'
  })
}

export const login = ({ password, username }) => {
  const data = {
    password,
    username
  }
  return axios.request({
    url: '/api/login',
    data,
    method: 'post'
  })
}

export const password = ({ userserialid, password }) => {
  const data = {
    userserialid,
    password
  }
  return axios.request({
    url: 'password',
    data,
    method: 'put'
  })
}

export const register = ({ email, username, password }) => {
  const data = {
    email,
    username,
    password
  }
  return axios.request({
    url: 'register',
    data,
    method: 'post'
  })
}

export const sendmail = ({ email }) => {
  const data = {
    email
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}
