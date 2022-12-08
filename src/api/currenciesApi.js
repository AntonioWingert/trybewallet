const currenciesApi = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const objData = Object.keys(data);
    return objData.filter((item) => item !== 'USDT');
  } catch (error) {
    return error;
  }
};

export default currenciesApi;
