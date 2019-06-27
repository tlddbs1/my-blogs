import axios from 'axios';

export const getOne = (idx) => {
    console.log(idx);
    return axios.get('http://localhost:8080/blog/'+idx);
};

export const writePost = ({title, contents}) => {
    console.log(contents);
    return axios.post('http://localhost:8080/blog',{ title  , contents });
}

export const putPost = ({title, contents, idx}) => {
    console.log(idx);
    axios.put('http://localhost:8080/blog' , {title , contents , idx});
}

export const signIn = ({id,password}) => {
    console.log(id);
    //return axios.post('http://localhost:8080/login' , {id, password});
    return {id , password}
}
