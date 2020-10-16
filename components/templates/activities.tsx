import Activities from "pages/activities"
import Layout from "./layout/layout"

import * as React from 'react';
import { NavLinkProps } from "~components/atoms/typo/nav-link/nav-link";
import { ColorNames, Colors } from "~models/colors";
import LayoutComponent from './layout/layout-component'
import MainHeading from "~components/atoms/typo/main-heading/main-heading";
import { useRouter } from "next/router";
import CardList from "~components/molecules/lists/card-list/card-list";
import SectionHeading from "~components/atoms/typo/section-heading/section-heading";
import TextSectionCenter from "~components/molecules/texts/section-center/TextSectionCenter";
import Team from "~components/organisms/team/team";
import { TeamMemberProps } from "~components/atoms/lists/team-member/team-member";
import EmailCTA from "~components/atoms/inputs/email-cta/email-cta";
import Monster from "~components/atoms/geometry/other/Monster";

const ActivitiesTemplate = () => {
    const router = useRouter();
    const navItems: NavLinkProps[] = [
        { href: 'home', linkText: 'Home', underlineColor: ColorNames.secondary },
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

    const subheading = [
        {
            text: 'Our Adventures',
            underlineColor: ColorNames.accent,
            lineBreak: false
        }]


    const subheadingTeachers = [
        {
            text: 'Our Awesome Team',
            underlineColor: ColorNames.secondary,
            lineBreak: false
        }]

    const subheadingPlans = [
        {
            text: 'Start your Adventure!',
            underlineColor: ColorNames.accent,
            lineBreak: false
        }]


    const cardList = [
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Music',
            text: '',
            icon: 'guitar'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Martial Arts',
            text: '',
            icon: 'fist-raised'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Chess',
            text: '',
            icon: 'chess'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Fencing',
            text: '',
            icon: 'shield-alt'
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Soccer',
            text: '',
            icon: 'futbol'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Creative Writing',
            text: '',
            icon: 'pencil-alt'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Dance',
            text: '',
            icon: 'music'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Drama',
            text: '',
            icon: 'crown'
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'Culinary Arts',
            text: '',
            icon: 'utensils'
        },
        {
            iconBackgroundColor: Colors.secondary,
            headline: 'Science',
            text: '',
            icon: 'atom'
        },
        {
            iconBackgroundColor: Colors.primary,
            headline: 'Yoga',
            text: '',
            icon: 'spa'
        },
        {
            iconBackgroundColor: Colors.accent,
            headline: 'SEL',
            text: '',
            icon: 'people-arrows'
        },
    ]

    const team: TeamMemberProps[] = [
        {
            name: 'Dannie Henry',
            image: 'images/dannie.jpg',
            position: 'Soccer Coach',
            text: 'Dannie is a Columbia University athlete and former Columbia soccer player...',
        }
    ]
    const onItemClicked = (href: string) => {
        switch (href) {
            case 'home':
                router.push('/')
        }
    }
    return <Layout navItems={navItems} onItemClicked={onItemClicked}>
        <LayoutComponent>
            <div className="activities-header">
                <div>
                    <MainHeading content={content} />

                    <p style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
                        A virtual after-school program providing live, safe,
                        interactive enrichment and fun with other kids! Students will learn
                        new skills and explore from sea to sea via music, chess, martial arts, visual arts,
                        culinary arts, creative writing, dance, drama and science with some yoga and SEL sprinkled on top.
            </p>
                </div>
                <Monster />
            </div>

        </LayoutComponent>
        <LayoutComponent>
            <TextSectionCenter sectionContent={subheading} />
            <CardList cardList={cardList} />
        </LayoutComponent>
        <LayoutComponent>
            <Team sectionContent={subheadingTeachers} team={team} />
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
            <div>
                <h2>Ready to join our daily Adventures?</h2>
                <EmailCTA />
            </div>
        </LayoutComponent>
    </Layout>
}

export default ActivitiesTemplate