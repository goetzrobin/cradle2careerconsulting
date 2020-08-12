import * as React from 'react';
import Navigation from './utils/navigation';
import Hidable from './utils/hidable';
import Mission from '~components/organisms/mission/mission';
import Hero from '~components/organisms/hero/hero';
import Services from '~components/organisms/services/services';
import {td} from '~models/testdata';
import Testiomnials from '~components/organisms/testimonials/testimonials';
import CTA from '~components/organisms/cta/cta';


const Organisms = () => {
    return (
        <div style={{margin: 30}}>
            <Navigation siteName="Organisms"/>
            <Hidable name="Hero">
                <Hero headingContent={td.hero.headingContent} buttonText={td.hero.buttonText}/>
            </Hidable>
            <Hidable name="Mission">
                <Mission listItems={td.mission.listItems} sectionContent={td.mission.sectionContent}
                         text={td.mission.text}/>
            </Hidable>
            <Hidable name="Services">
                <Services sectionContent={td.services.sectionContent} cardList={td.services.cardList}/>
            </Hidable>
            <Hidable name="Testimonials">
                <Testiomnials
                    sectionContent={td.tm.sectionContent}
                    testimonials={td.tm.tms}/>
            </Hidable>
            <Hidable name="CTA">
                <CTA
                    sectionContent={td.cta.sectionContent}
                    text={td.cta.text}>
                    <button className="btn">Reach Out Today</button>
                </CTA>
            </Hidable>
        </div>
    );
};

export default Organisms
