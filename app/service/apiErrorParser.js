function parseLoginError(err) {
  let parsedError = {
    message: 'authentication error',
  };

  // if (err.response) {
  //   console.log(err.response.data);
  //   console.log(err.response.status);
  //   console.log(err.response.headers);
  // } else if (err.request) {
  //   console.log(err.request);
  // } else {
  //   console.log('Error', err.message);
  // }

  if (err.response) {
    if (err.response.data && err.response.data.error && err.response.status === 401) {
      parsedError = {
        ...parsedError,
        message: err.response.data.error,
      };
    }
  }

  return parsedError;
}

export const errorParser = {
  parseLoginError,
};
