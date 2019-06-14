import axios from 'axios';

export const writePost = ({title, body}) => axios.post('http://localhost:8080/save',{ title, body })