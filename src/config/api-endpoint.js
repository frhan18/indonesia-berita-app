import CONFIG from "./config";

const API_ENDPOINT = {
  NEWS: {
    TRENDING: `${CONFIG.BASE_URL}/v2/top-headlines?country=id&apikey=${process.env.REACT_APP_API_KEY}`,
    TECNOLOGY: `${CONFIG.BASE_URL}/v2/top-headlines?country=id&category=technology&apikey=${process.env.REACT_APP_API_KEY}`,
    ENTERTAINMENT: `${CONFIG.BASE_URL}/v2/top-headlines?country=id&category=entertainment&apikey=${process.env.REACT_APP_API_KEY}`,
    SPORTS: `${CONFIG.BASE_URL}/v2/top-headlines?country=id&category=sports&apikey=${process.env.REACT_APP_API_KEY}`,
    BUSINESS: `${CONFIG.BASE_URL}/v2/top-headlines?country=id&category=business&apikey=${process.env.REACT_APP_API_KEY}`,

    CNN: {
      ALL: `${CONFIG.BASE_URL}/v1/cnn-news`,
      NASIONAL: `${CONFIG.BASE_URL}/v1/cnn-news/nasional`,
      INTERNASIONAL: `${CONFIG.BASE_URL}/v1/cnn-news/internasional`,
      EKONOMI: `${CONFIG.BASE_URL}/v1/cnn-news/ekonomi`,
      OLAHRAGA: `${CONFIG.BASE_URL}/v1/cnn-news/olahraga`,
      HIBURAN: `${CONFIG.BASE_URL}/v1/cnn-news/hiburan`,
      GAYA_HIDUP: `${CONFIG.BASE_URL}/v1/cnn-news/gaya-hidup`,
    },

    CNBC: {
      ALL: `${CONFIG.BASE_URL}/v1/cnbc-news`,
      NEWS: `${CONFIG.BASE_URL}/v1/cnbc-news/news`,
      MARKET: `${CONFIG.BASE_URL}/v1/cnbc-news/market`,
      INVESTMENT: `${CONFIG.BASE_URL}/v1/cnbc-news/investment`,
      ENTREPRENEUR: `${CONFIG.BASE_URL}/v1/cnbc-news/entrepreneur`,
      SYARIAH: `${CONFIG.BASE_URL}/v1/cnbc-news/syariah`,
      TECH: `${CONFIG.BASE_URL}/v1/cnbc-news/tech`,
      LIFESTYLE: `${CONFIG.BASE_URL}/v1/cnbc-news/lifestyle`,
    },

    BBC: {
      ALL: `${CONFIG.BASE_URL}/v1/bbc-news`,
      DUNIA: `${CONFIG.BASE_URL}/v1/bbc-news/dunia`,
      BERITA_INDONESIA: `${CONFIG.BASE_URL}/v1/bbc-news/berita_indonesia`,
      MAJALAH: `${CONFIG.BASE_URL}/v1/bbc-news/majalah`,
      OLAHRAGA: `${CONFIG.BASE_URL}/v1/bbc-news/olahraga`,
      MULTIMEDIA: `${CONFIG.BASE_URL}/v1/bbc-news/multimedia`,
    },

    JAWAPOST: {
      PENDIDIKAN: `${CONFIG.BASE_URL}/v1/jawa-pos/pendidikan`,
    },
  },
};

export default API_ENDPOINT;
