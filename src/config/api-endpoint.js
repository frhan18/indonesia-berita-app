const API_ENDPOINT = {
  NEWS: {
    ALL: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news`,
    LATEST: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/news`,
    MARKET: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/market`,
    INVESTMENT: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/investment`,
    ENTREPRENUER: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/entrepreneur`,
    TECH: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/tech`,
    LIFESTYLE: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/lifestyle`,
    SYARIAH: `${process.env.REACT_APP_BASE_URL}/v1/cnbc-news/syariah`,
    INTERNASIONAL: `${process.env.REACT_APP_BASE_URL}/v1/cnn-news/internasional`,
    NASIONAL: `${process.env.REACT_APP_BASE_URL}/v1/cnn-news/nasional`,
    KESEHATAN: `${process.env.REACT_APP_BASE_URL}/v1/cnn-news/gaya-hidup`,
    OLAHRAGA: `${process.env.REACT_APP_BASE_URL}/v1/cnn-news/olahraga`,
    EKONOMI: `${process.env.REACT_APP_BASE_URL}/v1/cnn-news/ekonomi`,
    HIBURAN: `${process.env.REACT_APP_BASE_URL}/v1/cnn-news/hiburan`,
  },
};

export default API_ENDPOINT;
