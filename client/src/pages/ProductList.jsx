import "../styles/ProductList.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const ProductList = (props) => {
  return (
    <div id="product-container">
      <h1>Product List</h1>
      <div id="product-list-container">
        {props.products.map((product) => (
          <Card>
            <CardContent className="product-details-container">
              <Typography className="product-name">
                {product.manufacturer} {product.name}
              </Typography>
              <Typography>Style: {product.style}</Typography>
              <Typography>
                Amount in Stock: {product.currentQuantity}
              </Typography>
              <Typography>Purchase Price: {product.purchasePrice}</Typography>
              <Typography>Sale Price: {product.salePrice}</Typography>
              <Typography>
                Commission Percentage: {product.commissionPercent}%
              </Typography>
              <Button className="row-4">Update</Button>
              <Button className="row-4 delete">Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
