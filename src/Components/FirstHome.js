import {styled} from 'styled-components'

const FirstHome=()=>{
	const Div=styled.div`
		.FirstHome{
			height:60vh;
			width:80vw;
			display:grid;
			justify-items:center;
			align-items:center;
		}

		.FirstHome h1{
			font-size:2rem;
		}
		.FirstHome p{
			font-size:1.1rem;
		}

		span{
			font-size: 1.6rem;
		}

		span::after{
			content:" ";
			height:9vh;
			width:18vw;
			left:55rem;
			border-left:2px solid black;
			position:absolute;
			background:white;
			animation:changetext 4s 1s infinite steps(10);
		}

		@keyframes changetext{
			0%{
				left:40rem;
			}
		}

	`

	return(
		<>
			<Div>
				<div className="FirstHome">
					<h1>Welcome to the Online Shopping</h1>
					<span>Tushant Mart</span>
					<p>Here You can find the Every Product That you need in your daily life</p>
				</div>
			</Div>
		</>
	)
}

export default FirstHome;