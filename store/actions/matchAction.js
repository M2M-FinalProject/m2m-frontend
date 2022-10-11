import axios from 'axios'
import { MATCH_FETCH_SUCCESS, MATCH_FETCH_ERROR,MATCH_FETCH_BY_ID_SUCCESS } from "./matchType";
const baseurl = `https://m2m-api.herokuapp.com`
const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjY1Mzg1ODI2fQ.osJA8iDkLKCUctKXIF6khFhxLFsEsCiea5MVpF_U9tY"

export const matchFetchSuccess = payload => {
    return {
        type: MATCH_FETCH_SUCCESS,
        payload
    }
}

export const matchFetchError = payload => {
    return {
        type: MATCH_FETCH_ERROR,
        payload
    }
}

export const fetchMatches = (query) => {
    return async dispatch => {
        try{
            const {data} = await axios.get(baseurl + '/matches',{
                headers : {
                    access_token : access_token
                }
            })
            await dispatch(matchFetchSuccess(data))
        } catch(e){
            console.log(e);
            await dispatch(matchFetchError(e.message))
        }
    }
}

// export const addProducts = (payload) => {
//     return dispatch => {
//         dispatch(toggleLoadingOn())
//         return fetch(baseUrl + '/products', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 access_token: localStorage.getItem('access_token')
//             },
//             body: JSON.stringify(payload)
//         })
//             .then(res => {
//                 if (res.ok) return res.json()
//                 else return res.text().then(text => { throw JSON.parse(text) })
//             })
//             .catch(err => {
//                 dispatch(productFetchError(err))
//             })
//             .finally(() => {
//                 dispatch(toggleLoadingOff())
//             })

//     }
// }

// export const editProduct = (payload) => {
//     return dispatch => {
//         dispatch(toggleLoadingOn())
//         return fetch(baseUrl + '/products/' + payload.product.id, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 access_token: localStorage.getItem('access_token')
//             },
//             body: JSON.stringify(payload)
//         })
//             .then(res => {
//                 if (res.ok) return
//                 else return res.text().then(text => { throw JSON.parse(text) })
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch(productFetchError(err))
//             })
//             .finally(() => {
//                 dispatch(toggleLoadingOff())
//             })
//     }
// }

// export const deleteProduct = (payload) => {
//     return dispatch => {
//         dispatch(toggleLoadingOn())
//         return fetch(baseUrl + '/products/' + payload.id, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 access_token: localStorage.getItem('access_token')
//             },
//             body: JSON.stringify(payload)
//         })
//             .then(res => {
//                 if (res.ok) return res.json()
//                 else return res.text().then(text => { throw JSON.parse(text) })
//             })
//             .catch(err => {
//                 dispatch(productFetchError(err))
//             })
//             .finally(() => {
//                 dispatch(toggleLoadingOff())
//             })
//     }
// }
