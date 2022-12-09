const currenciesApi = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default currenciesApi;
