const getPersons = async () => {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
};

const getPersonById = async (id: string) => {
    const data = await getPersons();
    return data.find((p: any) => p._id === id);
};

export const personRoutes = {
    getPersons,
    getPersonById,
}