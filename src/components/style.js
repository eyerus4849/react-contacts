import styled,{css} from 'styled-components'
export const Login=styled.div`
width:600px;
margin:0 auto;
text-align:center;
background-color:white;
padding-bottom:30px;
& a{
    text-decoration:none;
    color:blue;
}
`
export const Loginholder=styled.div`
background-color:rgb(182, 179, 179);
height: 50vh;
width:80vw;
padding:40px 0;
margin:20px auto;
border:1px black solid;
`
export const Input=styled.input`
border: none;
width:300px;
padding:10px;
margin: 10px auto;
border-bottom:1px solid black;
font-size:20px;
display:block;
padding-top:40px;
&:focus{
    border: none;
    background-color:white;
}
${(props)=>props.gray && css`
background-color:rgb(182, 179, 179);
  
 `};
`
export const Button=styled.button`
background-color:gray;
width:150px;
margin: 20px auto;
padding:15px;
font-size:15px;
display: block;
`
export const Form=styled.form`
width:600px;
margin:0 auto;
background-color:white;
padding-bottom:30px;
${(props)=>props.gray && css`
background-color:rgb(182, 179, 179);
  
 `};
 ${(props)=>props.flex && css`
display: flex;
  
 `};
`
export const Div=styled.div`
background-color:rgb(182, 179, 179);
height: 100vh;
width:80vw;
padding-top:40px;
margin:20px auto;
border:1px black solid;
display:inline-block;
`