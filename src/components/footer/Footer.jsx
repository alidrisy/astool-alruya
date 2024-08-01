/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/footer1.png'
import Logo1 from '../../assets/footer.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";


const Footer = () => {

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
        <section className="section">
            <div className="bg-[#1C1C1C] flex-col w-full flex justify-evenly items-center">
                <div className="flex-col bg-cover flex-1 flex space-y-12 md:space-y-[75px] items-center pt-14 md:pt-20 pb-16">
                    <div className="relative ">
                        <h1 className={`text-white z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[35px] md:text-[42px]" : "font-oswald font-[500] text-[40px]"} uppercase`}> 
                            {t("footer.title")}
                        </h1>
                    </div>
                    <div className=''>
                        <button className={`bg-amber-500 hover:bg-amber-400 rounded-[2px] px-3 py-[4px] text-center  flex justify-center items-center space-x-1 ${t("languages") === 'ُEnglish' ? "float-start" : "float-end"}`}>
                        {t("languages") === 'ُEnglish' && <FaArrowLeft className='text-[11px]' />}
                            <p className='text-[12.5px] font-bold'>{t("banner1.button")}</p>
                        {t("languages") !== 'ُEnglish' &&<FaArrowRight className='text-[11px]' /> }
                        </button>
                    </div>
                </div>
                <div className={`flex w-full flex-col md:flex-row items-center md:px-10 pb-20 gap-10 md:space-x-16 xl:space-x-40 ${t("languages") === 'ُEnglish' ? "" : ""}`} >
                    <div className={`hidden md:flex flex-1 flex-col sm ${t("languages") === 'ُEnglish' ? "items-right" : "md:items-right"} overflow-hidden pb-[4px] space-y-8`} dir='auto'>
                        <img src={t("languages") === 'ُEnglish' ? Logo : Logo1} className={`w-[180px]`} alt="Astool-logo" />
                        <p className={`${t("languages") === 'ُEnglish' ? "text-sm" : "font-oswald font-[300] text-sm pl-3"} text-white/80`}>
                            {t('footer.disc')}
                        </p>
                    </div>
                    <div className={`flex md:flex-1 flex-col pt-2 ${t("languages") === 'ُEnglish' ? "items-center" : "items-center"} overflow-hidden pb-[4px] space-y-5`}>
                        <h1 className={`${t("languages") === 'ُEnglish' ? "text-xl font-[700]" : "font-oswald font-[600] text-xl pl-3"} text-amber-500`}>
                            {t('footer.operationT')}
                        </h1>
                        <div className='space-y-1'>
                            <p className={`${t("languages") === 'ُEnglish' ? "text-sm" : "font-oswald font-[300] text-sm pl-3"} text-white/80 text-center`}>
                            {t('footer.operationD')}
                            </p>
                            <p className={`${t("languages") === 'ُEnglish' ? "text-xs" : "font-oswald font-[300] text-xs pl-3"} text-white/80 text-center`}>
                            {t('footer.operationH')}
                            </p>
                        </div>
                    </div>
                    <div className={`flex md:flex-1 flex-col max-md:items-center pt-4 space-y-4`} >
                        <h1 className={`${t("languages") === 'ُEnglish' ? "text-xl font-[700]" : "font-oswald font-[600] text-xl"} text-amber-500`}> 
                        {t("connect.title")}
                        </h1>
                        <ul className='flex flex-col gap-3  max-md:items-center'>
                        {info.map((item, index) => (
                            <li key={index} className='flex items-center gap-3'>
                            <div className='text-md text-amber-500'>{item.icon}</div>
                            <div className='flex-1'>
                                <h3 className='text-sm text-white'>{item.value}</h3>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="flex w-full border-t border-white/10 justify-center items-center p-1" dir='auto'>
                    <p className={`${t("languages") === 'ُEnglish' ? "text-xs" : "font-oswald font-[300] text-xs pl-3"} text-white/80`}>
                        {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
