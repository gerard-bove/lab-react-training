import Visa from '../assets/images/visa.png'
import MasterCard from '../assets/images/master-card.svg'
function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    let card = "";
    let expMonth;
    if(type==="Visa") {
        card = Visa;
    }
    else {
        card = MasterCard;
    }

    let cardColor = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
   
    const hideNumber = `**** **** **** ${number.substring(12, 16)}`

    if(expirationMonth < 10) expMonth = '0' + expirationMonth;
    else expMonth = expirationMonth
    
    

    return (
        <div style={cardColor} className="credit-card">
            <img src={card} alt="visa" className='card-image'/>
            <p>{hideNumber}</p>
            <div className='expire-bank'>
                <span>Expires {expMonth}/{expirationYear % 100}</span>
                <span>{bank}</span>
            </div>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard;