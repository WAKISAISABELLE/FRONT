import apiClient from "./config";

//fetch admin data
export const getAdminDashboard =async (username, password) => {
    try {
        const res = await apiClient.get('/api/admin/dashboard', {
            headers:{
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });
        return res.data;

    }catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
};

//adding a new event
export const addEvent = async (eventData, username, password) => {
    try{
        const response = await apiClient.post('/api/admin/events', eventData,{
            headers:{
                Authorization:`Basic ${btoa(`${username}:${password}`)}`,
            },
        });
        return response.data;
    }catch (error){
        console.error('Error adding event:', error);
        throw error;
    }
};


//delete a user

export const deleteUser = async (userId, username, password) => {
    try {
        const response = await apiClient.delete(`/api/admin/users/${userId}`, {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};