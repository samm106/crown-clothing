import "./collection.style.scss";
import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
// import { firestore } from "../../firebase/firebase.utils";

const collectionPage = ({ collection }) => {
  // useEffect(() => {
  //   const unsubscribeFromCollections = firestore
  //     .collection("collections")
  //     .onSnapshot((snapshot) => console.log(snapshot));
  //   return () => {
  //     console.log("i am unsubscribing");
  //     unsubscribeFromCollections();
  //   };
  // },[]);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(collectionPage);
