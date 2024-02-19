import { styled } from 'styled-components'
import { NavLink} from "react-router-dom";
const Header = () => {
    const Div = styled.div`
        width:100vw;

        button{
            margin-left:45rem;
            display:none;
        }
        button i{
            font-size:1.5rem;
        }

        div{
            margin-left:30rem;
        }

        ul{
            display:flex;
        }

        ul li{
            list-style:none;
            font-size:0.9rem;
            padding:1rem;
            color:white;
            font-weight:bold;
        }
        li a{
            text-decoration:none;
            color:white;
        }
    `
    return (
        <>
            <Div>
            <button onClick={()=>{document.getElementsByClassName('Header')[0].style.display='block'}} id="btn1"><i class="fa-solid fa-bars"></i></button>
                <div className="Header">
                    <ul>
                        <li>
                            USD <i class="fa-solid fa-caret-down"></i>
                        </li>
                        <li>
                            English <i class="fa-solid fa-caret-down"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-user"></i> My Account
                        </li>
                        <li>
                            <i class="fa-solid fa-heart"></i> Wishlist
                        </li>
                        <li>
                            <i class="fa-solid fa-cart-shopping"></i> My Cart
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i> Checkout
                        </li>
                        <li>
                            <i class="fa-solid fa-lock"></i> <NavLink to="/Login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </Div>
        </>
    )
}

export default Header;