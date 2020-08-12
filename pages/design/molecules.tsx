import CircleGraphic from '~components/molecules/circle-graphic/CircleGraphic';
import * as React from 'react';
import HeroText from '~components/molecules/texts/hero-text/HeroText';
import Navigation from './utils/navigation';
import Hidable from './utils/hidable';
import TextSectionLeft from '~components/molecules/texts/section-left/TextSectionLeft';
import {ColorNames, Colors} from '~models/colors';
import TextSectionCenter from '~components/molecules/texts/section-center/TextSectionCenter';
import TextSectionCta from '~components/molecules/texts/section-cta/TextSectionCta';
import BlobList from '~components/molecules/lists/blob-list/blob-list';
import ValuesList from '~components/molecules/lists/values-list/values-list';
import CardList from '~components/molecules/lists/card-list/card-list';
import BlobPicture from '~components/molecules/blob-picture/blob-picture';
import Quote from '~components/molecules/texts/quote/quote';
import DefaultSlider from '~components/molecules/sliders/default-slider/default-slider';
import QuoteSlider from '~components/molecules/sliders/quote-slider/quote-slider';

const Molecules = () => {
    return (
        <div style={{margin: 30}}>
            <Navigation siteName="Molecules"/>
            <Hidable name="Circle Graphic">
                <CircleGraphic/>
            </Hidable>
            {/*<Hidable name="Hero Text">*/}
            {/*    <HeroText/>*/}
            {/*</Hidable>*/}
            <Hidable name="Texts: Section Left">
                <TextSectionLeft sectionContent={[
                    {text: 'Our Mission &', underlineColor: ColorNames.secondary, lineBreak: true},
                    {text: 'Values', underlineColor: ColorNames.primary}]}
                                 text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </Hidable>
            <Hidable name="Texts: Section Center">
                <TextSectionCenter sectionContent={[
                    {text: 'Our Team', underlineColor: ColorNames.secondary}]}
                                   text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <TextSectionCenter sectionContent={[
                    {text: 'Our Services', underlineColor: ColorNames.accent}]}
                />
            </Hidable>
            <Hidable name="Texts: Section CTA">
                <TextSectionCta sectionContent={[
                    {text: 'Your Child\'s Path to Success', underlineColor: ColorNames.accent}]}
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.">
                    <button className="btn" onClick={() => alert('Signing Up')}>Sign Up Today</button>
                </TextSectionCta>
            </Hidable>
            <Hidable name="BlobList">
                <BlobList/>
            </Hidable>
            <Hidable name="ValueList">
                <ValuesList/>
            </Hidable>
            <Hidable name="Card List">
                <CardList cardList={
                    [
                        {iconBackgroundColor: Colors.secondary, headline: 'string', text: 'string'},
                        {iconBackgroundColor: Colors.primary, headline: 'string', text: 'string'},
                        {iconBackgroundColor: Colors.accent, headline: 'string', text: 'string'},
                        {iconBackgroundColor: Colors.secondary, headline: 'string', text: 'string'},
                    ]
                }/>
            </Hidable>
            <Hidable name="BlobPicture">
                <BlobPicture/>
            </Hidable>
            <Hidable name="Quote">
                <Quote info="Who has had a good exp." name="A parent" text="Bla bli blup und so"/>
            </Hidable>
            <Hidable name="DefaultSlider">
                <DefaultSlider>
                    <Quote info="Who has had a good exp." name="A parent" text="Bla bli blup und so"/>
                    <Quote info="Who has had a good exp." name="A parent" text="Bla bli blup und so"/>
                    <Quote info="Who has had a good exp." name="A parent" text="Bla bli blup und so"/>
                </DefaultSlider>
            </Hidable>
            <Hidable name="QuoteSlider">
                <QuoteSlider quotes={[
                    {info: 'Who has had a good exp.', name: 'A parent', text: 'Bla bli blup und so'},
                    {info: 'Who has had a good exp.', name: 'A parent', text: 'Bla bli blup und so'},
                    {info: 'Who has had a good exp.', name: 'A parent', text: 'Bla bli blup und so'}
                ]}/>
            </Hidable>
        </div>
    );
};

export default Molecules
