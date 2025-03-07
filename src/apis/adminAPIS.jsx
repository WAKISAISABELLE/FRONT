import apiClient from "./config";

//fetch admin data
export const getAdminDashboardData =async () => {
    try {
        const res = await apiClient.get('/api/admin/dashboard', {
            headers:{
                Authorization: 'Basic' + btoa('admin:admin'),
            },
        });
        return res.data;

    }catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
};

//adding a new event
export const addEvent = async (events) => {
    try{
        const response = await apiClient.post('/api/admin/events', events,{
            headers:{
                Authorization:'Basic' +btoa('admin:admin'),
            },
        });
        return response.data;
    }catch (error){
        console.error('Error adding event:', error);
        throw error;
    }
};


//delete a user

export const deleteUser = async (userId) => {
    try {
        const response = await apiClient.delete(`/api/admin/users/${userId}`, {
            headers: {
                Authorization: 'Basic ' + btoa('admin:admin'),
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};