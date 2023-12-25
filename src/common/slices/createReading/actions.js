export const CREATE_READING_INIT = 'CREATE_READING_INIT';
export const CREATE_READING_SUCCESS = 'CREATE_READING_SUCCESS';
export const CREATE_READING_ERROR = 'CREATE_READING_ERROR';
export const RESET_CREATE_READING = 'RESET_CREATE_READING';

export const createReadingInit = (payload) => ({ type: CREATE_READING_INIT, payload });
export const createReadingSuccess = (payload) => ({ type: CREATE_READING_SUCCESS, payload });
export const createReadingError = (error) => ({ type: CREATE_READING_ERROR, error });
export const resetCreateReading = () => ({ type: RESET_CREATE_READING });