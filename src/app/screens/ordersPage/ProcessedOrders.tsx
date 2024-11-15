import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { createSelector } from '@reduxjs/toolkit';

import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { retrieveProcessOrders } from "./selector";

/** REDUX SLICE & SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);


export default function ProcessOrders() {
  const {processOrders} = useSelector(processOrdersRetriever)
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
              {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product | undefined = order.productData.find(
                    (ele: Product) => ele._id === item.productId
                  );

                  if (!product || !product.productImages || product.productImages.length === 0) {
                    return null; // Skip rendering if product or images are undefined
                  }

                  const imagePath = `${serverApi}/${product.productImages[0]}`;

                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img src={"/img/kebab.webp"} className={"order-dish-img"} />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>${item.itemQuantity * item.itemPrice}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal + order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <p className={"data-compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>
                <Button variant="contained" className={"verify-button"}>
                  Verify to Fulfil
                </Button>
              </Box>
            </Box>
          );
        })}

        {!processOrders || (processOrders.length === 0 &&  (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img src={"/icons/noimage-list.svg"} style={{ width: 300, height: 300 }} />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
