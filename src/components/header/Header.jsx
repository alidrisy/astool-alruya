/* eslint-disable react/prop-types */
import Logo from '../../assets/astool1.png'
import Logo1 from '../../assets/astool.png'
import { useTranslation } from 'react-i18next';



/**
 * This function represents the Header component of a website.
 * It displays the Wahaja logo, a welcome message, and a brief description.
 *
 * @returns {JSX.Element} - A JSX element representing the Header component.
 */
function Header() {
    const { t, i18n } = useTranslation();

    const handleTrans = () => {

        i18n.changeLanguage(t("languages") === 'ُEnglish' ? "en" : "ar");
        
    };
    
  


  return (
    <section className=' xl:border-b'>
    <header className={`section flex justify-between  pt-1 px-4  ${t("languages") === 'ُEnglish' ? "flex-row-reverse" : "flex-row"} mx-auto`}>
        <div className='hover:border-b-2 px-[2px] pb-[0px] border-amber-400 flex  items-center  text-[14px]'>
              <button href="#" className={` ${t("languages") === 'ُEnglish' ? "font-semibold" : "font-bold"}`} onClick={handleTrans} >{t("languages")}
             </button>
        </div>
        <div className="w-full md:block md:w-auto">
            
          <ul className={`flex  ${t("languages") === 'ُEnglish' ? "flex-row-reverse font-bold" : "flex-row font-semibold"} md:space-x-4  text-[14px] h-full pt-[15px]`}>
            <li className={t("languages") === 'ُEnglish' ? "ml-3 border-b-2 border-amber-400 h-full" : "border-b-2 border-amber-400 h-full "}>
              <a href="#" className='text-[#141e24] px-2 ' aria-current="page">{t("home")}</a>
            </li>
            <li className='hover:border-b-2 px-[2px] pb-[2px] border-amber-400'>
              <a href="#" className='px-1 text-center' >{t("about")}</a>
            </li>
           <li className='hover:border-b-2 px-[2px] pb-[2px] border-amber-400'>
            <a href="#" className='px-1' >{t("service")}</a>
            </li>
           <li className='hover:border-b-2 px-[2px] pb-[2px] border-amber-400'>
            <a href="#" className='px-1' >{t("work")}</a>
            </li>
           <li className='hover:border-b-2 px-[2px] pb-[2px] border-amber-400'>
            <a href="#" className='px-1' >{t("contact")}</a>
            </li>
          </ul>
        </div>
        <div className='flex items-center overflow-hidden pb-[4px]'>
            <img src={t("languages") === 'ُEnglish' ? Logo : Logo1} className={`h-[60PX] `} alt="Wahaja-logo" />
        </div>
    </header>
    </section>
  )
}

export default Header;
