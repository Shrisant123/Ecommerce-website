import WomenRing from '../womenRing.jfif'
import MenRing from '../MenRing.jfif'
import Pandora from '../Pandora.jfif'
import Modernjew from '../Modernjew.jfif'
import Jewelery from '../Jewelery.jfif'
import { Rating } from '@mui/material'

import {styled} from 'styled-components'
const Jewellery=()=>{
    const Electronic = styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:6rem;
    margin-top:2rem;
    

    .electronics .image img{
            height: 30vh;
            width:20vw;
    }

    h1{
        font-size:1.2rem;
        font-family:sans-serif;
    }
    p{
        font-family:sans-serif;
    }
`
return (
    <>
        <Electronic className="Jewelery_cont">
            <div className="electronics Jewelery">
                <div className="image">
                    <img src={WomenRing} alt='not found' />
                </div>

                <div className="content">
                    <h1>Women</h1>
                    <p>Best Ring For Women</p>
                    < Rating value={3} readOnly />
                    <p>35000</p><span>32000</span>
                </div>

            </div>
            <div className="electronics">
                <div className="image">
                    <img src={MenRing} alt='not found' />
                </div>

                <div className="content">
                    <h1>Men Ring</h1>
                    <p>Best Ring for Men</p>
                    < Rating value={3} readOnly />
                    <p>35000</p><span>32000</span>
                </div>

            </div>

            <div className="electronics">
                <div className="image">
                    <img src={Pandora} alt='not found' />
                </div>

                <div className="content">
                    <h1>Pandora</h1>
                    <p>Popular Jewellery for Women</p>
                    < Rating value={3} readOnly />
                    <p>35000</p><span>32000</span>
                </div>

            </div>
            </Electronic>
            <Electronic className="Jewelery_cont">
            <div className="electronics Jewelery">
                <div className="image">
                    <img src={Jewelery} alt='not found' />
                </div>

                <div className="content">
                    <h1>Jewellery</h1>
                    <p>Best Jewellery for Women</p>
                    < Rating value={3} readOnly />
                    <p>35000</p><span>32000</span>
                </div>

            </div>

            <div className="electronics">
                <div className="image">
                    <img src={Modernjew} alt='not found' />
                </div>

                <div className="content">
                    <h1>Jewellery</h1>
                    <p>Modern Jewellery in Market</p>
                    < Rating value={3} readOnly />
                    <p>35000</p><span>32000</span>
                </div>
            </div>
            </Electronic>
</>
)

}

export default Jewellery;