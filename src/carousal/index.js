import React, {useEffect, useRef, useState} from 'react';
import './Carousal.css';

function Carousal({data=[], renderItem=()=>{}, height=360, width=640}) {
    const [currIndex, setCurrIndex] = useState(0);
    const carousalRef = useRef(null)

    useEffect(() => {
        if(carousalRef.current) {
            carousalRef.current.style.transform = `translateX(${-1 * currIndex * width}px)`
        }
    }, [currIndex])

    console.log(currIndex,'currIndex');

    const onNext = () => {
        setCurrIndex(index => index + 1);
    }

    const onPrev = () => {
        setCurrIndex(index => index - 1);
    }

    return (
        <div className="carousal-container" style={{height, width}}>
            <div className="carousal-overlay">
                {currIndex !== 0 &&  <button onClick={onPrev} disabled={currIndex === 0} className="prev-button">{'<'}</button>}
                {currIndex !== data.length-1 && <button onClick={onNext} disabled={currIndex === data.length-1} className="next-button">{'>'}</button>}
                <div className="dot-container">
                    {data.map((item, index) => <div className={`dot ${currIndex == index ? 'dot-active' : ''}`}/>)}
                </div>
            </div>
            <div ref={carousalRef} className="carousal-data-container">
                {data.map((item, index) => <div className="carousal-item" style={{minHeight:height, minWidth:width}}> {renderItem({item, index})} </div> )}
            </div>
        </div>
    )
}

export default Carousal

