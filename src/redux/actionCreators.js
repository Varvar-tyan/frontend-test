export const GET_BANDS = 'GET_BANDS';
export const GET_BANDS_SUCCESS = 'GET_BANDS_SUCCESS';
export const GET_BANDS_FAIL = 'GET_BANDS_FAIL';

export const loadBands = () => ({type: GET_BANDS});
export const setBandsSuccess = (albums) => ({type: GET_BANDS_SUCCESS, albums});
export const failBands = (error) => ({type: GET_BANDS_FAIL, error});
