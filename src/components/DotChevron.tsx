import React from 'react';

/**
 * Small dotted "pixel" chevron used across the design (ticker, hero bands, CTA).
 * Drawn as a grid of dots so it matches the dot-matrix arrows in the mockups.
 */
const RIGHT_DOTS: Array<[number, number]> = [
  [0, 0], [1, 0],
  [1, 1], [2, 1],
  [2, 2], [3, 2],
  [1, 3], [2, 3],
  [0, 4], [1, 4]
];

export const DotChevron: React.FC<{
  direction?: 'left' | 'right';
  color?: string;
  size?: number; // dot pitch in px
  className?: string;
  style?: React.CSSProperties;
}> = ({ direction = 'right', color = '#c9ccd1', size = 2.4, className, style }) => {
  const w = 4 * size;
  const h = 5 * size;
  const r = size * 0.36;
  return (
    <svg
      className={className}
      style={style}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
    >
      {RIGHT_DOTS.map(([cx, cy], i) => {
        const x = direction === 'right' ? cx : 3 - cx;
        return <circle key={i} cx={x * size + size / 2} cy={cy * size + size / 2} r={r} fill={color} />;
      })}
    </svg>
  );
};
