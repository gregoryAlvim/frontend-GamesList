import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: API_URL || 'https://games-test-api-81e9fb0d564a.herokuapp.com/api',
})
