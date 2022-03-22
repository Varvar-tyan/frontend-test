import {bandsAPI} from '../api/bandsApi';
import {failBands, loadBands, setBandsSuccess} from './actionCreators';

export const getBands = (band) => async dispatch => {
  dispatch(loadBands());
  try {
    const {data: {results}} = await bandsAPI.getAlbums(band);

    const albums = results.map((band) => band.collectionName);
    albums.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    dispatch(setBandsSuccess(albums));
  } catch (e) {
    dispatch(failBands(e));
  }
};
