import "../styles/Discounts.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const Discounts = (props) => {
  const calculateDiscountPrice = (originalPrice, percentDiscount) => {
    let decimal = (percentDiscount / 100).toFixed(2);
    let discountAmt = originalPrice * parseFloat(decimal);
    return originalPrice - discountAmt;
  };

  return (
    <div id="discount-container">
      <h1>Discount List</h1>
      <div id="discount-list-container">
        <Card
          sx={{
            backgroundColor: "hsl(262, 46%, 98%)",
            height: "6rem",
            borderBottom: "1px solid #342056",
          }}
        >
          <CardContent sx={{ color: "#342056" }} id="discount-details-header">
            <Typography variant="h5">Product</Typography>
            <Typography variant="h5">Original Price</Typography>
            <Typography variant="h5">Discount</Typography>
            <Typography variant="h5">Discounted Price</Typography>
            <Typography variant="h5">Start Date</Typography>
            <Typography variant="h5">End Date</Typography>
          </CardContent>
        </Card>
        {props.discounts.map((discount) => (
          <Card
            sx={{
              backgroundColor: "hsl(262, 46%, 98%)",
              height: "6rem",
              borderBottom: "1px solid #342056",
            }}
          >
            <CardContent
              sx={{ color: "#342056" }}
              className="discount-details-container"
            >
              <Typography className="discount-name">
                {discount.productName}
              </Typography>
              {/* <Typography>{discount.productName}</Typography> */}
              <Typography>${discount.productPrice}</Typography>
              <Typography>{discount.discountPercent}%</Typography>
              <Typography>
                $
                {calculateDiscountPrice(
                  discount.productPrice,
                  discount.discountPercent
                )}
              </Typography>
              <Typography>{discount.beginDate}</Typography>
              <Typography>{discount.endDate}</Typography>
              <div>
                <Button sx={{ color: "#342056" }} className="row-4">
                  Update
                </Button>
                <Button sx={{ color: "#342056" }} className="row-4 delete">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Discounts;
