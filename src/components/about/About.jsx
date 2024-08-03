import { FaShippingFast } from "react-icons/fa";
import { PiClockUserBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import Truck from '../../assets/truck.jpg'
import Truck1 from '../../assets/truck1.png'
import Truck2 from '../../assets/truck2.png'

const About = () => {

    const { t } = useTranslation();

    return (
        <section className="section relative" id="about">
            <div className="bg-[#1C1C1C] w-full flex-col md:flex-row max-md:space-y-10 flex justify-evenly items-center py-10">
                <div className={`flex justify-center items-center space-x-2`}dir="auto">
                    <FaShippingFast className="text-amber-500 text-xl lg:text-3xl" />
                    <h1 className={`text-white   ${t("languages") === 'ُEnglish' ? "font-bold pr-2" : "font-oswald"} font-[500] uppercase text-[12px] lg:text-[14px]`}>{t('aboutbage.tags.tag1')}</h1>
                </div>
                <div className="flex justify-center items-center space-x-2" dir="auto">
                    <PiClockUserBold  className="text-amber-500 text-xl lg:text-3xl" />
                    <h1 className={`text-white   ${t("languages") === 'ُEnglish' ? "font-bold pr-2" : "font-oswald"} font-[500] uppercase text-[12px] lg:text-[14px]`}>{t('aboutbage.tags.tag2')}</h1>
                </div>
                <div className="flex justify-center items-center space-x-2" dir="auto">
                    <IoLocationSharp  className="text-amber-500 text-xl lg:text-3xl " />
                    <h1 className={`text-white   ${t("languages") === 'ُEnglish' ? "font-bold pr-2" : "font-oswald"} font-[500] uppercase text-[12px] lg:text-[14px]`}>{t('aboutbage.tags.tag3')}</h1>
                </div>
            </div>
            <div className="about bg-no-repeat bg-center flex-col bg-cover flex-1 flex space-y-[100px] items-center pt-20 pb-48 px-8 md:px-20">
                <div className="relative ">
                    <h1 className={`z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[90px] lg:text-[100px] text-[#454749]" : "font-oswald text-[60px] sm:text-[70px] lg:text-[80px] text-white/10"} font-[600] uppercase`}> 
                        {t('aboutbage.title')}
                    </h1>
                    <div className={`absolute flex items-center justify-center  ${t("languages") === 'ُEnglish' ? "left-[28px] top-[9px]" : "left-[18px] min-[500px]:left-[28px]  top-[2px]"}`}>
                        <p className="z-10 text-amber-500 font-[600] font-serif uppercase flex text-[27px] lg:text-[30px]">
                        <IoIosArrowForward className="-mr-4 rotate-0" />
                        <IoIosArrowForward className="-mr-4" />
                        <IoIosArrowForward className="-mr-4" />
                        <IoIosArrowForward className="" />
                        </p>
                        <h1 className={`text-white z-10 ${t("languages") === 'ُEnglish' ? "font-[700] pr-2 text-[50px] lg:text-[55px]" : "font-oswald text-[35px] md:text-[40px] lg:text-[46px]"} font-[600] uppercase`}> 
                            {t('aboutbage.title')}
                        </h1>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className={`text-white max-w-[600px] max-md:text-[17px] xl:max-w-[700px] ${t("languages") === 'ُEnglish' ? "font-[500] pr-2 text-[14px] lg:text-[17px]" : "font-oswald"} font-[300] text-center`} dir="auto">
                    <strong className="text-amber-500">{t('aboutbage.name')} </strong>{t('aboutbage.dis')}
                    </h2>
                    <h2 className={`text-white max-lg:text-[16.5px] max-w-[600px] xl:max-w-[700px] ${t("languages") === 'ُEnglish' ? "font-[500] pr-2 text[13px] lg:text-[16px]" : "font-oswald"} font-[300] text-center`} dir="auto">
                    {t('aboutbage.dis1')}
                    </h2>
                </div>
            </div>
            <div className="absolute -bottom-[40px] md:-bottom-[100px] flex w-full z-10 justify-center space-x-10 md:space-x-16 items-center">
                    <img loading='lazy' src={Truck2} className="w-[80px] xs:w-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] md:w-[180px] md:h-[180px] lg:h-[200px]" alt="" />
                    <img src={Truck1} loading='lazy' className="w-[80px] xs:w-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] md:w-[180px] md:h-[180px] lg:h-[200px]" alt="" />
                    <img src={Truck} loading='lazy' className="w-[80px] xs:w-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] md:w-[180px] md:h-[180px] lg:h-[200px]" alt="" />
                </div>
        </section>
    );
}

export default About;
