import axios from 'axios';

export const getStoryId = async () => {
  axios.get('http://hn.algolia.com/api/v1/items/1').then(data => {
    console.log(data);
  }).catch(error => {

  });
}
