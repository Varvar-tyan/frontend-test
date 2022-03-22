import {instance} from './instance';

export const bandsAPI = {
  getAlbums(band) {
    return instance.get(`?limit=5&term=${band}`);
  }
};
