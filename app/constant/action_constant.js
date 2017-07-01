
// actions for player
export const UPDATE_LYRIC = 'UPDATE_LYRIC';
export const UPDATE_LYRIC_PERCENT = 'UPDATE_LYRIC_PERCENT';
export const UPDATE_PLAYED_PERCENT = 'UPDATE_PLAYED_PERCENT';

// actions for song header progress control
export const UPDATE_SONG_DURATION = 'UPDATE_SONG_DURATION';
export const UPDATE_SONG_CURRENT_TIME = 'UPDATE_SONG_CURRENT_TIME';
export const FULLFILL_SEEKBAR = 'FULLFILL_SEEKBAR';
export const UNFULLFILL_SEEKBAR = 'UNFULLFILL_SEEKBAR';

// actions for song
export const START_FETCHING_SONG = 'START_FETCHING_SONG';
export const FETCH_SONG_SUCCESS = 'FETCH_SONG_SUCCESS';
export const FETCH_SONG_FAILURE = 'FETCH_SONG_FAILURE';
export const FETCH_SUGGESTED_SONG_SUCCESS = 'FETCH_SUGGESTED_SONG_SUCCESS';

// action for albums
export const FETCH_DEFAULT_ALBUMS = 'FETCH_DEFAULT_ALBUMS';
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const CLEAR_ALBUMS = 'CLEAR_ALBUMS';
export const SET_NUMBER_OF_PAGES = ' SET_NUMBER_OF_PAGES';
export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
export const CHANGE_PAGE_CHUNK_INDEX = 'CHANGE_PAGE_CHUNK_INDEX';
export const FETCH_ALBUM_PLAYLIST = 'FETCH_ALBUM_PLAYLIST';

// actions for homepage
export const FETCH_TRACKS = 'FETCH_TRACKS';

// acitons for UI
export const SHOW_ANALYZER = 'SHOW_ANALYZER';
export const HIDE_ANALYZER = 'HIDE_ANALYZER';
export const TOGGLE_TRACK_DROPDOWN = 'TOGGLE_TRACK_DROPDOWN';
export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE';
export const TOGGLE_QUEUE = 'TOGGLE_QUEUE';

// actions for handling route transition
export const TOGGLE_PUSH_ROUTE = 'TOGGLE_PUSH_ROUTE';