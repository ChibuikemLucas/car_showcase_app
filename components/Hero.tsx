import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="flex-1 pt-6 padding-x">
        <h1 className="hero__title"> 
          Find, book, or rent a car — quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with
          our effortless booking process.
        </p>

        <CustomButton 
        
        
        />
      </div>
    </div>
  )
}

export default Hero