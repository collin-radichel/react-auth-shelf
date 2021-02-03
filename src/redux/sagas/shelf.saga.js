import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// GETs all items from server, sends to reducer
function* fetchShelf() {
    try {
        const response = yield axios.get('/api/shelf');
        console.log('fetchShelf response.data:', response.data);
        yield put({ type: 'SET_SHELF', payload: response.data })
    } catch (err) {
        console.log('error in fetchShelf', err);

    }
}

// takes item from client, sends to server, gets shelf again
function* addToShelf(action) {
    try {
        const newItem = action.payload;
        console.log("newItem to add:", newItem);
        yield axios.post("/api/shelf", { newItem });
        yield put({ type: 'FETCH_SHELF' });
    } catch (err) {
        console.log('error in addToShelf', err);
    }
}

// takes ID from client, sends to server, gets shelf again
function* deleteItem(action) {
    try {
        const deleteID = action.payload.id;
        console.log('deleting item with id:', deleteID);
        yield axios.delete(`/api/shelf/${deleteID}`);
        yield put({ type: 'FETCH_SHELF' });
    } catch (err) {
        console.log('error in deleteItem', err);

    }
}

function* shelfSaga() {
    yield takeEvery('FETCH_SHELF', fetchShelf);
    yield takeEvery('ADD_ITEM', addToShelf);
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default shelfSaga;