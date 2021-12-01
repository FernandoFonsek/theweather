import logo1 from "../../assets/svg/initiation/initiation1.svg"
import logo2 from "../../assets/svg/initiation/initiation2.svg"


const Initiation = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-right h-40 w-full" src={logo1} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-bold text-text"><span className="text-yellow">find</span> the sun in your city!</h2>
            <p className="mx-12 text-text">It's a pleasure  to keep track of the weather with the new app</p>
            <img className="object-none object-left h-40 w-full" src={logo2} alt="weather"/>
        </div>

    )
}

export default Initiation;