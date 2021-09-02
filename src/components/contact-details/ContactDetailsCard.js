import styled,{css} from 'styled-components'
const DetailCard=styled.div`
width: 500px;
height:400px;
margin:0 auto;
box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);
padding:30px 100px;
`
const Image=styled.img`
width: 100px;
border-radius: 50%;
`
const ImageHolder=styled.div`
width: 100px;
margin:0 auto;
`
const Name=styled.p`
text-align:center;
font-size: 25px;
color: gray;
`
const Info=styled.div`
padding:10px 60px;
`
const Dt=styled.dt`
font-weight:500;
margin-top:10px;
`
const  ContactDetailsCard = ({ contact }) => {
    return (
        <DetailCard>
            <ImageHolder>
                <Image src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </ImageHolder>
            <Info>
                <Name>{contact?.firstName} {contact?.lastName}</Name>
                <dl>
                    <Dt>Phone Number</Dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <Dt>Email</Dt>
                    <dd>{contact?.email}</dd>

                    <Dt>Address</Dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </Info>
        </DetailCard>
    )
}

export default ContactDetailsCard;