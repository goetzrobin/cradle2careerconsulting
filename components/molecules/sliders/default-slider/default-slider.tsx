// @ts-nocheck
import React, {PropsWithChildren, useState} from 'react';
import {useKeenSlider} from 'keen-slider/react';
import styles from './default-slider.module.scss';
import {Colors} from '~models/colors';

const DefaultSlider = ({showDots = false, onSlideChanged = (newIndex: number) => {}, children}: PropsWithChildren<any>) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
            onSlideChanged(s.details().relativeSlide)
        }
    });
    return (
        <>
            <div className={styles.navigationWrapper}>
                <div ref={sliderRef} className="keen-slider">
                    {children.map((item, index) => <div className="keen-slider__slide" key={index}>{item}</div>)}
                </div>
                {slider && (
                    <div className={styles.arrows}>
                        <ArrowLeft
                            onClick={e => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />

                        <ArrowRight
                            onClick={e => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </div>
                )}
            </div>
            {(slider && showDots) && (
                <div className={styles.dots}>
                    {[...Array(slider.details().size).keys()].map(idx => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx);
                                }}
                                className={`${styles.dot} ${(currentSlide === idx ? styles.active : '')}`}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default DefaultSlider;
const arrowSize = '100%';
const arrowColor = Colors.primary;
function ArrowLeft(props) {
    const disabeld = props.disabled ? styles.arrowDisabled : '';
    return (
        <svg
            onClick={props.onClick}
            className={`${styles.arrow} ${styles.arrowLeft} ${disabeld}`}
            width={arrowSize} height={arrowSize} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z"
                  fill={`#${arrowColor}`}/>
        </svg>
    );
}

function ArrowRight(props) {
    const disabeld = props.disabled ? styles.arrowDisabled : '';
    return (
        <svg
            onClick={props.onClick}
            className={`${styles.arrow} ${styles.arrowRight} ${disabeld}`}
            fill="none" width={arrowSize} height={arrowSize} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
                  fill={`#${arrowColor}`}/>
        </svg>
    );
}
