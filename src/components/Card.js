export default function Card({card,deleteCard}) {

    return (
        <div className="block">
            <button onClick={()=>deleteCard(card.id)} className="delete"> &times;</button>
            {card.number}
        </div>
    )
}