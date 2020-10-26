import Activities from "pages/adventures"
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
            text: 'Weekly Adventures',
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
            text: 'Dannie is a Columbia University athlete and former Columbia soccer player...',
        },
        evan: {
            name: 'Evan Simone',
            image: 'images/evan.jpg',
            position: 'Chess Teacher',
            text: 'Evan is an artist living in New York City. She has been playing chess for 16 years. Her chess classes include movement and singing!'
        }
    }

    const cardList = [
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Music',
            time: '4:30 PM',
            icon: 'guitar',
            instructor: 'Tabitha',
            day: 'mon'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Tae Kwon Do',
            time: '4:30 PM',
            icon: 'fist-raised',
            instructor: 'Master Franz',
            day: 'thu'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Chess',
            time: '5:15 PM',
            icon: 'chess',
            instructor: team['evan'],
            day: 'thu'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Fencing',
            time: '5:15 PM',
            icon: 'shield-alt',
            instructor: 'Iman',
            day: 'mon'
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Soccer',
            time: '4:30 PM',
            icon: 'futbol',
            instructor: team['dannie'],
            day: 'fri'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Creative Writing',
            time: '5:15 PM',
            icon: 'pencil-alt',
            instructor: 'Destanee',
            day: 'fri'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Dance',
            time: '4:30 PM',
            icon: 'music',
            instructor: 'Britney',
            day: 'tue'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Theatre',
            time: '4:30 PM',
            icon: 'crown',
            instructor: 'Dee',
            day: 'wed'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Art',
            time: '5:15 PM',
            icon: 'palette',
            instructor: 'Dee',
            day: 'wed'
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Global Exploration',
            time: '',
            icon: 'globe-americas'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Science',
            time: '5:15 PM',
            icon: 'atom',
            instructor: 'Priya',
            day: 'tue'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Yoga',
            time: '',
            icon: 'spa'
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'SEL',
            time: '',
            icon: 'people-arrows'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Meditation',
            time: '',
            icon: 'brain'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Spanish',
            time: '',
            icon: 'anchor'
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
                        culinary arts, creative writing, dance, drama and science with some yoga and SEL sprinkled on top.
                    </p>
                </div>

            </div>

        </LayoutComponent>
        <LayoutComponent>
        <TextSectionCenter sectionContent={subheadingDaily} />
            <div className="adventures-daily">
                <div className="adventures-daily-activities">
                    {result['daily'].map((card, index) => <Adventure key={index} icon={card.icon} headline={card.headline} time={card.time} instructor={card.instructor} iconBackgroundColor={card.iconBackgroundColor} />)}
                </div>
            </div>
            <TextSectionCenter sectionContent={subheadingWeekly} />
            <div className="adventures-grid">
                {days.map(day => {
                    return <div className="adventures-day">
                        <h2 style={{fontSize: '1.75rem'}}>{day.text}</h2>
                        <div className="adventures-weekday-activities">
                            {result[day.short].map((card, index) => <Adventure key={index} icon={card.icon} headline={card.headline} time={card.time} instructor={card.instructor} iconBackgroundColor={card.iconBackgroundColor} />)}
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
                            <p>$30<span>per day</span></p>
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
                        <h2 className='adventure-prices-item-headline'>Full Semester With A Buddy</h2>
                        <div className='adventure-prices-item-price'>
                            <p>$10 <span>per day</span></p>
                            <p>$20 <span>per single class</span></p>
                        </div>
                    </div>
                    <p className='adventure-prices-item-price-total'>$300</p>
                </div>
            </div>
            <div style={{marginTop: '50px'}}>
                <h2>Ready to join our daily Adventures?</h2>
                <EmailCTA />
            </div>
        </LayoutComponent>
    </Layout>
}

export default AdventuresTemplate