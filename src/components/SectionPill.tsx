import React from 'react';

/** Small tactile "• Label" pill used above section headings throughout the design. */
export const SectionPill: React.FC<{ label: string; style?: React.CSSProperties; size?: 'md' | 'sm' }> = ({
  label,
  style,
  size = 'md'
}) => {
  const sm = size === 'sm';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sm ? 8 : 10,
        height: sm ? 28 : 36,
        padding: sm ? '0 12px' : '0 17px',
        borderRadius: sm ? 5 : 6,
        background: '#ffffff',
        border: '1px solid #e4e5e8',
        boxShadow: '0 3px 0 #dcdde0, 0 6px 12px rgba(0, 0, 0, 0.04)',
        fontFamily: "var(--font-urbanist), 'Urbanist', sans-serif",
        fontSize: sm ? 13 : 16,
        fontWeight: 500,
        color: '#111111',
        whiteSpace: 'nowrap',
        ...style
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#111111', display: 'inline-block' }} />
      {label}
    </span>
  );
};
