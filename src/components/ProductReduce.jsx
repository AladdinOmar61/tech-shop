import products from "../Data";
const ProductReduce= () => {

    const totalItemPrices = products.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return <div>
        <p>Total Prices are: {totalItemPrices}</p>
      </div>
  
};

export default ProductReduce;
