import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let api = {
  documents: {
    getList: () => axios.get('/documents')
      .then(res => res.data).catch(e => Promise.reject(e)),
    post: data => axios.post('/documents', data)
      .then(res => res.data).catch(e => Promise.reject(e)),
  },
};

export default api;
