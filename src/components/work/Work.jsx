import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const Work = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
      });
    const { t } = useTranslation();

    return (
        <section className="section" ref={ref}>
            <div className="work relative text-[#201f1f] bg-no-repeat bg-center bg-cover flex-1 flex justify-evenly items-center">
                <div className="w-full h-full absolute bg-amber-500/85 z-10"></div>
            <div className="text-[#201f1f] flex-1 flex justify-evenly items-center pt-40 pb-32 px-10 z-20">

            <div>
                <div className='text-[85px] font-oswald font-bold  max-sm:text-[40px]  text-gradient pb-10 max-sm:pb-4'>
                  {inView ? <CountUp start={0} end={6} duration={2.5} /> : 0}
                </div>
                <div className='font-oswald uppercase font-semibold pl-1 text-md max-sm:text-sm tracking-[2px]'>
                  Years of <br /> experience.
                </div>
              </div>
              <div>
                <div className='text-[85px] font-oswald font-bold  max-sm:text-[40px]  text-gradient pb-10 max-sm:pb-4'>
                  {inView ? <CountUp start={0} end={2} duration={2.5} /> : 0}K+
                </div>
                <div className='font-oswald uppercase font-semibold pl-1 text-md max-sm:text-sm tracking-[2px]'>
                  Delivered <br /> PACKAGES&LOADS.
                </div>
              </div>
              <div>
                <div className='text-[85px] font-oswald font-bold  max-sm:text-[40px]  text-gradient pb-10 max-sm:pb-4'>
                  {inView ? <CountUp start={0} end={200} duration={2.5} /> : 0}+
                </div>
                <div className='font-oswald uppercase font-semibold pl-1 text-md max-sm:text-sm tracking-[2px]'>
                  Satisfied <br /> Clients&Companies.
                </div>
              </div>
              <div>
                <div className='text-[85px] font-oswald font-bold  max-sm:text-[40px]  text-gradient pb-10 max-sm:pb-4'>
                  {inView ? <CountUp start={0} end={100} duration={2.5} /> : 0}+
                </div>
                <div className='font-oswald uppercase font-semibold pl-1 text-md max-sm:text-sm tracking-[2px]'>
                  City Coverd <br /> in Saudi Arabia.
                </div>
              </div>
              </div>
            </div>
        </section>
    );
}

export default Work;
