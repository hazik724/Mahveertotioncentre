// frontend/src/lib/api.ts
import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:4000", // 👈 change if your NestJS runs on another port
  headers: {
    "Content-Type": "application/json",
  },
})

export default api