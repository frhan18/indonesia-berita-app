import CONFIG from "./config";

const API_ENDPOINT = {
  NEWS: {
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
  },
};

export default API_ENDPOINT;
