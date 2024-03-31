import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {

  const [successMessage,setSuccessMessage] = useState("")  
  const { register, handleSubmit,formState: { errors } } = useForm();

  const serviceID = "service_z1qn8hh";
  const templateID = "template_frxkiik";
  const userID = "wR3HSjm0F7hUY-Y0Y";


  const onSubmit = (data,r) =>{
      sendEmail(
        serviceID,
        templateID,
        {
            name: data.name,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
        userID
      )
      r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variable, userID) =>  {
    emailjs.send(serviceID, templateID, variable, userID)
      .then(() => {
          setSuccessMessage("Thank you for taking out the time and contacting me. I will reach out to you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }



  return (
    <div id="contact_me" className="contact">
            <div className="text-center">
                <h1 className="contact-heading">contact me</h1>
                <div class="centered line contact-line"></div>
                <p className="para-data" text-color="#6d8c9e"> Thank you for having a look at my portfolio. Please reach out to me for additional information.</p>
                
                <span className="success-message">
                    {successMessage}
                </span>
            </div>


            <div className="text-center container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name."
                            name="name"
                            {...register("name",{required: "This field is required"})}
                            
                            />
                            <span className="error-message">
                                {errors.name && errors.name.message }
                            </span>
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Email."
                            name="email"
                            {...register("email",{
                                required: "This field is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email"
                                }
                            })}
                            
                            />

                            <span className="error-message">
                                {errors.email && errors.email.message }
                            </span>

                            <input
                            type="text"
                            className="form-control"
                            placeholder="Subject."
                            name="subject"
                            
                            />

                            <span className="error-message">
                                
                            </span>

                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message."
                            name="description"

                            {...register("msg",{
                                required: "Please enter a message"
                            })}
                            >
                            </textarea>
                            <span className="error-message">
                                {errors.msg && errors.msg.message }
                            </span> <br></ br>
                            <button className="btn-main-offer contact-btn mb-5" type="submit">Contact me</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Contacts;
