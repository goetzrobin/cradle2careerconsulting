import * as React from 'react';
import stlyes from './team.module.scss';
import {UnderlineContent} from '~models/UnderlineContent';
import TextSectionCenter from '~components/molecules/texts/section-center/TextSectionCenter';
import TeamSilder from '~components/molecules/sliders/team-slider/team-slider';
import styles from '~components/organisms/services/services.module.scss';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import {Colors} from '~models/colors';
import Dots from '~components/atoms/geometry/other/Dots';
import Triangles from '~components/atoms/geometry/other/Triangles';
import {TeamMemberProps} from '~components/atoms/lists/team-member/team-member';

export interface TeamProps {
    sectionContent: UnderlineContent[];
    text: string;
    team: TeamMemberProps[]
}

const Team = ({sectionContent, text, team}: TeamProps) => {
    return <div className={stlyes.container}>
        <TextSectionCenter sectionContent={sectionContent} text={text}/>
        <div className={stlyes.team}>
            <TeamSilder team={team}/>
        </div>

        <div className={styles.stripes}>
            <RectAngleStripes width="100px" height="100px"  color={Colors.primary}/>
        </div>
        {/*<div className={styles.dots}>*/}
        {/*    <Dots color={Colors.secondary} width="150px" height="150px"/>*/}
        {/*</div>*/}
        <div className={styles.triangles}>
            <Triangles primaryColor={Colors.accent} secondaryColor={Colors.secondary} width="60px" height="60px"/>
        </div>
    </div>
};

export default Team
