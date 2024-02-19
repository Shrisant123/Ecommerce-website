import {styled} from 'styled-components';
import Header from './Header';
import Menu from './Menu';

const Navbar=()=>{
    const Nav=styled.nav`
        height:13vh;
        width:100vw;
        display:flex;
        justify-content: center;

        div h1{
            color:white;
        }

        .logo{
            width:15vw;
        }

        .searchText ul{
            display:flex;
        }
        
        .searchText ul li{
            list-style:none;
        }

        ul li input{
            padding:1rem 10rem 1rem 10rem;
        }

        ul li button{
            padding:1rem;
        }

        ul li i{
            padding:1rem;
            border:2px solid black;
            background-color:yellow;
        }
    `
    return(
        <>
        <div className="Header_part" style={{background:'blue'}}>
        <Header />
        <div>
            <Nav className="Bar">
                <div className='logo'>
                    <h1>Tushant Mart</h1>
                </div>

                <div className="searchText">
                    <ul>
                        <li>
                            <button id="catbtn">Categories</button>
                        </li>
                        <li>
                            <input type="text" placeholder="Search here..."/>
                        </li>
                        <li>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </ul>
                </div>
            </Nav>
        </div>
        </div>
        <Menu />
        </>
    )
}

export default Navbar;

