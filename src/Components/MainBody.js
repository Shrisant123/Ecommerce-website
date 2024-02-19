import Categories from "./Categories";
import SideBody from "./SideBody";
import {styled} from 'styled-components';
import {Routes, Route } from "react-router-dom";
import Allshoes from "./Allshoes";
import Electronics from "./Electronics";
import Jewellery from "./Jewellery/Jewellery";
import Clothing from "./Clothing";
import Watches from "./Watches";
import HealthandBeauty from "./Health and Beauty/HealthandBeauty";
import Sports from "./Sports";
import Contact from "./Contact";
import Login from "./Registration/Login";
import Container from './Container'
import FirstHome from './FirstHome'
const MainBody = () => {
    const Div=styled.div`
        display:flex;
    `
    return (
        <>
        <Div className="MainBody1">
        <div>
            <Categories />
        </div>
        <div>
        <Routes>
        <Route path="/" element={<FirstHome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Container />}>
            <Route path="/body" element={<SideBody />} />
            <Route path="/Shoes" element={<Allshoes />} />
            <Route path="/clothes" element={<Clothing />} />
            <Route path="/jewellery" element={<Jewellery />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/HealthandBeauty" element={<HealthandBeauty />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
        </Routes>
        </div>
        </Div>
        </>
    )
}

export default MainBody;