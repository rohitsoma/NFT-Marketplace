

const Model = ({isOpen, onClose, children}) => { 
    if(!isOpen) return null;
    return (
        <div className='flex inset-0 fixed items-center justify-center
        bg-black bg-opacity-50 z-50 px-4'>
            <div className="bg-white p-8 rounded-lg md:w-1/4 mx-auto flex flex-col">
                <div className="flex-1">{children}</div> {/* Content area */}
                <div className="self-start mt-4"> {/* Align button to the left */}
                    <button onClick={onClose} className="px-4 py-2 bg-gray-800 text-white 
                    rounded-md hover:bg-gray-700">Close</button>
                </div>
            </div>
        </div>
    );

}

export default Model