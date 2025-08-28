import { useState } from "react"


export default function App(){
  const [products,setProducts] = useState([
    {id:101, title:"Physics", price:36,picture: "https://m.media-amazon.com/images/I/81L-c3G66eL.jpg"},
    {id:102, title:"History", price:19,picture: "https://m.media-amazon.com/images/I/91T1BgOOzTL._UF894,1000_QL80_.jpg"},
    {id:103, title:"Antrology", price:28,picture: "https://m.media-amazon.com/images/I/81e3F1bapaL._UF1000,1000_QL80_.jpg"},
    {id:104, title:"Feminism", price:125,picture: "https://m.media-amazon.com/images/I/81jnfM-OUrL._UF1000,1000_QL80_.jpg"},
    {id:105, title:"Shakespeare", price:10,picture: "https://www.gutenberg.org/cache/epub/100/pg100.cover.medium.jpg"},
    {id:106, title:"Math", price:22,picture: "https://m.media-amazon.com/images/I/81OrIk+OffL._UF1000,1000_QL80_.jpg"},
    {id:107, title:"Design", price:148,picture: "https://m.media-amazon.com/images/I/61N9a2peJaL._UF1000,1000_QL80_.jpg"},
    {id:108, title:"Biology", price:4,picture: "https://www.mheducation.com/cover-images/Webp_400-wide/1264851634.webp"},

  
  ])

  const [sortState,setSortState] = useState({
    isTitle: false, 
    isPrice: false,
    isQuantity:false,
    isSubtotal:false
  })


  const [basket,setBasket] = useState([])
  const sortBy = category => {
        
    if(category === "product"){
      if(sortState.isTitle){
        basket.sort((a,b) => a.title.localeCompare(b.title))
      }else{
        basket.sort((a,b)=> b.title.localeCompare(a.title))

      }
      sortState.isTitle = !sortState.isTitle
      

      
    }else if(category === "price"){
      if(sortState.isPrice){
        basket.sort((a,b) => a.price-b.price)
      }else{
        basket.sort((a,b) => b.price-a.price)
      }
      sortState.isPrice = !sortState.isPrice
     
      
    }else if(category ==="quantity"){
      if(sortState.isQuantity){
        basket.sort((a,b) => a.quantity - b.quantity)
      }else{
        basket.sort((a,b) => b.quantity - a.quantity)
      }
      sortState.isQuantity = !sortState.isQuantity
      
     
    }else if(category ==="subtotal"){
      if(sortState.isSubtotal){
        basket.sort((a,b) => a.price * a.quantity - b.price * b.quantity)
      }else{
        basket.sort((a,b) => b.price * b.quantity - a.price * a.quantity)
      } 
      sortState.isSubtotal = !sortState.isSubtotal
      
    }
    setSortState((sortState))
    setBasket([...basket])
  }

  const moveToCart = product =>{
    const found = basket.find(item=>item.id=== product.id)
    if(!found){
      setBasket([...basket,{...product,quantity:1}])
    }else{
      found.quantity++
      setBasket([...basket])
    }
    
  }
  const upQuantity  = product =>{
    const found  = basket.find(item => item.id === product.id)
      found.quantity++
      setBasket([...basket])

  }
  const deleteFromBasket = product =>{
    const found  = basket.find(item => item.id === product.id)
    setBasket([...basket.filter(item => item.id !== found.id)])
  }
  const downQuantity = product =>{
    const found = basket.find(item => item.id === product.id)
    if(found.quantity > 1){
      found.quantity--
      setBasket([...basket])
    }

  }
  return <div className="container">
          <h1 className="display-3">Shopping Card</h1>
          <div className="row">
            <div className="col-md-8">
              <h2>Products </h2>
              <div className="row">
                {
                  products.map(product => <div key = {product.id} className="col-md-4 my-2">
                    <img 
                    src = {product.picture}
                    style={{width:170,height:200}}
                    />
                    <p>{product.title}</p>
                    <p className="text-danger">{product.price} $</p>
                    <button onClick={()=>moveToCart(product)} className="btn btn-outline-danger">+</button>
                    </div>)
                }
              </div>
            </div>
            <div className="col-md-4">
              <h2>Basket</h2>
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th onClick={()=> sortBy("product")}>product</th>
                    <th onClick={()=> sortBy("price")}>price</th>
                    <th onClick={()=> sortBy("quantity")}>quantity</th>
                    <th onClick={()=> sortBy("subtotal")}>subtotal</th>
                    <th>actions</th>
                  </tr>
                </thead>
                <tbody>
                {
                  basket.map(item =>{

                    const filled = item.price * item.quantity > 500 ? "bg-success" :""
                    return <tr className = {filled} key = {item.id}>
                      <td>
                        {item.title}
                      </td>
                      <td>{item.price} $</td>
                      <td>x {item.quantity}</td>
                      <td>{item.price * item.quantity} $ </td>  
                      <td>
                        <button onClick={()=>upQuantity(item)} className="btn btn-outline-success btn-sm">+</button>
                        <button onClick={()=>downQuantity(item)} disabled={item.quantity<2} className="btn btn-outline-warning btn-sm">-</button>
                        <button onClick={()=>deleteFromBasket(item)} className="btn btn-outline-danger btn-sm">x</button>
                      </td>
                    </tr>
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
    </div>
}