import {useKeenSlider} from 'keen-slider/react';
import * as React from 'react';
import {useState} from 'react';
import TeamMember, {TeamMemberProps} from '~components/atoms/lists/team-member/team-member';
import styles from './team-slider.module.scss';
import {Colors} from '~models/colors';

export interface TeamSliderProps {
    team: TeamMemberProps[]
}

const TeamSilder = ({team = []}: TeamSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const middle = Math.floor(team.length / 2);
    const [sliderRef] = useKeenSlider({
        slidesPerView: 1,
        mode: 'free-snap',
        spacing: 0,
        centered: true,
        loop: true,
        initial: middle,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        }
    });
    const teamComponents = team.map((teamMember, index) => <div key={index}
                                                                className={`keen-slider__slide ${(currentSlide === index) ? styles.active : styles.notActive}`}>
            <TeamMember color={Colors.accent} name={teamMember.name} image={teamMember.image} position={teamMember.position}
                        text={teamMember.text} contact={teamMember.contact}/>
        </div>
    );
    // @ts-ignore
    return (<div ref={sliderRef} className="keen-slider">
            {teamComponents}
        </div>
    );
};

export default TeamSilder;
