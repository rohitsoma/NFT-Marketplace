
import { IoHeart } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState } from "react";
import BidModel from "../../components/Model/BidModel";


const ProductCard = ({item}) => {

    const {img, title, price, likes, sale} = item
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [bidAmount, setBidAmount] = useState(price)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const toggleModel = () => {
        setIsModelOpen(!isModelOpen)
    }

    const handleBidSubmit = () => {

        const data = {
            fullName: name, 
            email: email, 
            amoun: bidAmount
        }

        console.log(data)
        toggleModel()
    }
    


    return (
        <>
            <div className="flex group flex-col space-y-8 rounded-lg overflow-hidden
            border border-slate-400/10 pb-4 hover:shadow-2xl hover:shadow-white transition duration-500 ease-in-out
            shadow-md relative">
                
                {/* image */}
                <div className="flex flex-col items-start relative">
                    <img src={img} alt='' className="object-cover w-full"/> 
                    {
                        sale && (
                            <div className="absolute bottom-3 left-3 flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-red-400 via-fuchsia-400 to-indigo-500 rounded-md">
                                <AiOutlineClockCircle/>
                                <p> 24: 10: 45: 12</p>
                            </div>
                        )
                    }
                </div>
                
                {/* Content */}
                <div className='space-y-4'>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div className=" flex justify-between items-center px-2 -mt-3">
                        <p className="flex items-center text-indigo-600"><FaEthereum size={18}/>{price}</p>
                        <p className="flex items-center"><IoHeart color="red"/> {likes}</p>
                    </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute hidden top-1/4 left-1/2 md:left-1/3 group-hover:flex animate-bounce transition-all ease-in-out duration-1000">
                    <button onClick={toggleModel} className="text=sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 ease-in-out">Place Bid</button>
                </div>

            
            </div>

            {/* Model */}
            <BidModel
            isOpen={isModelOpen}
            onClose={toggleModel}
            onBidSubmit={handleBidSubmit}
            fullName={name}
            setFullName={setName}
            bidAmount={bidAmount}
            setBidAmount={setBidAmount}
            email={email}
            setEmail={setEmail}/>
        </>

       
    )
}

export default ProductCard