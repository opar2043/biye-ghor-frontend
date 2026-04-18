import api from "./api";

const getComplains = async () => {
    const data = await api.get('/complaints');
    return data.data;
};

const createComplain = async (complainData: any) => {
    const data = await api.post('/complaints', complainData);
    return data.data;
};

const getComplainById = async (id: string) => {
    const data = await api.get(`/complaints/${id}`);
    return data.data;
};

const updateComplain = async (id: string, updateData: any) => {
    const data = await api.patch(`/complaints/${id}`, updateData);
    return data.data;
};

const deleteComplain = async (id: string) => {
    const data = await api.delete(`/complaints/${id}`);
    return data.data;
};

export const complainRoutes = {
    getComplains,
    getComplainById,
    updateComplain,
    deleteComplain,
    createComplain
};