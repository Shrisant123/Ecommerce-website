import Laptop from './Laptop.jfif'
import Ipad from './Ipad.jfif'
import Ipad2 from './Ipad2.jfif'
import TV from './TV.jfif'
import computer from './computer.jfif'
import { styled } from 'styled-components'
import { Rating } from '@mui/material'

const Electronics = () => {
    const Electronic = styled.div`
        display:flex;
        justify-content:space-between;
        .electronics{
            display:flex;
            justify-content:space-around;
        }

        .electronics .image img{
                height: 20vh;
                width:10vw;
        }
        Rating ~ p{
            text-decoration:line-through;
        }
    `
    return (
        <>
            <Electronic className="electronic_cont">
                <div className="electronics">
                    <div className="image">
                        <img src={Laptop} alt='not found' />
                    </div>

                    <div className="content">
                        <h1>Laptop</h1>
                        <p>Best Laptop for Beginners</p>
                        < Rating value={3} readOnly />
                            <p>35000</p><span>32000</span>
                    </div>

                </div>
                <div className="electronics">
                    <div className="image">
                        <img src={Ipad} alt='not found' />
                    </div>

                    <div className="content">
                        <h1>Ipad</h1>
                        <p>Best Ipad for Beginners</p>
                        < Rating defaultValue={4} readOnly />
                            <p>350000</p><span>300000</span>
                    </div>

                </div>
                </Electronic>
                <Electronic className="electronic_cont">

                <div className="electronics">
                    <div className="image">
                        <img src={Ipad2} alt='not found' />
                    </div>

                    <div className="content">
                        <h1>Ipad</h1>
                        <p>Best Ipad for Beginners</p>
                        < Rating defaultValue={4.5} />
                            <p>420000</p><span>380000</span>
                    </div>

                </div>
                </Electronic>
                <Electronic className="electronic_cont">
                <div className="electronics">
                    <div className="image">
                        <img src={computer} alt='not found' />
                    </div>

                    <div className="content">
                        <h1>Computer</h1>
                        <p>Best Computer for Beginners</p>
                        < Rating value={3} />
                            <p>48000</p><span>42000</span>
                    </div>

                </div>

                <div className="electronics">
                    <div className="image">
                        <img src={TV} alt='not found' />
                    </div>

                    <div className="content">
                        <h1>TV</h1>
                        <p>Best TV for Everybody</p>
                        < Rating value={3} readOnly />
                            <p>3500</p><span>3200</span>
                    </div>
                </div>
                </Electronic>
        </>
    )
}

export default Electronics;