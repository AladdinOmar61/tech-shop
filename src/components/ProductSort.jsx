import products from "../Data";
const productSort = () => {

      const sortedProds = products.sort((a, b) => a.price - b.price).map(({id, name, price}) => {
        return <div key={id} className="prod">
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
       })

      return <div>
        {sortedProds}
      </div>

}

export default productSort;