import Shoe1 from "./Shoes/Shoe1"
import Shoe2 from "./Shoes/Shoe2"
import Shoe3 from "./Shoes/Shoe3"
import Shoe4 from "./Shoes/Shoe4"
import Shoe5 from "./Shoes/Shoe5"
import Shoe6 from "./Shoes/Shoe6"

import {styled} from 'styled-components'

const Allshoes=()=>{
    const Div=styled.div`
        margin-left:8rem;
    `
    const Div1=styled.div`
        display:flex;
        justify-content: space-around;
        gap:2rem;
    `
    const Div2=styled.div`
    display:flex;
    justify-content: space-around;
`
    return(
        <>
        <Div>
        <Div1>
            <Shoe1 />
            <Shoe2 />
            <Shoe3 />
        </Div1>

        <Div2>
            <Shoe4 />
            <Shoe5 />
            <Shoe6 />
        </Div2>
        </Div>
        </>
    )
}

export default Allshoes;