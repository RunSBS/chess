import { useEffect,useState, useRef } from "react";
import Section1 from "../features/sections/Section1";
import Section2 from "../features/sections/Section2";
import Section3 from "../features/sections/Section3";

const FullPage = () => {
    const sections = ["section1","section2","section3"];
    const [currentIndex,setCurrentIndex] = useState(0);
    const isScrolling = useRef(false);
    const scrollTimer = useRef(null);
    useEffect(()=>{
        const handleWheel = (e) =>{
            if(isScrolling.current) return;
            
            // if(e.deltaY > 0){
            //     const next = document.getElementById("section2");
            //     if(next){
            //         next.scrollIntoView({behavior:"smooth"});
            //         window.location.hash = "#section2";
            //     }
            // } else{
            //     const prev = document.getElementById("section1");
            //     if(prev){
            //         prev.scrollIntoView({behavior:"smooth"});
            //         window.location.hash = "#section1";
            //     }
            // }
            
            let nextIndex = currentIndex;

            if(e.deltaY > 0 && currentIndex < sections.length-1){
                nextIndex = currentIndex +1;
            } else if(e.deltaY < 0 && currentIndex >0){
                nextIndex = currentIndex -1;
            } else return;

            const targetSection = document.getElementById(sections[nextIndex]);
            if(targetSection){
                isScrolling.current = true; // useRef를 통해서, isScrolling이란 변수를 선언하고 useRef의 기능으로써 current 값을 true로 바꿈
                targetSection.scrollIntoView({behavior:"smooth"});
                window.location.hash = `#${sections[nextIndex]}`;
                setCurrentIndex(nextIndex);
            }
            // setTimeout(()=>{ // 스크롤 중일떄는 isScrolling.current 를 true 설정, 사용가능할떄를 false로 바꿈
            //     isScrolling.current = false; // 스크롤이 멈춘후에 0.3초후에 잠금 해제
            // },100);
        };

        const handleScroll = (e) =>{
            clearTimeout(scrollTimer.current);
            scrollTimer.current = setTimeout(()=>{ // useRef로 해야함. 리랜더링 되어도 그전 값 기억함
                isScrolling.current = false;
            },100)
        };

        window.addEventListener("wheel",handleWheel,{passive:false});
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("wheel",handleWheel);
            window.removeEventListener("scroll",handleScroll);
        }
    },[currentIndex]);
    return(
        <div>
            {/* 100vw, 100vh의 컴포넌트를 3개 배치함, 각각 빨간배경, 파란배경, 녹색배경임 */}
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
    )
}
export default FullPage;