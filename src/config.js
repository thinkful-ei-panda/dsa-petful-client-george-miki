export default {
    API_ENDPOINT: (process.env.REACT_APP_ENV === 'production')
        ? 'https://frozen-hamlet-55111.herokuapp.com/'
        : 'http://localhost:8000/',
};