import { useAppSelector, useAppDispatch } from "../../utils/reducer/redux.util";
import { deleteStore } from "../../store/storehandler/store.action";
import DeleteIcon from "../../assets/trash-solid.svg?react";

import "./store.styles.css";

const Store = () => {
  const stores = useAppSelector((state) => state.stores.stores);
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => dispatch(deleteStore(id));

  //   console.log(stores);

  return (
    <div className="store-page-wrapper">
      <div className="store-page-container">
        <div className="grid-container grid-header">
          <span className="grid-header-half-border"></span>
          <span className="grid-header-half-border">S.No</span>
          <span className="grid-header-full-border">Store</span>
          <span className="grid-header-half-border">City</span>
          <span className="grid-header-no-border">State</span>
        </div>
        {stores.map((store, index) => (
          <div key={store.id} className="grid-container">
            <DeleteIcon className="delete-icon grid-header-no-border" onClick={() => handleDelete(store.index)} />
            <span className="grid-header-half-border">{index + 1}</span>
            <span className="grid-container-full-border">{store.label}</span>
            <span className="grid-header-half-border">{store.city}</span>
            <span className="grid-header-no-border">{store.state}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
