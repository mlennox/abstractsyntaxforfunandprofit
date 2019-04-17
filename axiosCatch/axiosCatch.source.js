const doThings = ({ config }) => {
  return Promise((resolve, reject) => {
    if (!config.url) {
      reject('no url');
    }
    resolve(`${config.url}/doThings`);
  });
}

doThings({ config: { url: 'https://breakit.co.uk' } })
  .then(url => {
    goGetTheThings(url);
  })
  .catch(error => {
    logit(error);
  })