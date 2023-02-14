 import products from "../Data";
 const ProductMap = () => {
 
 const productItems = products.map(({id, name, price}) => {
    return <div key={id} className="prod">
            <p>Name: {name} </p>
            <p>Price: {price}</p>
            </div>
    });

    return <div>
        {productItems}
    </div>
}

export default ProductMap;