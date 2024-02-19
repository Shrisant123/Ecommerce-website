import { Rating } from '@mui/material'
import gym2 from '../gym2.jfif'
import gym3 from '../gym3.jfif'
import gym4 from '../gym4.jfif'
import gym5 from '../gym5.jfif'
import gym6 from '../gym7.jfif'
import gym7 from '../gym8.jfif'
import {styled} from 'styled-components'

const HealthandBeauty = () => {
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

    h1{
        font-size:1.2rem;
        font-family:sans-serif;
    }
`
    return (
        <>
            <div>
                <Div className="health">
                    <div className="Beauty">
                        <div>
                            <img src={gym2} alt='not found' />
                            <h1>Small</h1>
                            < Rating value={3} readOnly />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={gym3} alt='not found' />
                            <h1>Smith Machine</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={gym4} alt='not found' />
                            <h1>Weider</h1>
                            <Rating defaultValue={4.5} />
                            <p>2400</p><span>2200</span>
                        </div>
                    </div>
                    </Div>
                    <Div className="health">
                    <div className="Beauty">
                        <div>
                            <img src={gym5} alt='not found' />
                            <h1>Powerline</h1>
                            <Rating defaultValue={4} />
                            <p>4000</p><span>3800</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={gym6} alt='not found' />
                            <h1>York</h1>
                            <Rating defaultValue={2.5} />
                            <p>5500</p><span>4800</span>
                        </div>
                    </div>
                    <div><div>
                        <img src={gym7} alt='not found' />
                        <h1>Marcy</h1>
                        <Rating defaultValue={4} />
                        <p>4400</p><span>4000</span>
                    </div></div>
                </Div>
            </div>
        </>
    )
}

export default HealthandBeauty;

