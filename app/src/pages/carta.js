import "../styles/carta.css"
import Card from "../components/card";

function Carta() {
    return (
        <ul className="foodList">
            <li>
                <h1>Pizza</h1>
                <p className="description">The usual pizzas to share with whoever you want, choose the type of dough, the size and the ingredients</p>
                <div className="card-grid">
                    <Card img="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale"
                    body="Tomato sauce, extra cheese mozzarella and double pepperoni."/>
                    <Card img="https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg"
                    body="Tomato sauce, mozzarella, cheddar, emmental and gorgonzola cheese."/>
                    <Card img="https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8-500x375.jpg"
                    body="Tomato sauce, mozzarella cheese, black olives, onion, red peppers, mushrooms"/>
                </div>
            </li>
            <li>
                <h1>Pasta</h1>
                <p className="description">Classic italian pasta, every bite takes you to Naples</p>
                <div className="card-grid">
                    <Card img="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-0e6ca9f.jpg?quality=90&resize=500,454"
                    body="Spaghetti carbonara, prosciutto with onions in a cream sauce."/>
                    <Card img="https://www.kosher.com/resized/open_graph/n/e/Newman_Tortellini_with_creamy_white_wine_sauce.png"
                    body="Tortellini with garlic marinated mushrooms and mozzarella cheese."/>
                    <Card img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-lasagna-bolognese-horizontal-1543346979.png"
                    body="Lasagna bolognese, meat sauce mixed with bechamel in the inside and grated parmigiano cheese on top."/>
                </div>
            </li>
            <li>
                <h1>Salad</h1>
                <p className="description">For the people who want something lighter we have a large selection of salads</p>
            </li>
            <li>
                <h1>Dessert</h1>
                <p className="description">Everyone knows we always have room for dessert, here you got the final touch for your meal</p>
            </li>
        </ul>
    );
}
  
export default Carta;