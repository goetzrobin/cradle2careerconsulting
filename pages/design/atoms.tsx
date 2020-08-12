import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import {ColorNames, Colors} from '~models/colors';
import TwoCornerDiagonalCircle from '~components/atoms/geometry/circles/twocorner-diagonal/TwoCornerDiagonalCircle';
import HalfCircle from '~components/atoms/geometry/circles/half/HalfCircle';
import * as React from 'react';
import OneCornerCircle from '~components/atoms/geometry/circles/onecorner/OneCornerCircle';
import TwoCornerCircle from '~components/atoms/geometry/circles/twocorner/TwoCornerCircle';
import MainHeading from '~components/atoms/typo/main-heading/main-heading';
import Navigation from './utils/navigation';
import Hidable from './utils/hidable';
import BlobOne from '~components/atoms/geometry/blobs/BlobOne';
import BlobTwo from '~components/atoms/geometry/blobs/BlobTwo';
import BlobFour from '~components/atoms/geometry/blobs/BlobFour';
import BlobThree from '~components/atoms/geometry/blobs/BlobThree';
import SectionHeading from '~components/atoms/typo/section-heading/section-heading';
import RectAngleStripes from '~components/atoms/geometry/other/RectangleStripes';
import Dots from '~components/atoms/geometry/other/Dots';
import Triangles from '~components/atoms/geometry/other/Triangles';
import Card from '~components/atoms/lists/card/card';
import Rocket from '~components/atoms/geometry/other/Rocket';
import TeamMember from '~components/atoms/lists/team-member/team-member';

const Atoms = ({title, description, ...props}) => {
    const height = '200px';
    const width = '200px';
    return <div style={{margin: 30}}>
        <Navigation siteName="Atoms"/>
        <Hidable name="Geometry - Circles">
            <h4>Full</h4>
            <FullCircle width={width} height={height} color={Colors.primary}/>
            <h4>Two Corner Diagonal</h4>
            <TwoCornerDiagonalCircle width={width} height={height} color={Colors.accent}/>
            <TwoCornerDiagonalCircle width={width} height={height} color={Colors.secondary}/>
            <TwoCornerDiagonalCircle width={width} height={height} color={Colors.secondary} hasImage={true}/>
            <TwoCornerDiagonalCircle width={width} height={height} color={Colors.secondary} hasImage={true}
                                     rotationInDegrees={90}/>
            <h4>Half</h4>
            <HalfCircle width={width} height={height}/>
            <h4>One Corner</h4>
            <OneCornerCircle width={width} height={height}/>
            <OneCornerCircle width={width} height={height} rotationInDegrees={90}/>
            <OneCornerCircle width={width} height={height} rotationInDegrees={180}/>
            <h4>Two Corner</h4>
            <TwoCornerCircle width={width} height={height}/>
            <TwoCornerCircle width={width} height={height} rotationInDegrees={90}/>
            <TwoCornerCircle width={width} height={height} rotationInDegrees={180}/>
        </Hidable>
        <Hidable name="Geometry: Blobs">
            <h4>Blob One</h4>
            <BlobOne width={width} height={height} color={Colors.accent} hasImage={true}/>
            <BlobOne width={width} height={height} color={Colors.accent}/>
            <BlobOne width={width} height={height} color={Colors.secondary}/>
            <BlobOne width={width} height={height} color={Colors.primary}/>
            <h4>Blob Two</h4>
            <BlobTwo width={width} height={height} color={Colors.accent}/>
            <BlobTwo width={width} height={height} color={Colors.secondary}/>
            <BlobTwo width={width} height={height} color={Colors.primary}/>
            <h4>Blob Three</h4>
            <BlobThree width={width} height={height} color={Colors.accent}/>
            <BlobThree width={width} height={height} color={Colors.secondary}/>
            <BlobThree width={width} height={height} color={Colors.primary}/>
            <h4>Blob Four</h4>
            <BlobFour width={width} height={height} color={Colors.accent}/>
            <BlobFour width={width} height={height} color={Colors.secondary}/>
            <BlobFour width={width} height={height} color={Colors.primary}/>
        </Hidable>
        <Hidable name="Geometry: Other">
            <h4> Rectangular Stripes</h4>
            <RectAngleStripes width={width} height={height} color={Colors.primary}/>
            <RectAngleStripes width={width} height={height} color={Colors.accent}/>
            <RectAngleStripes width={width} height={height} color={Colors.secondary}/>
            <h4> Dots</h4>
            <Dots width={width} height={height} color={Colors.primary}/>
            <Dots width={width} height={height} color={Colors.accent}/>
            <Dots width={width} height={height} color={Colors.secondary}/>
            <h4>Triangles</h4>
            <Triangles width={width} height={height} primaryColor={Colors.primary} secondaryColor={Colors.accent}/>
            <Triangles width={width} height={height} primaryColor={Colors.accent} rotationInDegrees={90} secondaryColor={Colors.primary}/>
            <Triangles width={width} height={height} primaryColor={Colors.accent} rotationInDegrees={45} secondaryColor={Colors.primary}/>
            <Triangles width={width} height={height} primaryColor={Colors.secondary} secondaryColor={Colors.accent}/>
            <h4>Rocket</h4>
            <div style={{height: 500, width: 500}}>
                <Rocket/>
            </div>
        </Hidable>
        <Hidable name="Typography">
            <h4>Main Heading</h4>
            <MainHeading content={[{text: 'Lorem Ipsum', underlineColor: ColorNames.accent}]}/>
            <MainHeading content={[
                {text: 'Your Child\'s', underlineColor: ColorNames.secondary, lineBreak: true},
                {text: 'Path to Success', underlineColor: ColorNames.primary},
            ]}/>
            <h4>Section Heading</h4>
            <SectionHeading content={[
                {text: 'Our Services', underlineColor: ColorNames.secondary, lineBreak: true}
            ]}/>
            <SectionHeading content={[
                {text: 'What Parents Say', underlineColor: ColorNames.accent, lineBreak: true}
            ]}/>
            <SectionHeading content={[
                {text: 'Our Team', underlineColor: ColorNames.primary, lineBreak: true}
            ]}/>
            <SectionHeading content={[
                {text: 'Our Mission &', underlineColor: ColorNames.secondary, lineBreak: true},
                {text: 'Values', underlineColor: ColorNames.primary}
            ]}/>
        </Hidable>
        <Hidable name="Lists: Card">
            <Card headline="I am cool" text={"lorem ipsum and so on"}/>
        </Hidable>
        <Hidable name="Lists: TeamMember">
            <TeamMember image="https://dayton247now.com/resources/media/78a8d466-7b75-43e1-a985-cce94351b406-large16x9_52537_383508x339.jpg?1588378429887" contact={{phone: 1234567890, email: 'email email'}} position="CEO" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." name="Robert Jr. Junior"/>
        </Hidable>
    </div>
};

export default Atoms;
