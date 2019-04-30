import { combineReducers } from 'redux';

import canvasReducer, { CanvasMode } from './canvas.reducer';

const rootReducer = combineReducers({
  canvas: canvasReducer,
});

type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

export { CanvasMode, AppState };
