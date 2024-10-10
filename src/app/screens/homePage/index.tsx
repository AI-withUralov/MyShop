import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import '../../../css/home.css'


 export default function HomePage() {
    return (
    <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
    </div>)

    
  }
  