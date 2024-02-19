import { NavLink } from 'react-router-dom';
import {styled} from 'styled-components'

const Categories=()=>{
    const Div=styled.div`
        .main_categories{
            width:20vw;
        }

        ul li{
            padding:0.4rem 0rem 0.4rem 2rem;
            list-style:none;
            text-decoration:none;
        }

        ul li a{
            text-decoration:none;
            font-size:1.3rem;
        }

        ul{
            margin:2rem 0rem 0rem 5rem;
        }
    `
    return(
        <>
            <Div>
                <div className="main_categories">
                    <ul>
                        <li>
                        <i class="fa-solid fa-briefcase"></i> <NavLink to="/clothes">Clothing</NavLink>
                        </li>
                        <li>
                        <i class="fa-solid fa-guitar"></i> <NavLink to="/electronics">Electronics</NavLink>
                        </li>
                        <li>
                        <i class="fa-solid fa-shoe-prints"></i> <NavLink to="/shoes">Shoes</NavLink>
                        </li>
                        <li>
                        <i class="fa-solid fa-stopwatch"></i> <NavLink to="watches">Watches</NavLink>
                        </li>
                        <li>
                        <i class="fa-solid fa-ring"></i> <NavLink to="/jewellery">jewellery</NavLink>
                        </li>
                        <li>
                        <i class="fa-solid fa-notes-medical"></i> <NavLink to="/HealthandBeauty">Health and Beauty</NavLink>
                        </li>
                        <li>
                        <i class="fa-solid fa-baseball"></i> <NavLink to="/sports">Sports</NavLink> 
                        </li>
                    </ul>
                </div>
            </Div>
        </>
    )
}

export default Categories;