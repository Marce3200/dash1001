const getUrl = (url) => {
  return Promise.resolve(fetch(url).then((response) => response.json()));
};

export default getUrl;
