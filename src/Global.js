import { createGlobalStyle } from "styled-components";

const GlobalCss=createGlobalStyle`
*{
    margin:0;
    padding:0;
}

@media (max-width: 768px){
        .Header{
            display:none;
        }
        .Header ul{
           flex-direction:column;
           justify-content:center;
        }
        .Header ul li{
            font-size:0.8rem;
        }

        #btn1{
            display:block;
        }

        .searchText ul li input{
            padding: 0.5rem 5rem 0.5rem 5rem;
        }

        .searchText ul li button{
            padding:0.5rem;
        }

        .searchText ul li i{
            padding:0.5rem;
        }

        .text h1{
            font-size:1.5rem;
        }

        .MainItem{

        }

        .electronics{
            margin-left:3rem;
        }

        .electronics .image img{
            height: 12vh;
            width: 10vw;
        }

        .FirstHome span::after{
            content:" ";
            height:9vh;
            width:18vw;
            left:35rem;
            border-left:2px solid black;
            position:absolute;
            background:white;
            animation:changetext 4s 1s infinite steps(10);
        }

        @keyframes changetext{
            0%{
                left:25rem;
            }
        }

        #loginForm{
            margin-left:5rem;
        }

         #forms{
            margin-left:5rem;
        }

        .panel{
            margin-left:5rem;
        }

    }

@media (max-width: 480px){

    #btn1{
        display:none;
    }

        .Menu ul{
            flex-direction:column
        }

        Nav{
            flex-direction:column;
        }

        .searchText ul li input{
            padding: 0.5rem 2rem 0.5rem 2rem;
        }

        #catbtn{
            padding:0..2rem;
        }

        .searchText{
            margin-left:5rem;
            margin-top:-2.5rem;
        }

        .logo h1{
            font-size:1.2rem;
        }

        .text h1{
            font-size:1.5rem;
        }

        .main_categories{
            display:none;
        }

        .electronics{
            margin-left:1rem;

        }

        .Jewelery{
            margin-left:-3rem;
        }

        .clothes{
            margin-left:-5.5rem;
        }

        .Watches{
            margin-left:-5rem;
        }

        .Watches{
            margin-left:-5rem;
        }

        .container{
            margin-left:-5rem;
        }

        .Beauty{
            margin-left:-4rem;
        }


        .FirstHome h1{
            color:darkred;
        }

        .FirstHome span{
            color:darkblue;
        }

        .FirstHome span::after{
            content:" ";
            height:9vh;
            width:32vw;
            left:18.5rem;
            border-left:2px solid black;
            position:absolute;
            background:white;
            animation:changetext 4s 1s infinite steps(10);
        }

        @keyframes changetext{
            0%{
                left:7rem;
            }
        }

        #loginForm{
            margin-left:5rem;
        }

         #forms{
            margin-left:5rem;
        }

        .panel{
            margin-left:5rem;
        }

    }

    @media (max-width: 350px){
        .searchText ul li button{
            display:none;
        }    

        .searchText ul li input{
            padding-right:0.5rem;
            padding-left:0.7rem;
        } 


        .logo h1{
            font-size:1rem;
        }

        .FirstHome span{
            margin-left:-6rem;
            font-size:1.2rem;
        }

        .FirstHome span::after{
            content:" ";
            height:9vh;
            width:42vw;
            left:10rem;
            border-left:2px solid black;
            position:absolute;
            background:white;
            animation:changetext 4s 1s infinite steps(10);
        }

        @keyframes changetext{
            0%{
                left:0rem;
            }
        }

        .div1{
            flex-direction:column;
            margin-left:2rem;
        }

        .clothes{
            margin-left:0rem;
        }

        .watch{
            flex-direction:column;
        }

        .electronic_cont{
            flex-direction:column;
            margin-left:-1rem;
        }

        .health{
            flex-direction:column;
        }

        .Jewelery_cont{
            flex-direction:column;
        }

        .form_cont{
            margin-left:-3rem;
        }

        .section_cont{
           display:none;
        }

    }
`


export default GlobalCss;