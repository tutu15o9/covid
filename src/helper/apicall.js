export const getCountriesData = () => {
  return fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .catch((err) => console.log("Can't fetch all countries due to err:", err));
};

export const getCovidData = (country) => {
  const url =
    country === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${country}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("Can't fetch covid data due to err:", err));
};

export const fetchLastData = async () => {
  return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
    .then((response) => {
      return response.json();
    })
    .catch((err) =>
      console.log("Can't fetch last 120 days covid data due to err:", err)
    );
};
