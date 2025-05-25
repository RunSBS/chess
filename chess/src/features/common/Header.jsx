import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faGear, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../../styles/header.css';
import { useEffect, useState } from 'react';
const Header = () =>{
    const [isMobile,setIsMobile]= useState(window.matchMedia('(max-width:900px)').matches);

    useEffect(()=>{
        const media = window.matchMedia('(max-width:900px)');
        const handleChange = (e) => setIsMobile(e.matches);
        media.addEventListener('change',handleChange)
        return () => {
            media.removeEventListener('change', handleChange);
        }
    },[])
    const Components = () =>{
        return(
            <div className='background'>
                <div className="header-container">
                    <div className='main'>
                        <div>Home</div>
                        <div>Tools</div>
                        <div>RANKING</div>
                        <div>Builders</div>
                    </div>
                    <div className='right'>
                        <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <div><FontAwesomeIcon icon={faGear} /></div>
                        
                    </div>
                </div>
            </div>
        )
    }
    const Hamburger = () =>{
        return(
            <div className='background'>
                <div className="hamburger-container">
                    <div className='hamburger-icon'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className='hamburger-title'>Chess Tools or Infos</div>
                </div>
            </div>
        )
    }
    return(
        
        <div>
            {isMobile?<Hamburger/>:<Components/>}
        </div>
    )
}
export default Header;