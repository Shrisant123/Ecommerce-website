import {styled} from 'styled-components'
import { Rating } from '@mui/material'

const Shoe=(props)=>{
    const Section=styled.section`
        .container{
            
            
        }    
        .image img{
            height: 30vh;
            width:20vw;
        }

        .content h1{
            font-size:1.2rem;
            font-family:sans-serif;
        }

        .content p{
            font-size:1rem;
            font-family:sans-serif;
            text-decoration:line-through;
        }
    `
    return(
        <>
            <Section className="section_cont">
                <div className='container'>
                    <div className='image'>
                    <img src={props.image} alt="not found" />
                    </div>
                    <div className='content'>
                    <h1>Men shoe and flexible to use</h1>
                    < Rating value={3} />
                    <p>3500</p><span>3200</span>
                    </div>
                </div>
            </Section>
        </>
    )
}


export default Shoe;