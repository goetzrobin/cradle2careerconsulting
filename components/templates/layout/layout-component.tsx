import {PropsWithChildren} from 'react';
import styles from './layout.module.scss';
import * as React from 'react';

const LayoutComponent =
    React.forwardRef(
        ({style, fullWidth = false, children}: PropsWithChildren<any>,
         ref
        ) => {
            const maxWidthProps = !fullWidth && {maxWidth: 1200, marginRight: 'auto', marginLeft: 'auto'};
            // @ts-ignore
            return <div ref={ref} style={{...style, ...maxWidthProps}} className={styles.component}>
                {children}
            </div>
        }
    );
export default LayoutComponent
