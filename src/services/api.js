const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';
class ApiService {
    async request(endpoint,options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-type': 'application/json',
                ...options.headers,
            },
            ...options,
        };
        try{
            const response = await fetch(url,config);

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return {data,error:null};
        }catch(error) {
            return {
                data: null,
                error: error.message || 'An error occured while fetching data'
            };
        }
    }
    async get(endpoint){
        return this.request(endpoint,{
            method: 'GET',
        })
    
}
async post(endpoint,body){
    return this.request(endpoint,{
        method: 'POST',
        body: JSON.stringify(body),
    });

}

}

export const apiService = new ApiService(); 
export const userApi = {
    getAll: () => apiService.get('/users'),
    getById: (id) => apiService.get(`/users/${id}`),
    create: (user) => apiService.post('/users',user)
}
