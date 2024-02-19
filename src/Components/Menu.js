import { styled } from 'styled-components'
import { NavLink} from 'react-router-dom'

const Menu = () => {
    const Div = styled.div`
    width:100vw;
    background:darkblue;

    ul{
        display:flex;
    }
    ul li{
        list-style:none;
        font-size:1rem;
        padding:1rem;
        color:white;
        font-family:sans-serif;
    }

    li a{
        text-decoration:none;
        font-size1.2rem;
        color:white;
    }
    `
    return (
        <>
            
            <Div>
                <div className="Menu">
                    <ul>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/clothes">Clothing</NavLink>
                        </li>
                        <li>
                        <NavLink to="/electronics">Electronics</NavLink>
                        </li>
                        <li>
                        <NavLink to="/HealthandBeauty">Health and Beauty</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Watches">Watches</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Jewellery">Jewellery</NavLink>
                        </li>
                        <li>
                        <NavLink to="/shoes">Shoes</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>     
            </Div>
        </>
    )
}

export default Menu;