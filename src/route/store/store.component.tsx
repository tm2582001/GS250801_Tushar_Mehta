import { useAppSelector } from "../../utils/reducer/redux.util";

import "./store.styles.css";

const Store = () => {
  const stores = useAppSelector((state) => state.stores.stores);

//   console.log(stores);

  return (
    <div className="store-page-wrapper">
      <div className="store-page-container">
        <div className="grid-container grid-header">
          <span className="grid-header-half-border">S.No</span>
          <span className="grid-header-full-border">Store</span>
          <span className="grid-header-half-border">City</span>
          <span className="grid-header-no-border">State</span>
        </div>
        {stores.map((store) => (
          <div key={store.id} className="grid-container">
            <span className="grid-header-half-border">{store.index}</span>
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
