import AvatarSlider from "./AvatarSlider";
import { FaArrowCircleRight } from "react-icons/fa";

const BestSellers = () => {
  return (
    <section className='p-4 py-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
            <div className="flex flex-col item-center md:items-start space-y-5">
                <h1 className="text-2xl md:text-3xl font-medium ">Best Creators and Authors</h1>
                <div className="flex justify-center md:justify-between w-full">
                    <p className='text-slate-400'>Best Sellers of the week's NFT</p>
                    <div className="md:flex items-center space-x-2 text-indigo-600 font-semibold hidden">
                        <p>See more</p>
                        <FaArrowCircleRight size={12}/>
                    </div>
                </div>
            </div>

            {/* slider */}
            <AvatarSlider/>
        </div>
    </section>
      
  )
}

export default BestSellers
