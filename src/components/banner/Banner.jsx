import { useTranslation } from 'react-i18next';
import Truck from '../../assets/truk1.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-scroll';


const Banner = () => {
    const { t } = useTranslation();
    
    return (
        <section className='section pt-[1px]' id='home'>
        <div className='relative'>
            <img className='w-full' loading='lazy' src={Truck} alt="banner image" />
            <div className='absolute  w-full h-full z-10 bg-black/60 top-0'></div>
            <div className={`absolute ${t("languages") === 'ُEnglish' ? "font-sans" : "font-oswald"} w-full h-full z-20 flex flex-col space-y-2 sm:space-y-4 lg:space-y-6 xl:space-y-12 p-[60px] lg:p-[120px]  items-center -top-6 min-[500px]:top-0`}>
                <div className='flex relative flex-col space-y-2 font-semibold justify-center items-center'>
                    <h1 className={`text-white text-[16px] max-[600px]:text-[18px] max-[700px]:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl ${t("languages") === 'ُEnglish' ? "font-bold" : ""} z-30`} dir='auto'>
                        {t('banner1.title1')}
                    </h1>
                    <span className={`z-20 p-5 sm:p-6 md:p-7 xl:p-14 absolute ${t("languages") === 'ُEnglish' ? "-left-5 -top-3 xl:-top-7" : "-right-5 -top-3 md:-top-5"} border-[8px] sm:border-[10px] md:border-[12px] xl:border-[18px] border-amber-500`}></span>
                    <h1 className={`text-white ${t("languages") === 'ُEnglish' ? "font-bold text-[15px] max-[600px]:text-[16px] max-[700px]:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl" : "text-[16px] max-[600px]:text-[18px] max-[700px]:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl"} z-30`}  dir='auto'>
                    {t('banner1.title2')}
                    </h1>
                </div>
                <h2 className={`text-white relative z-30 font-[300] ${t("languages") === 'ُEnglish' ? "font-bold" : "font-semibold"} text-[10px] sm:text-sm md:text-md lg:text-xl xl:text-2xl text-center max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] max-sm:leading-3 xl:max-w-[700px]`}  dir='auto'>
                {t('banner1.des')}
                </h2>
                <div className='pt-3 xl:pt-10 pb-20'>
                    <Link 
                        to='contact'
                        activeClass='text-amber-500'
                        smooth={true}
                        spy={true} 
                        className={`bg-amber-500 hover:bg-amber-400 rounded-[2px] px-2 md:px-3 sm:py-[2px] md:py-[4px] text-center  flex justify-center items-center space-x-1 ${t("languages") === 'ُEnglish' ? "float-start" : "float-end"}`}>
                    {t("languages") === 'ُEnglish' && <FaArrowLeft className='text-[7px] sm:text-[9px] md:text-[11px]' />}
                        <p className='text-[9px] sm:text-[10px] md:text-[12.5px] font-bold'>{t("banner1.button")}</p>
                    {t("languages") !== 'ُEnglish' &&<FaArrowRight className='text-[7px] sm:text-[9px] md:text-[11px]' /> }
                    </Link>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Banner;