import axios from 'axios'
import { useState , useEffect } from 'react'

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState('');
    const getProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        }catch (e){
            setError('Error fetching products');
        }finally {
            setIsLoader(false);
        }
    }
    useEffect(() => {
        getProducts();
    }, [] )
    if (isLoader) 
        return <h2>Loading...</h2>
    if (error)
        return <h2>{error}</h2>
return (
    <>
    <section className='products'>
        <h2>Products</h2>
        {products.map((product) => 
            <div className='product'>
                <h3>{product.title}</h3>
            </div> )}
    </section>
    </>  
  )
}
