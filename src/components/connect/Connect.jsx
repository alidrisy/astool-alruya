/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from "react";
import { PiWarningCircleLight } from "react-icons/pi";


const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const Connect = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [validMessage, setValidMessage] = useState(true)
  const [validName, setValidName] = useState(true)
  const form = useRef();

  useEffect(() => {
    setValidEmail(true);
    setValidMessage(true);
    setValidName(true);
  }, [email, message, name]);
 
  useEffect(() => {
   
  }, [message]);
 
  useEffect(() => {
    setValidName(true);
  }, [name]);
 
  
  const sendEmail = (e) => {
    setValidName(true)
    setValidEmail(true)
    setValidMessage(true)

    e.persist();
    e.preventDefault();

    
    if (!name.length) {
      setValidName(false)
    }
    
    if (!email.length || reg.test(email) === false) 
    {
        setValidEmail(false)
    }

    if (!message.length) {
      setValidMessage(false)
    }
    
    if (validEmail && validMessage && validName && email && name && message && reg.test(email)) {

      emailjs
        .sendForm(
          'service_nj1pymf',
          'template_tksaqjw',
          e.target,
        'OA6EyCvQyR596KHTD'
        )
        .then(
          (_result) => {
            e.target.reset();
            setEmail('')
            setMessage('')
            setName('')
            console.log('Send success')
          },
          (_error) => {
            e.target.reset();
            setEmail('')
            setMessage('')
            setName('')
            console.log('Send failed')
          }
        );
      }
  };


  const { t } = useTranslation();

  const info = [
      {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+966 53 977 1211",
      },
      {
        icon: <FaEnvelope />,
        title: "Email",
        value: "info@astool-alruya.com",
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        value: t('connect.location'),
      },
    ];
      

    return (
        <section className="section" id="contact">
            
            <div className="connect bg-no-repeat bg-center flex-col bg-cover w-full flex justify-evenly items-center  pb-8">
                <div className="flex-col bg-cover flex-1 flex space-y-[100px] items-center pt-20 pb-20 px-10 sm:px-20">
                    <div className="relative ">
                        <h1 className={`z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[55px] md:text-[100px] text-[#DADBDD]" : "font-oswald text-[50px] md:text-[80px] text-black/10"} font-[600] uppercase`}> 
                            {t("connect.title")}
                        </h1>
                        <div className={`absolute flex items-center justify-center  ${t("languages") === 'ُEnglish' ? "left-[30px] md:left-[58px] top-[9px]" : "left-[30px] md:left-[55px]  top-[2px]"}`}>
                            <p className="z-10 text-amber-500 font-[600] font-serif uppercase flex text-[25px] md:text-[30px]">
                            <IoIosArrowForward className="-mr-4 rotate-0" />
                            <IoIosArrowForward className="-mr-4" />
                            <IoIosArrowForward className="-mr-4" />
                            <IoIosArrowForward className="" />
                            </p>
                            <h1 className={`text-black z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[30px] md:text-[55px]" : "font-oswald text-[30px] md:text-[46px]"} font-[600] uppercase`}> 
                            {t("connect.title")}
                            </h1>
                        </div>
                    </div>
                    </div>
                <div className="flex flex-col md:flex-row w-full px-20 gap-14 md:gap-32 items-center">
                <div className="">
                    <h1 className={`text-3xl pb-6 ${t("languages") === 'ُEnglish' ? "font-[700]" : "font-oswald"}`} dir="auto">{t("connect.subtitle")}</h1>
                    <form ref={form} onSubmit={sendEmail} className="flex w-full flex-col justify-between space-y-4 flex-grow">
                        <input 
                            className={`px-2 shadow-2xl w-[300px] border text-sm border-black py-2 ${t("languages") === 'ُEnglish' && 'placeholder:text-right'}`}
                            type="text"
                            placeholder={t("connect.namePlaceholder")}
                            id="from_name"
                            name="from_name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            dir="auto"
                        />
                        {!validName && <span className="text-xs text-red-600 flex gap-1 items-center">
                        <PiWarningCircleLight />
                        Name is required.
                        </span>}
                       <input 
                            className={`px-2 shadow-2xl w-[300px] border text-sm border-black py-2 ${t("languages") === 'ُEnglish' && 'placeholder:text-right'}`}
                            type="text"
                            placeholder={t("connect.emailPlaceholder")}
                            id="from_email"
                            name="from_email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            dir="auto"
                        />
                       {!validEmail && <span className="text-xs text-red-600 flex gap-1 items-center">
                        <PiWarningCircleLight />
                          {email ? 'Please enter valid email address.' : "Email is required."}
                        </span>}
                       <input 
                            className={`px-2 shadow-2xl w-[300px] border text-sm border-black py-2 ${t("languages") === 'ُEnglish' && 'placeholder:text-right'}`}
                            type="text"
                            placeholder={t("connect.numberPlaceholder")}
                            id="from_number"
                            name="from_number"
                            dir="auto"
                        />
                        <input  className={`px-2 shadow-2xl pb-12 w-[300px] border text-sm border-black py-2 ${t("languages") === 'ُEnglish' && 'placeholder:text-right'}`}  
                            type="text"
                            placeholder={t("connect.messagePlaceholder")}
                            id="message"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            dir="auto"
                          />
                          {!validMessage && <span className="text-xs text-red-600 flex gap-1 items-center">
                        <PiWarningCircleLight />
                         Message is required.
                        </span>}
                        <button type="submit" className={`px-2 text-whit bg-amber-500 shadow-2xl w-[300px] ${t("languages") === 'ُEnglish' ? "font-[700]" : "font-oswald"} border text-[18px] border-amber-500 py-1`}>{t('connect.button')}</button>
                    </form>
                </div>
                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-6 xl:mb-0'>
                <ul className='flex flex-col gap-4 md:gap-10'>
                  {info.map((item, index) => (
                    <li key={index} className='flex items-center gap-4 md:gap-6' >
                      <div className='md:w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gradient text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[18px] md:text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-md md:text-xl'>{item.value}</h3>
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
