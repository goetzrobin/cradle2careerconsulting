import Layout from "./layout/layout"

import * as React from 'react';
import { NavLinkProps } from "~components/atoms/typo/nav-link/nav-link";
import { ColorNames, Colors } from "~models/colors";
import LayoutComponent from './layout/layout-component'
import MainHeading from "~components/atoms/typo/main-heading/main-heading";
import { useRouter } from "next/router";
import TextSectionCenter from "~components/molecules/texts/section-center/TextSectionCenter";
import { TeamMemberProps } from "~components/atoms/lists/team-member/team-member";
import EmailCTA from "~components/atoms/inputs/email-cta/email-cta";
import Monster from "~components/atoms/geometry/other/Monster";
import Adventure from "~components/atoms/lists/adventure/adventure";

const AdventuresTemplate = () => {
    const router = useRouter();
    const navItems: NavLinkProps[] = [
        { href: 'home', linkText: 'Back To The Homepage', underlineColor: ColorNames.secondary },
    ];
    const content = [{
        text: 'Daily Enrichment',
        underlineColor: ColorNames.primary,
        lineBreak: true
    },
    {
        text: 'Adventures!!',
        underlineColor: ColorNames.secondary,
        lineBreak: true
    }]

    const subheadingDaily = [
        {
            text: 'Daily Adventures',
            underlineColor: ColorNames.primary,
            lineBreak: true
        },
        {
            text: 'at 4PM!!',
            underlineColor: ColorNames.accent,
            lineBreak: true
        },
    ]

    const subheadingWeekly = [
        {
            text: 'Weekly Adventures!',
            underlineColor: ColorNames.secondary,
            lineBreak: false
        },
    ]

    const subheadingPlans = [
        {
            text: 'Start your Adventure!',
            underlineColor: ColorNames.accent,
            lineBreak: false
        }]


    const team: { [key: string]: TeamMemberProps } = {
        dannie: {
            name: 'Dannie Henry',
            image: 'images/dannie.jpg',
            position: 'Soccer Coach',
            text: 'Dannie Henry is a Columbia University graduate who has played soccer all her life, including on the Columbia women’s soccer team. Dannie teaches ball skills while also helping kids learn the technical game of soccer and the techniques athletes use to keep their bodies and minds at top performance!',
        },
        evan: {
            name: 'Evan Simone',
            image: 'images/evan.jpg',
            position: 'Chess Teacher',
            text: 'Evan is an artist living in New York City. She has been playing chess for 16 years. Her chess classes include movement and singing!'
        },
        priya: {
            name: 'Priya Sivalingam',
            image: 'images/priya.jpg',
            position: 'Science Teacher',
            text: ' Priya Sivalingam is living in Philadelphia where she is studying to become a doctor. She loves learning new things in all subjects and connecting them to our everyday lives. Her science classes aim to help scientifically explain things we see and experience every day!'
        },
        deanna: {
            name: 'DeAnna Supplee',
            image: 'images/deanna.jpg',
            position: 'Theatre Coach',
            text: 'DeAnna Supplee is a Philadelphia-born, New York City-trained actress. She holds a BA in Theatre Arts from the University of Pennsylvania and an MFA in Acting from The Actors Studio Drama School at Pace University.  She has also studied Classical Theatre at Oxford University.  DeAnna believes studying theatre not only makes students better performers, but also better people, by understanding the world and themselves through art!'
        },
        iman: {
            name: 'Iman Blow',
            image: 'images/iman.jpg',
            position: 'Fencing Coach',
            text: 'Iman Blow is a former Columbia University fencer, an award-winning athlete and an Olympic hopeful. She has ample experience teaching young people the fundamentals of fencing that she learned at the Peter Westbrook Foundation and she looks forward to teaching new students the foundational skills needed to develop into competitive young fencers.'
        },
        tabitha: {
            name: 'Tabitha Johnson',
            image: 'images/tabitha.jpg',
            position: 'Music Coach',
            text: 'Tabitha Johnson is an artist living in New York City. She has been playing the piano for 19 years. Her music classes include singing, songwriting, and playing instruments!'
        },
        renee: {
            name: 'Renee Palmer',
            image: 'images/renee.jpg',
            position: 'Art Teacher',
            text: 'A self-proclaimed "hyper-creative", Renee Palmer is always on the hunt for creative outlets to keep her hands and imagination active and engaged. From painting and collaging, to flower pressing, to indoor gardening, she aims to instill curiosity by exploring a variety of media with her students.'
        },
        destanee: {
            name: 'Destanee Bonds',
            image: 'images/destanee.jpg',
            position: 'Creative Writing Teacher',
            text: 'Destanee Bonds is a poet residing in Brooklyn, New York. She uses creative writing to explore and express. Participants in her sessions will have the opportunity to write, share and express their unique voices. '
        },
        britney: {
            name: 'Britney Sandifer',
            image: 'images/britney.jpg',
            position: 'Dancing Coach',
            text: 'Britney Sandifer has been a teaching artist for 15 years. She has taught at the Ailey School, Harlem Children’s Zone, and many other dance institutions in New York and New Jersey. Britney has her BFA from the California Institute of the Arts. She loves to spark passion for dance in youth!'
        },
        masterfranz: {
            name: 'Master Franz',
            image: 'images/masterfranz.jpg',
            position: 'Tae Kwon Do Master',
            text: 'Master Franz Cadet is Head Instructor, CEO, and Founder of Cadet Martial Arts and Fitness LLC based in Baltimore, MD. He has been training in Martial Arts for more than 40 years. He is also an international Referee and Coach under World Taekwondo and USA Taekwondo. His classes will teach students something new in every session. Classes will also be fun, easy to follow and entertaining. He will start with the basic fundamental skills and then hopes to gradually move to intermediate and advanced skills.'
        }
    }

    const cardList = [
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Music',
            time: '4:30 PM',
            icon: 'guitar',
            instructor: team['tabitha'],
            day: 'mon',
            text: `Coach Tabitha will help students express the music inside them via movement, singing, song writing, and playing! Students will use household objects, their voices, their bodies and recorders to make noise and learn the fundamentals of music. They will enjoy the art of music making in a myriad of ways, practice reading notes and even perform a few songs by school year’s end.`
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Tae Kwon Do',
            time: '4:30 PM',
            icon: 'fist-raised',
            instructor: team['masterfranz'],
            day: 'thu',
            text: `Master Franz Cadet will help students to learn and practice Tae Kwon Do, allowing kids to be active at home while also practicing discipline and body control. Master Franz will teach students how master martial artists take care of their minds and bodies in order to ultimately reach the goal of receiving an official Tae Kwon Do belt!`
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Chess',
            time: '5:15 PM',
            icon: 'chess',
            instructor: team['evan'],
            day: 'thu',
            text: `Students will learn and practice the game of chess through an 
            online platform while singing and moving with Coach Evan!`
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Fencing',
            time: '5:15 PM',
            icon: 'shield-alt',
            instructor: team['iman'],
            day: 'mon',
            text: `Coach Iman is an world class fencer and will teach her students the fundamental skills that she built upon in order to get to the very top of her game. Students will learn the footwork, arm and core strength, body control, discipline and healthy habits to become successful little fencers!`
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Soccer',
            time: '4:30 PM',
            icon: 'futbol',
            instructor: team['dannie'],
            day: 'fri',
            text: `Students will learn the game of soccer with Coach Dannie! 
            They will be inspired by some of the game’s greats, watch highlights and play games 
            to learn positionality and successful game strategy. They will learn ball skills, 
            essential touch techniques and healthy habits to prepare them for future success on the field.`
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Creative Writing',
            time: '5:15 PM',
            icon: 'pencil-alt',
            instructor: team['destanee'],
            day: 'fri',
            text: `Students will write to explore their worlds and express their realities with Coach Destanee. They will engage with a variety of types of writing including comics, poetry, songs and speeches, with space to follow their own passions and see where the pen and paper take them.`
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Dance',
            time: '4:30 PM',
            icon: 'music',
            instructor: team['britney'],
            day: 'tue',
            text: `Students will practice all kinds of dance with Coach Britney from ballet to modern, hip-hop to African dance and more. Britney will inspire students with performances from great dancers who have inspired her to move and work hard to hone her craft and she will encourage them to work hard themselves to learn the techniques needed to be great dancers!`
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Theatre',
            time: '4:30 PM',
            icon: 'crown',
            instructor: team['deanna'],
            day: 'wed',
            text: `Students will learn the fundamental concepts and techniques of acting and performance with Coach DeAnna. They will observe and practice expert acting skills like enunciating and projecting, while writing and performing their own skits and working toward a virtual play!
            `
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Art',
            time: '5:15 PM',
            icon: 'palette',
            instructor: team['renee'],
            day: 'wed',
            text: `“Hyper creative” Coach Renee will give students a creative outlet where they will activate their hands and their imaginations to create their own art, explore the world of art and “meet” the artists that paved the way toward the vast arenas of expression that we are fortunate enough to enjoy today.`
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Global Exploration',
            time: '',
            icon: 'globe-americas',
            text: ``
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Science',
            time: '5:15 PM',
            icon: 'atom',
            instructor: team['priya'],
            day: 'tue',
            text: `Students will learn and explore science concepts
             and characters that relate to their real-world experiences 
             via simple household experiments with Coach Priya, a pre-med
              student who loves learning and exploring as much as she loves
             teaching young scientists and watching them learn and grow!`
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Yoga',
            time: '',
            icon: 'spa',
            text: ``
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'SEL',
            time: '',
            icon: 'people-arrows',
            text: ``
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Meditation',
            time: '',
            icon: 'brain',
            text: ``
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Spanish',
            time: '',
            icon: 'anchor',
            text: ``
        },
    ];

    const onItemClicked = (href: string) => {
        switch (href) {
            case 'home':
                router.push('/')
        }
    }

    var result = cardList.reduce(function (map, obj) {
        let day = obj.day ?? 'daily';
        map[day] = [...(map[day] ?? []), obj];
        return map;
    }, {});

    const days: { short: string, text: string }[] = [
        {
            short: 'mon',
            text: 'Monday'
        },
        {
            short: 'tue',
            text: 'Tuesday'
        },
        {
            short: 'wed',
            text: 'Wednesday'
        },
        {
            short: 'thu',
            text: 'Thursday'
        },
        {
            short: 'fri',
            text: 'Friday'
        }
    ]

    return <Layout navItems={navItems} onItemClicked={onItemClicked}>
        <LayoutComponent>
            <div className="activities-header">

                <MainHeading content={content} />
                <div>
                    <Monster />
                    <p style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
                        A virtual after-school program providing live, safe,
                        interactive enrichment and fun with other kids! Students will learn
                        new skills and explore from sea to sea via music, chess, martial arts, visual arts,
                        culinary arts, creative writing, dance, drama and science with some yoga, Spanish and SEL sprinkled on top.
                    </p>
                </div>

            </div>

        </LayoutComponent>
        <LayoutComponent>
            <TextSectionCenter sectionContent={subheadingDaily} />
            <p>
                30-minute daily introductions with youth development specialist Simone Henry of Harvard Graduate School of education. Intros will consist of yoga and meditation, social emotional learning, local and global exploration, remote community service projects, read-alouds and Spanish! Students will get grounded with breathing and meditative movement. They will discuss their thoughts, emotions and circumstances and strategies they can use to be the best they can be at home, in school and beyond! They will plan and practice small and large acts of kindness that can contribute to bettering their immediate and broader communities, and they will virtually explore the world from their home state to all 7 continents with a bit of Spanish in the mix!
        </p>
            <div className="adventures-daily">
                <div className="adventures-daily-activities">
                    {result['daily'].map((card, index) => <Adventure key={index} icon={card.icon} headline={card.headline} time={card.time} instructor={card.instructor} iconBackgroundColor={card.iconBackgroundColor} />)}
                </div>
            </div>
            <TextSectionCenter sectionContent={subheadingWeekly} />
            <div className="adventures-grid">
                {days.map((day, index) => {
                    return <div key={index} className="adventures-day">
                        <h2 style={{ fontSize: '1.75rem' }}>{day.text}</h2>
                        <div className="adventures-weekday-activities">
                            {result[day.short].map((card, index) => <Adventure key={index} day={day.text} icon={card.icon} headline={card.headline} time={card.time} text={card.text} instructor={card.instructor} iconBackgroundColor={card.iconBackgroundColor} />)}
                        </div>
                    </div>
                })}
            </div>
        </LayoutComponent>
        <LayoutComponent>
            <TextSectionCenter sectionContent={subheadingPlans} />
            <div className='adventure-prices'>
                <div className='adventure-prices-item'>
                    <div>
                        <h2 className='adventure-prices-item-headline'>Single Session Drop Ins</h2>
                        <div className='adventure-prices-item-price'>
                            <p>$50 <span>per day</span></p>
                            <p>$30 <span>per single class</span></p>
                        </div>
                    </div>
                </div>

                <div className='adventure-prices-item'>
                    <div>
                        <h2 className='adventure-prices-item-headline'>One Week Drop Ins</h2>
                        <div className='adventure-prices-item-price'>
                            <p>$30 <span>per day</span></p>
                            <p>$15 <span>per single class</span></p>
                        </div>

                    </div>
                    <p className='adventure-prices-item-price-total'>$150</p>
                </div>

                <div className='adventure-prices-item'>
                    <div>
                        <h2 className='adventure-prices-item-headline'>Full Semester</h2>
                        <div className='adventure-prices-item-price'>
                            <p>$15 <span>per day</span></p>
                            <p>$7.5 <span>per single class</span></p>
                        </div>
                    </div>

                    <p className='adventure-prices-item-price-total'>$450</p>
                </div>

                <div className='adventure-prices-item'>
                    <div>
                        <h2 className='adventure-prices-item-headline'>Full Semester With A Referral</h2>
                        <div className='adventure-prices-item-price'>
                            <p>$10 <span>per day</span></p>
                            <p>$5 <span>per single class</span></p>
                        </div>
                    </div>
                    <p className='adventure-prices-item-price-total'>$300</p>
                </div>
            </div>
            <h4>All prices are per family!</h4>
            <div style={{ marginTop: '50px' }}>
                <h2>Ready to join our Daily Adventures?</h2>
                <EmailCTA />
            </div>
        </LayoutComponent>
    </Layout>
}

export default AdventuresTemplate