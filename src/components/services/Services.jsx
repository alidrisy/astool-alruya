import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import Shipping from '../../assets/shipping.png'
import Shipping1 from '../../assets/shipping1.png'
import Shipping2 from '../../assets/shipping2.jpg'


const Services = () => {

    const { t } = useTranslation();

    return (
        <section id="service" className="section relative pt-16 md:pt-28 bg-gray-100 z-0">  
            <div className="flex-col bg-cover flex-1 flex space-y-[100px] items-center pt-20 pb-20 px-10 sm:px-20">
                <div className="relative ">
                    <h1 className={`z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[75px] md:text-[100px] text-[#DADBDD]" : "font-oswald text-[55px] md:text-[80px] text-black/10"} font-[600] uppercase`}> 
                        {t('services.title')}
                    </h1>
                    <div className={`absolute flex items-center justify-center  ${t("languages") === 'ُEnglish' ? "left-[28px] md:left-[28px] top-[2px] md:top-[9px]" : "left-[20px] md:left-[55px]  top-[2px]"}`}>
                        <p className="z-10 text-amber-500 font-[600] font-serif uppercase flex text-[28px] md:text-[30px]">
                        <IoIosArrowForward className="-mr-4 rotate-0" />
                        <IoIosArrowForward className="-mr-4" />
                        <IoIosArrowForward className="-mr-4" />
                        <IoIosArrowForward className="" />
                        </p>
                        <h1 className={`text-black z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[36px] md:text-[55px]" : "font-oswald text-[33px] md:text-[46px]"} font-[600] uppercase`}> 
                            {t('services.title')}
                        </h1>
                    </div>
                </div>
                <div className="gap-10 flex flex-col md:flex-row text-white">
                    <div className="border flex-1 flex flex-col bg-[#1C1C1C]" dir="auto">
                        <img src={Shipping} className="w-full" alt="" />
                        <div className={`mt-4 px-4 ${t("languages") === 'ُEnglish' ? "border-r-[6px] " : "border-l-[6px]"} border-amber-500 space-y-4 flex-1`}>
                            <h2 className={`text-white ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[26px]" : "font-oswald font-[400] text-[26px]"}`}>
                                {t('services.service1.title')}
                            </h2>
                            <p className={`text-white/90 pb-4 ${t("languages") === 'ُEnglish' ? "font-[300] pr-2 text-[14px]" : "font-oswald font-[200] text-[16px]"}`}>
                            {t('services.service1.article')}
                            </p>
                            {/* <button className={`text-white/90 flex items-center ${t("languages") === 'ُEnglish' ? "font-[500] pr-2 text-[14px]" : "font-oswald font-[400] text-[16px]"} pb-6`}>
                            <p className="px-2">{t('services.button')}</p>
                            {t('languages') === "ُEnglish" && <FaArrowLeftLong className=""/>}
                            {t('languages') !== "ُEnglish" && <FaArrowRightLong className="mt-1"/>}
                            </button> */}
                        </div>
                    </div>
                    <div className="border flex-1 flex flex-col bg-amber-500" dir="auto">
                        <img src={Shipping2} className="w-full" alt="" />
                        <div className={`mt-4 px-4 ${t("languages") === 'ُEnglish' ? "border-r-[6px] " : "border-l-[6px]"} border-[#1C1C1C] space-y-4 flex-1`}>
                            <h2 className={`text-white ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[26px]" : "font-oswald font-[400] text-[26px]"}`}>
                            {t('services.service2.title')}
                            </h2>
                            <p className={`text-white/90 pb-4 ${t("languages") === 'ُEnglish' ? "font-[300] pr-2 text-[14px]" : "font-oswald font-[200] text-[16px]"}`}>
                            {t('services.service2.article')}
                            </p>
                            {/* <button className={`text-white/90 flex items-center ${t("languages") === 'ُEnglish' ? "font-[500] pr-2 text-[14px]" : "font-oswald font-[400] text-[16px]"} pb-6`}>
                            <p className="px-2">{t('services.button')}</p>
                            {t('languages') === "ُEnglish" && <FaArrowLeftLong className=""/>}
                            {t('languages') !== "ُEnglish" && <FaArrowRightLong className="mt-1"/>}
                            </button> */}
                        </div>
                    </div>
                    <div className="border flex-1 flex flex-col bg-[#1C1C1C]" dir="auto">
                        <img src={Shipping1} alt="" />
                        <div className={`mt-4 px-4 ${t("languages") === 'ُEnglish' ? "border-r-[6px] " : "border-l-[6px]"} border-amber-500 space-y-4 flex-1`}>
                            <h2 className={`text-white ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[26px]" : "font-oswald font-[400] text-[26px]"}`}>
                            {t('services.service3.title')}
                            </h2>
                            <p className={`text-white/90 pb-4 ${t("languages") === 'ُEnglish' ? "font-[300] pr-2 text-[14px]" : "font-oswald font-[200] text-[16px]"}`}>
                            {t('services.service3.article')}
                            </p>
                            {/* <button className={`text-white/90 flex items-center ${t("languages") === 'ُEnglish' ? "font-[500] pr-2 text-[14px]" : "font-oswald font-[400] text-[16px]"} pb-6`}>
                            <p className="px-2">{t('services.button')}</p>
                            {t('languages') === "ُEnglish" && <FaArrowLeftLong className=""/>}
                            {t('languages') !== "ُEnglish" && <FaArrowRightLong className="mt-1"/>}
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
