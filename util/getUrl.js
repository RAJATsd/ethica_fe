const baseUrl = () =>
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3001"
    : "https://sentiment-analysis-besl.onrender.com";

const getUrl = (url) => `${baseUrl()}/${url}`;

export default getUrl;
