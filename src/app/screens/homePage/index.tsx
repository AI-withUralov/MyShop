import { Container } from "@mui/material";
import Statistics from "./Statistics";
import Advertisement from "./Advertisement";
import ActiveUsers from "./AcitveUsers";
import Events from "./Events";
import { useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewClothes, setPopularClothes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import { useEffect } from "react";
import { ProductCollection } from "../../../lib/enums/product-enum";
import ProductService from "../../services/ProductService"
import { Member } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import '../../../css/home.css'
import PopularClothes from "./PopularClothes";
import NewClothes from "./NewClothes";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularClothes: (data: Product[]) => dispatch(setPopularClothes(data)), // 2-- bu Slice.ts ni ichida gi mantiq orqali storega joylaydi
  setNewClothes: (data: Product[]) => dispatch(setNewClothes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
});


export default function HomePage() {
  const { setPopularClothes, setNewClothes, setTopUsers } = actionDispatch(useDispatch());

useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product
        .getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            productCollection: ProductCollection.MEN,
        })
        .then((data) => {
          setPopularClothes(data);    /// 1-- Backenddan kelgan malumotni slice ga (Dispatch) beramiz
          console.log("Data log: ", data)
        })
        .catch((err) => console.log(err));

    product
        .getProducts({
            page: 1,
            limit: 4,
            order: "createdAt",
        })
        .then((data) => {setNewClothes(data);console.log("datatest",data)})  // New Clothes data
        
        .catch((err) => console.log(err));
    
    const member = new MemberService();
    member
        .getTopUsers()
        .then((data) => setTopUsers(data)) // Top Users data
        .catch((err) => console.log(err));
    
}, []);



  return (
    <div className="homepage">
      <Statistics />
      <PopularClothes />
      <NewClothes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
