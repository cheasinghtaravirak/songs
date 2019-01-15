import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'He lives in you', duration: '4:51' },
    { title: 'Circle of life', duration: '3:50' },
    { title: 'Fix you', duration: '4:10' },
    { title: 'Scientist', duration: '4:00' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
