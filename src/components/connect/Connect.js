import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import axios from "axios";
import { PiWarningCircleLight } from "react-icons/pi";


const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const Connect = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [validMessage, setValidMessage] = useState(true)
  const [validName, setValidName] = useState(true)
  const form = useRef();

 
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    
    if (reg.test(email) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }
    
    axios.get( `https://emailvalidation.abstractapi.com/v1/?api_key=1b4eca5c0bf642edac8a5dc057a83edf&email=${email}`)
        .then(response => {
            console.log(response.data);
            if (response.data.deliverability === "UNDELIVERABLE") {
              setValidEmail(false)
            } else {
              setValidEmail(true)
              emailjs
                .sendForm(
                  'service_4xz7acs',
                  'template_xyqdxun',
                  e.target,
                '3-zyhuQPYb4esMJJr'
                )
                .then(
                  (result) => {
                  console.log('sendEmail')
                  },
                  (error) => {
                  console.log('send faild')
                  }
                );
                e.target.reset();
                setEmail('')
                setValidEmail(true)
              }
        })
        .catch(error => {
            console.log(error);
            setValidEmail(false)
        })


      
    
    // Clears the form after sending the email
    
  };

    
    const info = [
        {
          icon: <FaPhoneAlt />,
          title: "Phone",
          value: "+966 53 977 1211",
        },
        {
          icon: <FaEnvelope />,
          title: "Email",
          value: "info@astoolal-ruya.com",
        },
        {
          icon: <FaMapMarkedAlt />,
          title: "Address",
          value: "Riyadh, Jarir",
        },
      ];
      
    const { t } = useTranslation();

    return (
        <section className="section">
            
            <div className="connect bg-no-repeat bg-center flex-col bg-cover w-full flex justify-evenly items-center  pb-8">
                <div className="flex-col bg-cover flex-1 flex space-y-[100px] items-center pt-20 pb-20 px-20">
                    <div className="relative ">
                        <h1 className={`text-black/10 z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[90px]" : "font-oswald text-[80px]"} font-[600] uppercase`}> 
                            Connect Us
                        </h1>
                        <div className={`absolute flex items-center justify-center  ${t("languages") === 'ُEnglish' ? "left-[62px] top-[1px]" : "left-[55px]  top-[2px]"}`}>
                            <p className="z-10 text-amber-500 font-[600] font-serif uppercase flex text-[30px]">
                            <IoIosArrowForward className="-mr-4 rotate-0" />
                            <IoIosArrowForward className="-mr-4" />
                            <IoIosArrowForward className="-mr-4" />
                            <IoIosArrowForward className="" />
                            </p>
                            <h1 className={`text-black z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[55px]" : "font-oswald text-[46px]"} font-[600] uppercase`}> 
                                Connect Us
                            </h1>
                        </div>
                    </div>
                    </div>
                <div className="flex w-full px-20  space-x-10 items-center">
                <div className="flex-1">
                    <h1 className="text-3xl pb-6 font-oswald text-left">Get in touch with us</h1>
                    <form ref={form} onSubmit={sendEmail} className="flex w-full flex-col justify-between space-y-4 flex-grow">
                        <input 
                            className="px-2 shadow-2xl w-[300px] border text-sm border-black py-2" 
                            type="text"
                            placeholder="Your name"
                            id="from_name"
                            name="from_name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                       <input 
                            className="px-2 shadow-2xl w-[300px] border text-sm border-black py-2"  
                            type="text"
                            placeholder="Email"
                            id="from_email"
                            name="from_email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                       {!validEmail && <span className="text-xs text-red-600 flex gap-1 items-center">
                        <PiWarningCircleLight />
                        Please enter valid email address.
                        </span>}
                       <input 
                            className="px-2 shadow-2xl w-[300px] border text-sm border-black py-2"  
                            type="text"
                            placeholder="Phone Number"
                            id="from_number"
                            name="from_number"
                        />
                        <input  className="px-2 shadow-2xl pb-12 w-[300px] border text-sm border-black py-2"  
                            type="text"
                            placeholder="Message"
                            id="message"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                          />
                          {!validMessage && <span className="text-xs text-red-600 flex gap-1 items-center">
                        <PiWarningCircleLight />
                        Please enter valid email address.
                        </span>}
                        <button type="submit" className="px-2 text-whit bg-amber-500 shadow-2xl w-[300px] font-oswald border text-[18px] border-amber-500 py-1">Send</button>
                    </form>

                </div>
                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-6 xl:mb-0'>
                <ul className='flex flex-col gap-10'>
                  {info.map((item, index) => (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gradient text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl'>{item.value}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
        </section>
    );
}

export default Connect;
