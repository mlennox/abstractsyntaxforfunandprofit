import axios from 'axios';

export const exampleCall = () => {
  return axios
    .get('https://swapi.co/api/people/')
    .then(starFolk => {
      console.log(starFolk);
      return starFolk;
    }).catch(thing => { })
}