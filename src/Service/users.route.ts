import api from "./api"

const addUser = async (data: any) => {
 const response = await api.post("/users", data)
 return response.data
}

const getAllUsers = async () => {
 const response = await api.get("/users")
 return response.data
}

const getUserById = async (id: string) => {
 const response = await api.get(`/users/${id}`)
 return response.data
}

const updateUser = async (id: string, data: any) => {
 const response = await api.put(`/users/${id}`, data)
 return response.data
}

const deleteUser = async (id: string) => {
 const response = await api.delete(`/users/${id}`)
 return response.data
}

export const userApi = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}