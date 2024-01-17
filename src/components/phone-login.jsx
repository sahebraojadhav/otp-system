import { useState } from "react";
import OtpInput from "./otp-input"

const PhoneOtpForm=()=>{
    const [phoneNumber,setPhoneNumber]=useState("");
    const [showOtpInput,setshowOtpInput]=useState(false);


    const handlePhoneNumber=(event)=>{
       setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit=(event)=>{
        event.preventDefault();
        
        //phonevalidation
        const regex=/[^0-9]/g;

        if(phoneNumber.length<10 || regex.test(phoneNumber))
        {
            alert("invalid phone Number");
            return;

            //Call BE API
            //show otp field  
        }
            setshowOtpInput(true);    
    };

    const onOtpSubmit=(otp)=>{
        console.log("Login successful");
    }

    return (
    <div>
       {!showOtpInput ? ( <form onSubmit={handlePhoneSubmit}>
            <input
             type="text" 
            value={phoneNumber}  
            onChange={handlePhoneNumber} 
            placeholder="Enter phone no" 
            />
            <button type="Submit">Submit</button>
        </form>): (
        <div>
                
                 <p>Enter OTP sent to {phoneNumber}</p>
                 <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
        ) }
    </div>
  
  ); 

};
export default PhoneOtpForm;

