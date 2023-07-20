import axios from "axios";

export default class PostService {
   
    // static async getAll(limit=10, page=0){
    //     try {
    //         const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
    //             params: {
    //                 _limit:limit,
    //                 _page:page
    //             }
    //         });
    //         return response;
    //     }catch(e){
    //         console.log(e)
    //     }
        
    // }

    static async getAll(limit=10, page=0, searchQuery="health"){
      
        try{
            const response = await axios.get("https://newsapi.org/v2/everything",{
                params: {
                    apiKey:"fed57cd500344f019528159bd1e65282",
                    q: searchQuery,
                    searchIn: "title",
                    language:"en",
                    pageSize:limit,
                    page:page
                }
            });
            return response;
        }catch(e){
            console.log("Ошибка какая-то бля ", e)
        }
    }

    static async getPost(id){
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return response;
        }catch(e){

        }
    }

    static async getComments(id){
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            return response;
        }catch(e){

        }
    }
}