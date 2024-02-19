import ecommerce from '../ecommercegirl.png'
import {styled} from 'styled-components'
import Bottonbar from './Bottonbar'
const SideBody=()=>{
    const Section=styled.div`
        .imageAndtext{
            display:flex;
        }

        .text{
            margin:3rem 0rem 0rem 10rem;
        }

        .text span, h1, p{
            padding-top:1rem
            font-family:sans-serif;
            font-size:1rem;
        }

        .text h1{
            font-size:3rem;
            font-family:sans-serif;
            color:#670cf0;
        }

        .image img{
            height:50vh;
            width:35vw;
        }
    `
    return(
        <>
            <Section>
                <div className='imageAndtext'>
                    <div className='text'>
                        <span>Spring 2024</span>
                        <h1>People Fashion</h1>
                        <p>Here You can find everything related to fashion, makeup and daily products.</p>
                    </div>
                    <div className='image'>
                        <img src={ecommerce} alt="notFound" />
                    </div>
                </div>
            </Section>
            <Bottonbar />
        </>
    )
}

export default SideBody;