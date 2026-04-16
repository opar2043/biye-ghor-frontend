import api from "./api";
import personType from "./type";

const getPersons = async () => {
   const data = await api.get('/profiles')
   return data.data
};

const getPersonById = async (id: string) => {
    const data = await api.get(`/profiles/${id}`)
    return data.data
};

const addPerson = async (person: personType) => {
    const data = await api.post('/profiles', person)
    return data.data
};
const updatePerson = async (person: personType) => {
    const data = await api.patch(`/profiles/${person._id}`, person)
    return data.data
};

const approvePerson = async (id: string, updateData: any) => {
    const data = await api.patch(`/profiles/${id}`, updateData);
    return data.data
};

const deletePerson = async (id: string) => {
    const data = await api.delete(`/profiles/${id}`)
    return data.data
};

export const personRoutes = {
    getPersons,
    getPersonById,
    addPerson,
    updatePerson,
    deletePerson,
    approvePerson
}