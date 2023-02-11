const productSort = () => {

    const products = [
        { id: 1, name: "Apple iPhone", price: 999, onSale: false },
        { id: 2, name: "Samsung Galaxy S21", price: 799, onSale: true },
        { id: 3, name: "Google Pixel 5", price: 699, onSale: false },
        { id: 4, name: "OnePlus 9 Pro", price: 899, onSale: true },
        { id: 5, name: "AirPods Pro", price: 249, onSale: false },
      ];

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