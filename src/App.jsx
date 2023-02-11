import { useState } from 'react'
import './App.css'
import ProductReduce from './components/ProductReduce.jsx'
import ProductMap from './components/ProductMap.jsx'
import ProductSort from './components/ProductSort.jsx'
import ProductFilter from './components/ProductFilter'

function App() {
  const [prodState, setProdState] = useState('map');

  const mapHandler = () => {
    setProdState('map');
  }

  const reduceHandler = () => {
    setProdState('reduce');
  }

  const sortHandler = () => {
    setProdState('sort');
  }

  const filterHandler = () => {
    setProdState('filter');
  }
  
  return <div className="App">
    <button onClick={mapHandler}>Map</button>
    <button onClick={reduceHandler}>Reduce</button>
    <button onClick={sortHandler}>Sort</button>
    <button onClick={filterHandler}>filter</button>

    {prodState === 'map' && <ProductMap/>}
    {prodState === 'reduce' && <ProductReduce/>}
    {prodState === 'sort' && <ProductSort/>}
    {prodState === 'filter' && <ProductFilter/>}
    </div>
}

export default App
