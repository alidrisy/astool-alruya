/* eslint-disable react/prop-types */
import Logo from '../../assets/astool2.png'
import Logo1 from '../../assets/astool3.png'
import { useTranslation } from 'react-i18next';
import Flag from '../../assets/saudi.svg'
import Flag1 from '../../assets/usa.svg'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

/**
 * This function represents the Header component of a website.
 * It displays the Wahaja logo, a welcome message, and a brief description.
 *
 * @returns {JSX.Element} - A JSX element representing the Header component.
 */

function Header() {
    const { t, i18n } = useTranslation();
    const [nav, setNav] = useState(false)


    const handleTrans = () => {

        i18n.changeLanguage(t("languages") === 'ُEnglish' ? "en" : "ar");
        
    };
    

  useEffect(() => {
    const handleScroll = () => setNav(false);
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);


  const handleScrollTo = (event, selector) => {
    event.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <section className=' xl:border-b '>
      <header className={`section flex justify-between  pt-1 px-2 md:px-4  ${t("languages") === 'ُEnglish' ? "flex-row-reverse" : "flex-row"} mx-auto`}>
        <div className={`flex ${t("languages") === 'ُEnglish' ? "flex-row-reverse" : "flex-row"} max-lg:items-center space-x-4`}>
          <button onClick={(e) => setNav(!nav)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class={`lg:hidden text-gray-500  hover:bg-gray-100 ${t("languages") === 'ُEnglish' ? "ml-2" : "flex-row"} focus:outline-none  rounded-xl text-sm px-2.5 h-10`}>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div className='lg:hover:border-b-2 px-[2px] pb-[0px] border-amber-400 flex  items-center  text-[14px]'>
                <button href="#" className={`flex items-center space-x-2 ${t("languages") === 'ُEnglish' ? "font-semibold" : "font-bold"}`} onClick={handleTrans} >
                  {
                    t("languages") !== 'ُEnglish' &&
                    <img src={Flag} className='rounded-full w-6' alt="" />
                  }
                  <p>{t("languages")}</p>
                  {
                      t("languages") === 'ُEnglish' &&
                      <img src={Flag1} className='rounded-full w-6' alt="" />
                  }
              </button>
          </div>
        </div>
        <div className="items-center lg:hidden flex flex-col  absolute justify-between left-0 px-[3px] pt-1 right-0 rounded-full top-[56px]  z-40 w-full md:flex md:w-auto md:order-1" id="navbar-cta" dir='auto'>
        <ul class={`flex flex-col ${nav ? '' : 'hidden'} w-full rounded-[4px] p-3 bg-white ${t("languages") === 'ُEnglish' ? "font-bold" : "font-semibold"} md:space-x-4  text-[14px] h-full pt-[15px]`}>
            <li className={t("languages") === 'ُEnglish' ? "pb-[2px] px-[2px]" : "px-[2px]  pb-[2px"}>
              <Link
              to='home'
              activeClass='text-amber-500'
              smooth={true}
              spy={true}
              offset={-100}
              className='px-1 md:pl-5'
              >
                {t("home")}
              </Link>
            </li>
            <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='about'
              activeClass='text-amber-500'
              smooth={true}
              spy={true} 
              href="/" 
              className='px-1'
              >
                {t("about")}
              </Link>
            </li>
           <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='service'
              activeClass='text-amber-500'
              smooth={true}
              spy={true}
              offset={-100}
              href="/" 
              className='px-1'
              >
                {t("service")}
              </Link>
            </li>
           <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='work'
              activeClass='text-amber-500'
              smooth={true}
              spy={true} 
              href="/" 
              className='px-1'
              >
                {t("work")}
              </Link>
            </li>
           <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='contact'
              activeClass='text-amber-500'
              smooth={true}
              spy={true} 
              href="/" 
              className='px-1'
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
          <div onScroll={() => setNav(false)} onClick={() => setNav(false)} className={`flex-grow ${nav ? '' : 'hidden'} w-full h-[80vh] bg-black/40`}>
    
          </div>
        </div>
        <div className={`max-lg:hidden w-full  md:w-auto ${t("languages") === 'ُEnglish' ? "pr-8" : "pl-4"}`}>
            
          <ul className={`flex  ${t("languages") === 'ُEnglish' ? "flex-row-reverse font-bold" : "flex-row font-semibold"} md:space-x-4  text-[14px] h-full pt-[15px]`}>
          <li className={t("languages") === 'ُEnglish' ? "pb-[2px] px-[2px]  text-amber-500" : "px-[2px]  pb-[2px] text-amber-500"}>
              <Link
              to='home'
              activeClass='text-amber-500 '
              smooth={true}
              spy={true}
              offset={-100}
              href="/" 
              className='px-1 sm:pl-5'
              >
                {t("home")}
              </Link>
            </li>
            <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='about'
              activeClass=''
              smooth={true}
              spy={true} 
              href="/" 
              className='px-1'
              >
                {t("about")}
              </Link>
            </li>
           <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='service'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-120}
              href="/" 
              className='px-1'
              >
                {t("service")}
              </Link>
            </li>
           <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true} 
              href="/" 
              className='px-1'
              >
                {t("work")}
              </Link>
            </li>
           <li className='px-[2px] hover:text-amber-500 pb-[2px] border-amber-400'>
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true} 
              href="/" 
              className='px-1'
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <a href='/' className='flex items-center overflow-hidden pb-[4px]'>
            <img src={t("languages") === 'ُEnglish' ? Logo : Logo1} className={`h-[48px] lg:h-[50px] xl:h-[60PX] `} alt="Wahaja-logo" />
        </a>
    </header>
    </section>
  )
}

export default Header;
