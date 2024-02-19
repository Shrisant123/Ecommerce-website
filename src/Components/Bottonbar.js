import {styled} from 'styled-components'

const Bottonbar=()=>{
    const Bottombars=styled.div`
    .MainItem{
        width:62vw;
        height:15vh;
        display:flex;
        background-color:lightblue;
        justify-content:space-between;
        margin-left:9.5rem;
    }

        .item{
            margin-top:1rem;
            text-align:center;
        }
    `
    return(
        <>
            <Bottombars className="Bottom_Bar">
            <div className="MainItem">
                <div className="item">
                    <h3>Money Back</h3>
                    <p>30 Days Money Back Guarantee</p>
                </div>
                <div className="item">
                    <h3>Free Shipping</h3>
                    <p>Shipping on orders over 599</p>
                </div>
                <div className="item">
                    <h3>Special Sale</h3>
                    <p>Extra $5 off on all sales</p>
                </div>
            </div>
            </Bottombars>
        </>
    )
}

export default Bottonbar;