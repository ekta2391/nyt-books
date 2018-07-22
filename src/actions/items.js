import $ from 'jquery';
export function resultHasErrored(bool) {
    return {
        type: 'RESULT_HAS_ERRORED',
        hasErrored: bool
    };
}

export function resultIsLoading(bool) {
    return {
        type: 'RESULT_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(result) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: result
    };
}

export function resultFetchData(url) {
  alert('in action to fetch');
    return (dispatch) => {
        dispatch(resultIsLoading(true));

        $.ajax({
          url: 'http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=c22f513c6a1e477783122f38f8d0b9cc',
          type: 'GET',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(response) {
            console.log(response);
            dispatch(itemsFetchDataSuccess(response));
          },
          error: function() { alert('Failed!'); }
          // beforeSend: 'setHeader'
        })

        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //
        //         dispatch(resultIsLoading(false));
        //         return response;
        //     })
        //     .then((response) => {
        //       console.log(response);
        //     })
        //    .then((result) => {dispatch(itemsFetchDataSuccess(result.items))})
        //     .catch(() => dispatch(resultHasErrored(true)));
    };
}
