import axios from "axios"

export const getAllData = () => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/positions.json`)
    .then((response) => {
      return response.data
    })
    .catch((err) => err)
}

export const getPaginationData = (page) => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/positions.json`, {
      params: {
        page
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => err)
}

export const getFilterData = (description, location, full_time) => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/positions.json`, {
      params: {
        description,
        location,
        full_time
      }
    })
    .then((response) => response.data)
    .catch((err) => err)
}

export const getDetailData = (id) => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/positions/${id}`)
    .then((response) => response.data)
    .catch((err) => err)
}