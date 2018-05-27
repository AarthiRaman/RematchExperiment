import React from 'react';
import Marker from './Marker';
import './Wheel.css';

const getSectorPath = (x, y, outerDiameter, a1, a2) => {
    const degtorad = Math.PI / 180;
    const halfOuterDiameter = outerDiameter / 2;
    const cr = halfOuterDiameter - 5;
    const cx1 = (Math.cos(degtorad * a2) * cr) + x;
    const cy1 = (-Math.sin(degtorad * a2) * cr) + y;
    const cx2 = (Math.cos(degtorad * a1) * cr) + x;
    const cy2 = (-Math.sin(degtorad * a1) * cr) + y;

    return "M" + x + " " + y + " " + cx1 + " " + cy1 + " A" + cr + " " + cr + " 0 0 1 " + cx2 + " " + cy2 + "Z";
}

const getTextPath = (x, y, outerDiameter, a1, a2) => {
    const degtorad = Math.PI / 180;
    const halfOuterDiameter = outerDiameter / 2;
    const cr = halfOuterDiameter - 5;
    const cx1 = (Math.cos(degtorad * a2) * cr) + x;
    const cy1 = (-Math.sin(degtorad * a2) * cr) + y;
    const cx2 = (Math.cos(degtorad * a1) * cr) + x;
    const cy2 = (-Math.sin(degtorad * a1) * cr) + y;

    return "M" + x + " " + y;
}

const calculateAngle = (totalSections, sectionNo) => {
    const sectLength = 360 / totalSections;

    return {
        start: ( sectLength*sectionNo),
        end: sectLength * (sectionNo + 1) > 360 ? 0 :sectLength * (sectionNo + 1)
    }
};

export default function Wheel({ form, wheel }) {
    const outerDiameter=575;
    const validEntries = form.wheel.status ? form.inputs.filter((entry) => entry.value.length > 0 ? entry.value : null) : [];
    const entryArrays = validEntries.length > 0 ? validEntries.map((entry) => entry.value) : Array(12).fill('Your options');
    const colorWheel = ['#c51b8a', '#fa9fb5', '#fde0dd', '#f1ddcf', '#ffddf4', '#ffb3de'];

    return <div className="wheel__wrapper">
    <svg width={outerDiameter} height={outerDiameter}>
        {entryArrays.join(',')}
           {
            entryArrays.map((val, i) => <g>
                <path d={getSectorPath(outerDiameter / 2, outerDiameter / 2, outerDiameter, calculateAngle(entryArrays.length, i).start, calculateAngle(entryArrays.length, i).end)} fill={colorWheel[i % colorWheel.length]}/>
                <path id={`arc${i}`} d={getTextPath("M 100,200 H 200,300", calculateAngle(entryArrays.length, (i+0.75)).end)} fill={"#000"} />
                
                <text>
                <textPath startOffset={"70%"} href={`#arc${i}`}>
                  {val}
                </textPath>
              </text>
              </g>
            )            
           }
        </svg>
        <Marker />
    </div>
}