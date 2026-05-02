 
function Header(){
    return(<>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.3I1Ck75_6TKDc13YiS7RaAHaHa&pid=Api&P=0&h=180 " height={80} width={80} className="logo"></img>
        <div className="Middle">
        <button className="but">Home</button>
        <button className="but">menu</button>
        <button className="but">lauda</button>
        <button className="but">lagsun</button>
        </div>
        <input type="search" className="searchbar" placeholder="search...."></input>
        <div className="threebut">
        <button className="but">and</button>
        <button className="but">mand</button>
        <button className="but">gand</button>
        </div>
    </div>
    </>
    )
}
export default Header;