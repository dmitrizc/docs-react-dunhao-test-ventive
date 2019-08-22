let types = {
  // Documents
  GET_DOCUMENTS_LIST_REQUEST: '',
  GET_DOCUMENTS_LIST_SUCCESS: '',
  GET_DOCUMENTS_LIST_FAILURE: '',

  POST_DOCUMENT_REQUEST: '',
  POST_DOCUMENT_SUCCESS: '',
  POST_DOCUMENT_FAILURE: '',

  // Select Document
  SELECT_DOCUMENT: '',
};

if (process.env.NODE_ENV === 'production') {
  let idx = Math.floor(Math.random() * 1000);

  for (let prop in types) {
    if (types.hasOwnProperty(prop)) {
      types[prop] = idx++;
    }
  }
} else {
  for (let prop in types) {
    if (types.hasOwnProperty(prop)) {
      types[prop] = prop;
    }
  }
}

export default types;
