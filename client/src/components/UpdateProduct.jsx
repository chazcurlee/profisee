import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateProduct = (props) => {
  const [productEditedUpdate, setProductEditedUpdate] = useState({});

  const handleClose = () => {
    props.setUpdateTrigger(false);
  };

  const handleChange = (e) => {
    const updatedId = e.target.id;
    const value = e.target.value;
    const clonedObj = structuredClone(props.updateProduct);
    clonedObj[updatedId] = value;
    setProductEditedUpdate(clonedObj);
  };

  const handleSubmit = async () => {
    let updatedInfo = await axios.put(
      `http://localhost:3001/products/${props.updateProduct.id}`,
      {
        name: productEditedUpdate.name,
        manufacturer: productEditedUpdate.manufacturer,
        style: productEditedUpdate.style,
        purchasedPrice: productEditedUpdate.purchasedPrice,
        salePrice: productEditedUpdate.salePrice,
        currentQuantity: productEditedUpdate.currentQuantity,
        commissionPercent: productEditedUpdate.commissionPercent,
      }
    );
    props.setUpdateTrigger(false);
    window.location.reload();
  };

  useEffect(() => {
    setProductEditedUpdate({
      name: props.updateProduct.name,
      manufacturer: props.updateProduct.manufacturer,
      style: props.updateProduct.style,
      purchasedPrice: props.updateProduct.purchasedPrice,
      salePrice: props.updateProduct.salePrice,
      currentQuantity: props.updateProduct.currentQuantity,
      commissionPercent: props.updateProduct.commissionPercent,
    });
  }, []);

  return (
    <form>
      <Dialog open={props.updateTrigger} onClose={handleClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <InputLabel>Name</InputLabel>
          <TextField
            className="product-update-container"
            id="name"
            defaultValue={props.updateProduct.name}
            onChange={handleChange}
          />
          <InputLabel>Manufacturer</InputLabel>
          <TextField
            className="product-update-container"
            id="manufacturer"
            defaultValue={props.updateProduct.manufacturer}
            onChange={handleChange}
          />
          <InputLabel>Style</InputLabel>
          <TextField
            className="product-update-container"
            id="style"
            defaultValue={props.updateProduct.style}
            onChange={handleChange}
          />
          <InputLabel>Purchase Price</InputLabel>
          <TextField
            className="product-update-container"
            id="purchasedPrice"
            defaultValue={props.updateProduct.purchasePrice}
            onChange={handleChange}
          />
          <InputLabel>Sale Price</InputLabel>
          <TextField
            className="product-update-container"
            id="salePrice"
            defaultValue={props.updateProduct.salePrice}
            onChange={handleChange}
          />
          <InputLabel>Current Quantity</InputLabel>
          <TextField
            className="product-update-container"
            id="currentQuantity"
            defaultValue={props.updateProduct.currentQuantity}
          />
          <InputLabel>Commission Percentage</InputLabel>
          <TextField
            className="product-update-container"
            id="commissionPercent"
            defaultValue={props.updateProduct.commissionPercent}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default UpdateProduct;
