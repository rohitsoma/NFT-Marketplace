

const AvatarCard = (props) => {
    return (
    
        <div className="w-full md:w-52 rounded-lg overflow-hidden border 
        border-slate-400/10 pb-6 hover:shadow-xl duration-500 ease-in-out
        hover shadow-white/5">
            <div className="flex flex-col -mt-12" >
                <div className={`h-24 ${props.gradient}`}></div>
                <div className="self-start mt-1 mb-6 mx-auto"> 
                    <img src={props.img} alt="" className="rounded-full bg-center object-cover w-24 h-24 overflow-hidden"/>
                </div>
                <div className="text-center mb-6 md:mb-2">
                    <h3 className="text-xl">{props.name}</h3>
                    <p className="text-slate-400 text-sm"> {props.handle}</p>
                </div>
            </div>
            
        </div>

    )
}

export default AvatarCard