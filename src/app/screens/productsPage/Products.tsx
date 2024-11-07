import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product-enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));


export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  useEffect(() => {
      const product = new ProductService();
      product
          .getProducts({
              page: 1,
              limit: 8,
              order: "createdAt",
              productCollection: ProductCollection.DISH,
              search: "",
          })
          .then((data) => setProducts(data))
          .catch((err) => console.log(err));
  }, []);

    return (
      <div className={"products"}>
        <Container>
          <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className="main-title">
              <Box className={"title"}>Burak Restaurant</Box>
              <Stack className="single-search-form">
                <input
                className="search-box"
                type="text"
                placeholder="Type here..."
                />
                <Button
                color={"primary"} 
                variant={"contained"}
                className={"search-btn"}
                >
                  SEARCH
                  <SearchIcon />
                </Button>
              </Stack>
            </Stack>
          </Stack>
            <Stack className={"dishes-filter-section"}>
              <Stack className={"dishes-filter-box"}>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  className={"order"}
                >
                  New
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  Price
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  Views
                </Button>
              </Stack>
            </Stack>
  
            <Stack className={"list-category-section"}>
              <Stack className={"product-category"}>
                <div className={"category-main"}>
                  <Button variant={"contained"} color={"secondary"}>
                    Other
                  </Button>
                  <Button variant={"contained"} color={"primary"}>
                    Dessert
                  </Button>
                  <Button variant={"contained"} color={"primary"}>
                    Drink
                  </Button>
                  <Button variant={"contained"} color={"primary"}>
                    Salad
                  </Button>
                  <Button variant={"contained"} color={"primary"}>
                    Dish
                  </Button>
                </div>
              </Stack>
  
              <Stack className={"product-wrapper"}>
                {products.length !== 0 ? (
                  products.map((product:Product) => {
                    const imagePath = `${serverApi}/${product.productImages[0]}`
                    const sizeVolume = product.productCollection === ProductCollection.DRINK ? product.productVolume + " liter" : product.productSize + " size"
                    return (
                      <Stack key={product._id} className={"product-card"}>
                        <Stack
                          className={"product-img"}
                          sx={{ backgroundImage: `url(${imagePath})` }}
                        >
                          <div className={"product-sale"}>{sizeVolume}</div>
                          <Button className={"shop-btn"}>
                            <img
                              src="/icons/shopping-cart.svg"
                              style={{ display: "flex" }}
                            />
                          </Button>
                          <Button className={"view-btn"} sx={{ right: "36px" }}>
                            <Badge badgeContent={product.productViews} color="secondary">
                              <RemoveRedEyeIcon
                                sx={{
                                  color: product.productViews === 0 ? "grey" : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Stack>
                        <Box className={"product-desc"}>
                          <span className={"product-title"}>
                            {product.productName}
                          </span>
                          <div className={"product-desc"}>
                            <MonetizationOnIcon />
                            {product.productPrice}
                          </div>
                        </Box>
                      </Stack>
                    );
                  })
                ) : (
                  <Box className="no-data">Products are not available!</Box>
                )}
              </Stack>
            </Stack>
  
            <Stack className={"pagination-section"}>
              <Pagination
                count={3}
                page={1}
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                    color={"secondary"}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Container>
  
        <div className={"brands-logo"}>
          <Container className={"family-brands"}>
            <Box className={"category-title"}>Our Family Brands</Box>
            <Stack className={"brand-list"}>
              <Box className={"review-box"}>
                <img src={"/img/gurme.webp"} />
              </Box>
              <Box className={"review-box"}>
                <img src={"/img/sweets.webp"} />
              </Box>
              <Box className={"review-box"}>
                <img src={"/img/seafood.webp"} />
              </Box>
              <Box className={"review-box"}>
                <img src={"/img/doner.webp"} />
              </Box>
            </Stack>
          </Container>
        </div>
  
        <div className={"address"}>
          <Container>
            <Stack className={"address-area"}>
              <Box className={"title"}>Our address</Box>
              <iframe
                style={{ marginTop: "60px" }}
                src="https://www.google.com/maps/d/embed?mid=1XK-f2FfchtNWmKA9DGrUzHvnTD8&f=q&source=s_q&hl=pt-BR&geocode&q=Anam-dong%20Seongbuk-Gu%2C%20Seoul%2C%20136-701%20Korea&ie=UTF8&oe=UTF8&msa=0&sll=37.585838%2C127.021353&sspn=0.020749%2C0.028168&ll=37.59253999999999%2C127.02774499999997&spn=0.00777%2C0.013797&z=16&output=embed"
                width="1320"
                height="500"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Stack>
          </Container>
        </div>
      </div>
    );
  }