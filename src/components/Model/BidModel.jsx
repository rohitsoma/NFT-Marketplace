import React from 'react'
import Model from './Model'

const BidModel = ({isOpen, onClose, onBidSubmit, fullName, setFullName, 
    bidAmount, setBidAmount, email, setEmail }) =>{

    
    const handleBidSubmit = (e)  => {
        e.preventDefault()
        onBidSubmit()
    }

    return (
        <Model isOpen={isOpen} onClose={onClose}>
            <div className='p-5'>
                <h1 className='capitalize text-2xl font-bold mb-4 text-gray-400'>Place your bid</h1>
                <form onSubmit={handleBidSubmit}>
                    <input type='text' placeholder='Full Name' value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} className='border p-2 mb-4 w-full text-gray-500' required/>
                    <input type='email' placeholder='Email' value={email} 
                    onChange={(e) => setEmail(e.target.value)} className='border p-2 mb-4 w-full text-gray-500' required/>
                    <input type='number' placeholder={bidAmount} value={bidAmount} 
                    onChange={(e) => setBidAmount(e.target.value)} className='border p-2 mb-4 w-full text-gray-500' required/>

                    <button type='submit' className=' bg-indigo-600 text-white px-4 py-2
                    hover:bg-indigo-700 rounded-md'>
                        Submit Bid
                    </button>
                </form>
            </div>
        </Model>
        )
}
  

export default BidModel
