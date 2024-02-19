import watch1 from './watch1.jfif'
import watch2 from './watch2.jfif'
import watch3 from './watch3.jfif'
import watch4 from './watch4.jfif'
import watch5 from './watch5.jfif'
import watch6 from './watch6.jfif'
import watch7 from './watch7.jfif'
import {styled} from 'styled-components'
import { Rating } from '@mui/material'

const Watches = () => {
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
        }
    `
    return (
        <>
            <div>
                <Div className="watch">
                    <div className="Watches">
                        <div>
                            <img src={watch1} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={watch2} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={watch3} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                </Div>
                <Div className="watch">
                    <div className="Watches">
                        <div>
                            <img src={watch4} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={watch5} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={watch6} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                </Div>
                <Div>
                    <div>
                        <div>
                            <img src={watch7} alt='not found' />
                        </div>
                        <div>
                            <h1>Best Watch</h1>
                            <Rating defaultValue={2.5} />
                            <p>3500</p><span>3200</span>
                        </div>
                    </div>
                </Div>
            </div>
        </>
    )
}

export default Watches;