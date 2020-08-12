import BlobThree from '~components/atoms/geometry/blobs/BlobThree';
import styles from './blob-list.module.scss'
import FullCircle from '~components/atoms/geometry/circles/full/FullCircle';
import {Colors} from '~models/colors';

const BlobList = ({
                      className,
                      listItems = [
                          'Hello from the other side',
                          'It must have been a thousand times',
                          'What is going on'
                      ]
                  }: { className?: string, listItems?: string[] }) => {
    const circleDiameter = '20px';
    return <div className={className}>
        <div className={styles.container}>
            <ul className={styles.list}>
                {listItems.map((item, index) =>
                    <li key={index} className={styles.item}><FullCircle height={circleDiameter} width={circleDiameter}
                                                            color={Colors.primary}/> <span
                        className={styles.itemText}>{item}</span></li>)}
            </ul>
            <div className={styles.blob}>
                <BlobThree color={Colors.accent}/>
            </div>
        </div>
    </div>
};

export default BlobList
