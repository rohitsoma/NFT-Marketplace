
import nfts from '../../../public/data/nfts'
import ProductCard from './ProductCard'

const Products = () => {

    return (
        <section className='text-white p-4 pb-24 px-10'>
            <div className="text-center">
                <h1 className="text-2xl">Explore Hot Products</h1>
                <p className="text-slate-400">We are a huge marketplace dedicated to connecting great unique artists <br/> with their fans and token collectors </p>
            </div>

            {/* Product Cards  */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 items-center text-center'>
                {
                    nfts.map((item, index) => (
                        <ProductCard key={index} item={item}/>
                    ))
                }
            </div>

        </section>

    )
}

export default Products

