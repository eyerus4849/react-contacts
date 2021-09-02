import styled,{css} from 'styled-components'
import CancelIcon from '@material-ui/icons/Cancel';

const Card=styled.div`
height: 150px;
display:flex;
margin:10px auto;
width:600px;
background-color:white;
justify-content:space-between;
/* box-shadow:2px 2px  rgb(68, 66, 66); */
box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);

/* background-color:blue; */
& img{
    width:120px;
    border-radius:50%;
    margin:10px;

}

`

const Div=styled.div`
display:flex;
justify-content:space-between;
`

const Paragraph=styled.p`
color:gray;

`
const Button=styled.div`
color:gray;
margin:50px 10px;

`
const Name=styled.div`
border-left:1px solid gray; 
margin-left:20px;
padding-left:20px;
height:80px ;
margin-top:20px;
`
const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <Card >
            <Div >
                <div  >
                    <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <Name >
                    <Paragraph>{firstName} {lastName}</Paragraph>
                    <Paragraph>{phoneNumber}</Paragraph>
                </Name>
            </Div>
            <Button >
                < CancelIcon />
            </Button>
           
        </Card>
    )
    }

export default ContactCard;