
function Card(prop){
    return(
        <div style={{backgroundColor:"green",color:"white"}}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.3I1Ck75_6TKDc13YiS7RaAHaHa&pid=Api&P=0&h=180" height={200} width={200}></img>
            <div style={{textAlign:"center"}}>
                <h2>{prop.cloth}</h2>
                <h2>{prop.offer}</h2>
                <h2>{prop.range}</h2>
                <h2>{prop.price}</h2>
            </div>
        </div>
    )
}
export default Card;