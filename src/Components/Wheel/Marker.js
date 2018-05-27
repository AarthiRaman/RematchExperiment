import React from 'react';

export default function Marker({}) {
    return <div className="wheel__marker">
        <svg>
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" viewBox="0 0 20 20">
                <path d="M0,0 L0,6 L9,3 z" fill="#fff" />
                </marker>
            </defs>
            <line x1="180" y1="50" x2="235" y2="50" stroke="#fff" stroke-width="15" marker-end="url(#arrow)"></line>
        </svg>
    </div>
}
