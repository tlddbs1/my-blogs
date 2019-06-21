import axios from 'axios';

export const writePost = ({title, contents}) => {
    console.log(contents);
    axios.post('http://localhost:8080/save',{ title  , contents })
}