import { buildApi, get, post, patch, destroy } from 'redux-bees';

const apiEndpoints = {
    /**
     * Movies
     */
    getMovies: { method: get, path: '/movies'},
    getMovie: { method: get, path: '/movies/:id' },
    createMovie: { method: post, path: '/movies' },
    updateMovie: { method: patch, path: '/movies/:id' },
    destroyMoviet: { method: destroy, path: '/movies/:id' }
};

const config = {
    baseUrl: process.env.REACT_APP_API_SERVER.slice(0, -1),
    configureHeaders(headers) {
        return {
            ...headers,
        };
    },
};

export default buildApi(apiEndpoints, config);