import "../styles/ProductList.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import UpdateProduct from "../components/UpdateProduct";
import { useState } from "react";
import axios from "axios";

const ProductList = (props) => {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({});

  const handleButtonClick = (product) => {
    setUpdateProduct(product);
    setUpdateTrigger(true);
  };

  const handleDelete = async (product) => {
    let deletedProduct = await axios.delete(
      `http://localhost:3001/products/${props.updateProduct.id}`
    );
  };

  const calculateDiscountPrice = (originalPrice, percentDiscount) => {
    let decimal = (percentDiscount / 100).toFixed(2);
    let discountAmt = originalPrice * parseFloat(decimal);
    return originalPrice - discountAmt;
  };

  return (
    <div id="product-container">
      <h1>Product List</h1>
      <div id="product-list-container">
        <Card>
          <CardContent id="product-details-header">
            <Typography variant="h5">Manufacturer</Typography>
            <Typography variant="h5">Name</Typography>
            <Typography variant="h5">Style</Typography>
            <Typography variant="h5">Amount in Stock</Typography>
            <Typography variant="h5">Purchase Price</Typography>
            <Typography variant="h5">Sale Price</Typography>
            <Typography variant="h5">Commission Percent</Typography>
            <Typography variant="h5">Discount Price</Typography>
          </CardContent>
        </Card>
        {props.products.map((product) => (
          <Card>
            <CardContent className="product-details-container">
              <Typography className="product-name">
                {product.manufacturer}
              </Typography>
              <Typography>{product.name}</Typography>
              <Typography>{product.style}</Typography>
              <Typography>{product.currentQuantity}</Typography>
              <Typography>${product.purchasePrice}</Typography>
              <Typography>${product.salePrice}</Typography>
              <Typography>{product.commissionPercent}%</Typography>
              <Typography>
                $
                {calculateDiscountPrice(
                  product.salePrice,
                  product.Discounts[0].discountPercent
                )}
              </Typography>
              <div>
                <Button
                  onClick={() => handleButtonClick(product)}
                  className="row-4"
                >
                  Update
                </Button>
                <Button className="row-4 delete">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <UpdateProduct
        updateProduct={updateProduct}
        updateTrigger={updateTrigger}
        setUpdateTrigger={setUpdateTrigger}
      />
    </div>
  );
};

export default ProductList;
