const API_KEY =

export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=5d15423ebbc3ef7e9bf602214ba3803837467ea466f6e2a71fc999c95e174690`
  ).then((r) => r.json());
