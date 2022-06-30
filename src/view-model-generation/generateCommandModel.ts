import { AppState } from '../appState';

export const selectCommandReducer = (state: AppState) => state.command.data;
