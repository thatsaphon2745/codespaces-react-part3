import './Shop.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Item(props){
    return (<div key={props.id} onClick={()=>props.callback(props)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id}<br/>
        name: {props.name}<br/>
        price: {props.price}<br/>
    </div>)
}
export default function Shop(){
    const [products,setProducts]=useState([]);
    const URL ="https://super-train-pjj44vprwgqv26wgj-5000.app.github.dev";
    useEffect(()=>{
        axios.get(URL+'/api/products')
        .then(response=>{
            setProducts(response.data);
        })
        .catch(error=>{
            console.log("error")
        });
    },[]);
    const [cart,setCart] = useState([]);
    function addCart(item){
        setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}])
    }
    const productsList=products.map(item=><Item {...item} callback={addCart}/>)
    const cartList=cart.map((item,index)=>(
        <li key={item.id}>
            {item.id} {item.name} {item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
        </li>));

    const clearCart=()=>{
        setCart([]);
    }
    let total=0;
    for(let i=0;i<cart.length;i++){
        total += cart[i].price; 
    }
    function removeFromCart(index) {
        setCart(cart.filter((_, i) => i !== index));
    }
    return (<>
                <div className="grid-container">{productsList}</div>
                <h1>Cart</h1>
                <button onClick={()=>clearCart()}>Clear All</button>
                <ol>{cartList}</ol>
                <h2>Total price: {total} bath</h2>
            </>);
}