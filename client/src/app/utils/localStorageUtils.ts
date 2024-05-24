import { RootState } from "../store";

export const loadStore = (): RootState | undefined => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
          return undefined;
        }
        return JSON.parse(serializedState) as RootState;
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
}

export const saveStore = (state: RootState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.error('Could not save state', err);
    }
}