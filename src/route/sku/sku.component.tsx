import { useAppSelector } from "../../utils/reducer/redux.util";


import "../store/store.styles.css";

const Sku = ()=>{
    const skus = useAppSelector((state) => state.skus.skus);
    // console.log(skus);

    return  <div className="store-page-wrapper">
    <div className="store-page-container">
      <div className="grid-container grid-header">
        <span className="grid-header-half-border">S.No</span>
        <span className="grid-header-full-border">SKU</span>
        <span className="grid-header-half-border">Price</span>
        <span className="grid-header-no-border">Cost</span>
      </div>
      {skus.map((sku) => (
        <div key={sku.id} className="grid-container">
          <span className="grid-header-half-border">{sku.index}</span>
          <span className="grid-container-full-border">{sku.label}</span>
          <span className="grid-header-half-border">{sku.price}</span>
          <span className="grid-header-no-border">{sku.cost}</span>
        </div>
      ))}
    </div>
  </div>
}

export default Sku;