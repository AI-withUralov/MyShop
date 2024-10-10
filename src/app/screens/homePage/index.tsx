import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import '../../../css/home.css'
import NewDishes from "./NewDishes";


 export default function HomePage() {
    return (
    <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
    </div>)

    
  }
  