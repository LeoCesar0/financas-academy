import { FaTimes } from "react-icons/fa";

export default function Card({account, toggle, deleteCard}){
    return(
        <div 
            className={account.paid ? 'card card-paid' : 'card'}
            onDoubleClick={() => toggle(account.id)}
            >
            <h3>{account.name}</h3>
            <p>Valor: R$ {account.value}</p>

            {
                account.paid && 
                <span className="card-paid-span">Pago</span>
            }

            

            <span 
                className="close-box"
                onClick={() => deleteCard(account.id)}
                >
                <FaTimes className="close-button"/>
            </span>
        </div>
    )
}