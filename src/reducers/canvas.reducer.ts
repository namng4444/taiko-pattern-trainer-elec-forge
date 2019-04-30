export enum CanvasMode {
  Edit,
  Play,
}

export interface CanvasState {
  savedPattern: string;
  mode: CanvasMode;
}

const initialState: CanvasState = {
  savedPattern: '',
  mode: CanvasMode.Edit,
};

const canvasReducer = (state = initialState): CanvasState => state;

export default canvasReducer;
