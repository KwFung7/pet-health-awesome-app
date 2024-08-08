import axios from '../util/axios';

const _post = (endpoint: string, requestData: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(endpoint, requestData)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// const _get = (endpoint: string) => {
//   return new Promise((resolve, reject) => {
//     axios.get(endpoint)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

// const _del = (endpoint: string) => {
//   return new Promise((resolve, reject) => {
//     axios.delete(endpoint)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

export const example = (payload: any) => _post('example/endpoint', payload);
