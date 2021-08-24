import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzBhYmVmNzJiZWQ2Y2Q3ZjE0YWI0OGRjY2Y4NDc5NiIsInN1YiI6IjYxMGJmOGNiNzcxOWQ3MDA1ZGEzY2IxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRVkS-zA7g15ac1_IckPmBtCJ53uKHNs9wI6Gr8bwMk'
    }
})
