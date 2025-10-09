import { apiClient } from "../../../shared/services/api-client";

export const contactApiCall =  async(formData) => {
    try{
        const response =await apiClient.post('/contact', formData);
        return response;
    }
    catch(error){
        console.error('error in contact user api',error);
        throw error;
    }
}