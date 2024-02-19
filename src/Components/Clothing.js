import cloth1 from './cloth1.jfif'
import cloth2 from './cloth2.jfif'
import cloth3 from './cloth3.jfif'
import pant from './pant.jfif'
import shoe1 from './shoe1.jfif'
import shoe2 from './shoe2.jfif'
import { Rating } from '@mui/material'

import {styled} from 'styled-components'

const Clothing = () => {
    const Div=styled.div`
        display:flex;
        justify-content:space-around;
        margin-left:7rem;
        margin-top:1rem;

        img{
            height: 30vh;
            width:20vw;
        }
        p{
            text-decoration:line-through;
        }
    `
    return (
        <>
            <div>
                <Div className="div1">
                    <div className="clothes">
                        <div>
                            <img src={cloth1} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            < Rating value={3} readOnly />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={cloth2} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            < Rating value={3} readOnly />
                            <p>4000</p><span>3800</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={cloth3} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            < Rating value={3} readOnly />
                            <p>5000</p><span>4300</span>
                        </div>
                    </div>
                    </Div>
                    <Div className="div1">
                    <div className="clothes">
                        <div>
                            <img src={pant} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            < Rating value={4} readOnly />
                            <p>4200</p><span>4000</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={shoe2} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            < Rating value={3} readOnly />
                            <p>3800</p><span>3500</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={shoe1} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            < Rating value={3.5} readOnly />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                </Div>
            </div>
        </>
    )
}

export default Clothing;