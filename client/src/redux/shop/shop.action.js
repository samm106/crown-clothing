import shopActionTypes from "./shop.types";


export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStartAsync)
//     collectionRef.get().then(snapshot => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       dispatch(fetchCollecionsSuccess(collectionsMap));

      
//     }).catch(error => dispatch(fetchCollecionsFailure(error.message)));
//   }
// }