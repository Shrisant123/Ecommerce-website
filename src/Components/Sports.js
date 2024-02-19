import sport1 from './sport1.jfif'
import tennis from './tennis.jfif'
import volleyball from './volleyball.jfif'
import badminton from './badminton.jfif'
import {styled} from 'styled-components'
import { Rating } from '@mui/material'

const Sports=()=>{
    const Div=styled.div`
        >div{
            display:flex;
            justify-content:space-around;
            margin:1rem 0rem 0rem 7rem;
        }
    `
    return(
        <>
            <Div>
                <div>
                    <div>
                        <img src={sport1} alt="not found" />
                        <div>
                        < Rating value={3} />
                        <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <img src={badminton} alt="not found" />
                        <div>
                        < Rating value={3} />
                        <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <img src={volleyball} alt="not found" />
                        <div>
                        < Rating value={3} />
                        <p>3500</p><span>3200</span>
                        </div>
                    </div>
                    <div>
                        <img src={tennis} alt="not found" />
                        <div>
                        < Rating value={3} />
                        <p>3500</p><span>3200</span>
                        </div>
                    </div>
                </div>
            </Div>
        </>
    )
}

export default Sports;