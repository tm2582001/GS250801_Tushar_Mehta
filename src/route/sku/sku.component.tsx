import { useAppSelector, useAppDispatch } from "../../utils/reducer/redux.util";
import { deleteSKU } from "../../store/sku/sku.action";
import DeleteIcon from "../../assets/trash-solid.svg?react";


import "../store/store.styles.css";

const Sku = ()=>{
    const skus = useAppSelector((state) => state.skus.skus);
  const dispatch = useAppDispatch();
    // console.log(skus);
    const handleDelete = (id: number) => dispatch(deleteSKU(id));
    return  <div className="store-page-wrapper">
    <div className="store-page-container">
      <div className="grid-container grid-header">
      <span className="grid-header-half-border"></span>
        <span className="grid-header-half-border">S.No</span>
        <span className="grid-header-full-border">SKU</span>
        <span className="grid-header-half-border">Price</span>
        <span className="grid-header-no-border">Cost</span>
      </div>
      {skus.map((sku, index) => (
        <div key={sku.id} className="grid-container">
            <DeleteIcon className="delete-icon grid-header-no-border" onClick={() => handleDelete(sku.index)} />
          <span className="grid-header-half-border">{index +1}</span>
          <span className="grid-container-full-border">{sku.label}</span>
          <span className="grid-header-half-border">{sku.price}</span>
          <span className="grid-header-no-border">{sku.cost}</span>
        </div>
      ))}
    </div>
  </div>
}

export default Sku;