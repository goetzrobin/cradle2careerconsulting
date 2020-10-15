import * as React from 'react';
import Card, {CardProps} from '~components/atoms/lists/card/card';
import styles from './card-list.module.scss';

export interface CardListProps {
    cardList: CardProps[]
}
const CardList = ({cardList = []}: CardListProps) => {
    return <div className={styles.container}>
        {cardList.map((card, index) => <Card key={index} icon={card.icon} headline={card.headline} text={card.text} iconBackgroundColor={card.iconBackgroundColor}/>)}
    </div>
};

export default CardList
