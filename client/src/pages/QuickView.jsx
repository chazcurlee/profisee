import Paper from "@mui/material/Paper";
import "../styles/QuickView.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const QuickView = (props) => {
  const [salesCount, setSalesCount] = useState([]);
  const [sortTrigger, setSortTrigger] = useState(false);
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const qtrMatch = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  const [quarter, setQuarter] = useState();

  const determineQtr = (month) => {
    if (qtrMatch[0] === month) {
      return 1;
    }
    if (qtrMatch[1] === month) {
      return 2;
    }
    if (qtrMatch[2] === month) {
      return 3;
    }
    if (qtrMatch[3] === month) {
      return 4;
    }
  };

  const addOrReplace = (finalObj, firstObj) => {
    if (!finalObj[firstObj.salesPersonId]) {
      finalObj[firstObj.salesPersonId] = {
        name:
          firstObj.salesPersonFirstName + " " + firstObj.salesPersonLastName,
        count: 1,
      };
      return;
    }

    finalObj[firstObj.salesPersonId] = {
      ...finalObj[firstObj.salesPersonId],
      count: (finalObj[firstObj.salesPersonId].count += 1),
    };
  };

  const orderQtrSales = (saleInfo) => {
    let sortedArr = saleInfo.slice();
    if (sortTrigger && sortedArr.length > 0) {
      console.log(sortedArr);
      sortedArr.sort((a, b) => {
        return b.count - a.count;
      });
      console.log(sortedArr);

      setSalesCount(sortedArr);
      setSortTrigger(false);
    }
    if (!sortTrigger && sortedArr.length === 0) {
      setSortTrigger(true);
    }
  };

  useEffect(() => {
    setQuarter(determineQtr(currentMonth));

    if (!salesCount[0]) {
      let tempObjArr = [];
      let tempObj = {};
      props.sales.map((sale) => {
        let tempArr = sale.salesDate.split("-");
        tempArr.splice(2, 1);
        let tempQtr = determineQtr(parseInt(tempArr[1]));

        if (parseInt(tempArr[0] != currentYear)) {
          return;
        }
        if (tempQtr != quarter) {
          return;
        }
        addOrReplace(tempObj, sale);
      });

      for (let key in tempObj) {
        let obj = { name: tempObj[key].name, count: tempObj[key].count };
        tempObjArr.push(obj);
      }
      setSalesCount(tempObjArr);
    }
  }, []);

  orderQtrSales(salesCount);

  return (
    <div id="quick-container">
      <div>
        <h1 id="quick-title">Quick View</h1>
      </div>
      <div id="quick-data-container">
        <Paper
          style={{ color: "#342056" }}
          elevation={5}
          className="data-placement-left"
        >
          <h2 id="qtr-sales-header">Current Quarter Sales</h2>
          {salesCount.map((sale) => (
            <div key={sale.id} className="sales-count-container">
              <p>{sale.name}</p>
              <p>{sale.count}</p>
            </div>
            // {orderQtrSales(sale)}
          ))}
        </Paper>
        <div className="data-placement-right">
          <Card
            className="last-five-sales"
            sx={{
              borderBottom: "1px solid #342056",
              backgroundColor: "hsl(262, 46%, 98%)",
            }}
          >
            <CardContent>
              <Typography id="recent-sales-title" sx={{ fontSize: "2rem" }}>
                Most Recent Sales
              </Typography>
            </CardContent>
          </Card>
          {props.recentSales.map((sale) => (
            <Card
              key={sale.id}
              className="last-five-sales"
              sx={{
                borderBottom: "1px solid #342056",
                backgroundColor: "hsl(262, 46%, 98%)",
              }}
            >
              <CardContent className="recent-sale-details">
                <Typography className="recent-sale-detail-container">
                  SalesPerson: {sale.salesPersonFirstName}{" "}
                  {sale.salesPersonLastName}
                </Typography>
                <Typography className="recent-sale-detail-container">
                  Product Sold: {sale.productName}
                </Typography>
                <Typography className="recent-sale-detail-container">
                  Customer Name: {sale.customerFirstName}{" "}
                  {sale.customerLastName}
                </Typography>
                <Typography className="recent-sale-detail-container">
                  Date Sold: {sale.salesDate}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickView;
