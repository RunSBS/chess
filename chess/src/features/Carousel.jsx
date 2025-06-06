import { useEffect, useState } from 'react';
import '../styles/carousel.css';
const Carousel = () =>{
    const [currentBox,setCurrentBox] = useState(0);
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const colors = ['red','blue','green'];
    useEffect(() => {
  const handleWheel = (e) => {
    console.log("휠 감지됨!", e.deltaY);  // e.deltaY: 휠을 얼마나 돌렸는지
  };

  window.addEventListener("wheel", handleWheel);

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, []);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCurrentBox((prev)=> (prev+1) % arr.length );
        },5000)
        return ()=>{
            clearTimeout(timer);
        }
    },[currentBox]);
    
    const STEP = 198 + 24; // 슬라이드 너비 + gap
    return(
        <div className='carousel-outer'>
            <div className='carousel-wrapper'>
                <div style={{color:"white",fontSize:"50px",textAlign:"center"}}>
                    색깔 케러셀
                </div>
                <div className="carousel-track" style={{ transform: `translateX(calc(222px - ${currentBox * 222}px)`}}>
                    {arr.map((a,i)=>{
                        let className = 'slide';
                        if( i === currentBox ) className += ' active';
                        else if( i === (currentBox -1 + arr.length)% arr.length) className += ' prev';
                        else if( i === (currentBox +1) % arr.length) className += ' next';
                        return(
                            <div key ={i}className={className + " " + colors[i % colors.length]}>
                                
                            </div>
                        )
                    })}
                </div>
                <button className='bef' onClick={()=>{
                    setCurrentBox((prev)=>(prev-1 + arr.length) % arr.length);
                }}>이전</button>
                <button className='aft' onClick={()=>{
                    setCurrentBox((prev)=>(prev+1) % arr.length);
                }}>다음</button>
                <div className='indicator'>

                </div>
            </div>
        </div>
    )
}
export default Carousel;