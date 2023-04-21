import Visa from '../assets/images/visa.png'
import MasterCard from '../assets/images/master-card.svg'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    let card = "";
    let expMonth;

    if(type==="Visa") card = Visa;
    else card = MasterCard;

    let cardColor = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    if(expirationMonth < 10) expMonth = '0' + expirationMonth;
    else expMonth = expirationMonth
    
    return (
        <div style={cardColor} className="credit-card">
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <img src={card} alt="visa" className='card-image'/>
            </div>
            <p style={{margin: '10px 0', fontSize: '27px'}}>**** **** **** {number.substring(12, 16)}</p>
            <div className='expire-bank'>
                <p><span style={{margin: '0'}}>Expires {expMonth}/{expirationYear % 100}</span> <span style={{margin: '0'}}>{bank}</span></p>
            </div>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard;