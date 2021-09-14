
import Card from "./Card"

export default function Cards({ data, setData }) {

    function handleCardId(id){
        const updatedCards = data.map(account => {
            if(id === account.id){
                account.paid = !account.paid
                return account
            }

            return account
        })
        setData(updatedCards)
    }

    function handleDeleteCard(id){
        const filteredCards = data.filter(function(account){
            return account.id !== id
        })

        setData(filteredCards)
    }
    
    
    return (
        <div className="cards">
            {data.map(account => (
                <Card 
                    account={account}
                    key={account.id}
                    toggle={handleCardId} 
                    deleteCard={handleDeleteCard}
                ></Card>
            ))}
        </div>
    )
}