import React from "react";
import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
const IsotopeNotFound = () => {
    const nav = useNavigate();
    return (

        <div>
            {/* <FontAwesomeIcon icon="fas fa-frown" /> */}
            {/* ICON */}
            <div className="flex flex-col items-center justify-center h-screen bg-[#6f263d] text-white" >
                <div className="m-2 mb-3 self-center">
                    {/* <h1 className=" text-white text-3xl font-semibold ">Calculating<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1> */}
                    <h1 className="  text-3xl font-semibold text-center">This nuclide does not exist.</h1>
                    <h1 className="  text-3xl font-semibold text-center">Would you like to search again?</h1>


                </div>
                <div className="self-center">
                    <CustomButton title={"GO BACK"} onClick={() => nav('/')} />
                </div>
            </div>
            {/* BUTTON */}
            {/* <div>
                <CustomButton title={"GO BACK"} />
            </div> */}
        </div>
    )
}
export default IsotopeNotFound;
