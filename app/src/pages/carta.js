import "../styles/carta.css"
import Card from "../components/card";
import shopItems from "../data/shopItems.json"

function Carta() {
    return (
        <ul className="foodList">
            <li>
                <h1>Pizza</h1>
                <p className="description">The usual pizzas to share with whoever you want, choose the type of dough, the size and the ingredients</p>
                <div className="card-grid-column">
                    {shopItems.filter(item => item.familyId === 0).map(item => <Card key={item.id} id={item.id} img={item.imgUrl} title={item.name} body={item.description}></Card>)}
                </div>
            </li>
            <li>
                <h1>Pasta</h1>
                <p className="description">Classic italian pasta, every bite takes you to Naples</p>
                <div className="card-grid-column">
                    {shopItems.filter(item => item.familyId === 1).map(item => <Card key={item.id} id={item.id} img={item.imgUrl} title={item.name} body={item.description}></Card>)}
                </div>
            </li>
            <li>
                <h1>Salad</h1>
                <p className="description">For the people who want something lighter we have a large selection of salads</p>
                <div className="card-grid-column">
                    {shopItems.filter(item => item.familyId === 2).map(item => <Card key={item.id} id={item.id} img={item.imgUrl} title={item.name} body={item.description}></Card>)}
                </div>
            </li>
            <li>
                <h1>Dessert</h1>
                <p className="description">Everyone knows we always have room for dessert, here you got the final touch for your meal</p>
                <div className="card-grid-column">
                    {shopItems.filter(item => item.familyId === 3).map(item => <Card key={item.id} id={item.id} img={item.imgUrl} title={item.name} body={item.description}></Card>)}
                </div>
            </li>
        </ul>
    );
}
  
export default Carta;