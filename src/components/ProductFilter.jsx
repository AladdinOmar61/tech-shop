import products from "../Data";
const ProductFilter = () => {

      return <div>
        {products.filter(({onSale}) => onSale === true).map(({id, name, price}) => <div key={id} className="prod"><p>Name: {name}</p><p>Price: {price}</p></div>)}
      </div>

}

export default ProductFilter;