export function resultHasErrored(state = false, action) {
    switch (action.type) {
        case 'RESULT_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function resultIsLoading(state = false, action) {
    switch (action.type) {
        case 'RESULT_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function result(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
