import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import oauthWindow from './oauthWindow';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  oauth: oauthWindow,
});

export default rootReducer;
