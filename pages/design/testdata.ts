import {ColorNames, Colors} from '~models/colors';

export const td = {
    hero: {
        headingContent: [
            {text: 'Your Child\'s', underlineColor: ColorNames.secondary, lineBreak: true},
            {text: 'Path to Success', underlineColor: ColorNames.accent},
        ],
        buttonText: 'Reach Out Today'
    },
    mission: {
        listItems: [
            'Hello from the other side',
            'It must have been a thousand times',
            'What is going on'],
        sectionContent: [
            {text: 'Our Mission &', underlineColor: ColorNames.secondary, lineBreak: true},
            {text: 'Values', underlineColor: ColorNames.primary}],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    services: {
        sectionContent: [
            {text: 'Our Services', underlineColor: ColorNames.accent, lineBreak: true}
        ],
        cardList: [
            {iconBackgroundColor: Colors.secondary, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.primary, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.accent, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.secondary, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.secondary, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.primary, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.accent, headline: 'string', text: 'string'},
            {iconBackgroundColor: Colors.secondary, headline: 'string', text: 'string'},
        ]
    },
    tm: {
        sectionContent: [
            {text: 'What Parents Say', underlineColor: ColorNames.primary, lineBreak: true}
        ],
        tms: [
            {
                image: 'https://fresnostate.edu/commencement/images/african_american.jpg',
                info: 'Who has had a good exp.',
                name: 'A parent',
                text: 'Bla bli blup und so'
            },
            {
                image: 'https://dayton247now.com/resources/media/78a8d466-7b75-43e1-a985-cce94351b406-large16x9_52537_383508x339.jpg?1588378429887',
                info: 'Who has had a good exp.',
                name: 'A parent',
                text: 'Bla bli blup und so'
            },
            {
                image: 'https://diversity.iupui.edu/faculty-staff/black-fsc/images/slide-01',
                info: 'Who has had a good exp.',
                name: 'A parent',
                text: 'Bla bli blup und so'
            }
        ]
    },
    team: {
        sectionContent: [
            {text: 'Our Team', underlineColor: ColorNames.secondary, lineBreak: true}
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.',
        team: [
            {
                image: 'https://fresnostate.edu/commencement/images/african_american.jpg',
                text: 'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua',
                role: 'CEO & Educator',
                name: 'Trisha Teacher',
                contact: {email: 'emaiemail.com', phone: 267744444}
            },
            {
                image: 'https://dayton247now.com/resources/media/78a8d466-7b75-43e1-a985-cce94351b406-large16x9_52537_383508x339.jpg?1588378429887',
                text: 'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua',
                role: 'VP of Tutoring',
                name: 'Pete Professor',
                contact: {email: 'emaiemail.com', phone: 267744444}
            },
            {
                image: 'https://diversity.iupui.edu/faculty-staff/black-fsc/images/slide-01',
                role: 'Content Manager',
                text: 'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua',
                name: 'Brandon Business',
                contact: {email: 'emaiemail.com', phone: 267744444}
            },
        ]
    },
    cta: {
        sectionContent: [
            {text: 'Your Child’s Path To Success', underlineColor: ColorNames.accent, lineBreak: true}
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.'
    }

};
