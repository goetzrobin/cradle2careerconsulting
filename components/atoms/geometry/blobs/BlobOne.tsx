import { Colors } from '~models/colors';
import * as React from 'react';

const BlobOne = ({ color = Colors.primary, hasImage = false, image= '/_next/static/images/dooo.jpg',
 width = '100%', height = '100%' }) => {
     let imagePath = require(`../../../../content/${image}?url`);
    return <svg width={width} height={height} viewBox="0 0 604 484" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="608" height="484">
            <path d="M184.077 78.9942C282.334 19.3623 394.751 -23.5383 479.706 14.2142C565.091 51.9668 623.016 170.373 604.566 257.032C586.116 343.262 490.433 397.746 404.619 436.786C318.805 475.825 242.431 499.42 162.624 472.393C82.817 445.366 -0.851592 367.286 0.00654797 290.494C0.864688 213.702 85.8205 138.197 184.077 78.9942Z" fill="#8A3FFC" />
        </mask>
        <g mask="url(#mask0)">
            <rect x="-61" y="-3" width="665" height="501" rx="2" fill="#F2F5F7" />
            <rect x="-61" y="-3" width="665" height="501" rx="2" fill={hasImage ? 'url(#pattern123)' : `#${color}`} />
        </g>
        {hasImage && <defs>
            <pattern id="pattern123" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image123" transform="translate(-0.0650376) scale(0.00101809 0.00135135)" />
            </pattern>
            <image id="image123" width="1110" height="740" href={imagePath}/>
        </defs>
        }
    </svg>;
}
export default BlobOne;
