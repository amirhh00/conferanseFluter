import { combineReducers } from 'redux';
import * as types from './actions';

const sideMenu = (state = false, action) => {
  switch (action.type) {
    case types.MENU_OPEN:
      return true;
    case types.MENU_CLOSE:
      return false;
    default:
      return state;
  }
};

const search = (state = false, action) => {
  switch (action.type) {
    case types.SEARCH_OPEN:
      return true;
    case types.SEARCH_CLOSE:
      return false;
    default:
      return state;
  }
};

const defaultSize = {
  width : 0,
  height : 0
}
const resize = (state = defaultSize, action = {}) => {
  switch (action.type) {
    case types.DEVICE_RESIZE:
      return {
        width : action.width,
        height : action.height,
      };
    default:
      return state;
  }
};

const defaultColor = {
  color : '#000000',
  bg : '#00000000'
}
const navLinkColor = (state = defaultColor, action = {}) => {
  switch (action.type) {
    case types.NAV_COLOR:
      return {
        color : action.color,
        bg : action.bg,
      };
    default:
      return state;
  }
};

export const isMenuVisible = state => state.sideMenu;
export const isSearchVisible = state => state.search;

export default combineReducers({ sideMenu, search , resize ,navLinkColor });
