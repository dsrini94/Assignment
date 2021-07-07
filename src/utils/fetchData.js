

const fetchAPI = (url) => (fetch(url))

function makeMultipleFetchCalls(URLs){
    let fetchAPIArray = URLs.map((URL) => fetchAPI(URL));
    return Promise.all(fetchAPIArray).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        return data
    }).catch((err) => console.error(err));
}

export default makeMultipleFetchCalls;