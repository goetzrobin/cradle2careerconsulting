import {default as React} from 'react';
import {IndexTemplateProps} from '~components/templates';
import {UnderlineContent} from '~models/UnderlineContent';


const buildHeading = (heading: UnderlineContent[]) => heading.map(line => <span
    className={`heading__${line.underlineColor} heading__linebreak__${line.lineBreak}`}>{line.text} </span>);
const HomePreview = ({
                         title,
                         hero,
                         mission,
                         services,
                         testimonials,
                         team,
                         cta
                     }: IndexTemplateProps) => {
    return <div>
        <div className="preview__section">
            <h2>{title}</h2>
            <h1>{buildHeading(hero.heading)}</h1>
            <button>{hero.buttonText}</button>
            <img src={hero.image1}/>
        </div>

        <div className="preview__section">
            <h1>{buildHeading(mission.heading)}</h1>
            <p>{mission.text}</p>
            <ul>{mission.values.map(value => <li><span className="preview__list__dot"/>{value}</li>)}</ul>
        </div>

        <div className="preview__section">
            <h1 className="preview__headline_middle">{buildHeading(services.heading)}</h1>
            <p>{services.text}</p>
            <div className="preview__service">
                {services.cards.map(card =>
                    <div className="preview__service__card">
                        <div className="preview__service__dot"/>
                        <h2>{card.headline}</h2>
                        <div className="preview__service__text">{card.text}</div>
                    </div>
                )}
            </div>
        </div>


        <div className="preview__section">
        <h1 className="preview__headline_middle">{buildHeading(testimonials.heading)}</h1>
        <div className="preview__ts">
            {testimonials.testimonials.map(card =>
                <div className="preview__ts__card">
                    <div className="preview__ts__dot"/>
                    <div className="preview__ts__content">
                        <p className="preview__ts__quote">{card.intro}</p>
                        <div className="preview__ts__name">{card.name}</div>
                        <div className="preview__ts__info">{card.text}</div>
                    </div>
                </div>
            )}
        </div>
    </div>


        <div className="preview__section">
            <h1 className="preview__headline_middle">{buildHeading(team.heading)}</h1>
            <p>{team.text}</p>
            <div className="preview__service">
                {team.educators.map(card =>
                    <div className="preview__team__card">
                        <div className="preview__team__dot"/>
                        <h2>{card.name}</h2>
                        <div className="preview__team__position">{card.position}</div>
                        <div className="preview__team__text">{card.text}</div>
                        <div className="preview__team__contact">{card.contact.email}</div>
                        <div className="preview__team__contact">{card.contact.phone}</div>
                    </div>
                )}
            </div>
        </div>


        <div className="preview__section">
            <h1 className="preview__cta__heading">{buildHeading(cta.heading)}</h1>
            <p>{cta.text}</p>
        </div>


    </div>
};

export default HomePreview;
