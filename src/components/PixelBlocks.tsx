import React from 'react';

interface PixelBlocksProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'custom';
  color?: string;
  size?: number; // size of each pixel square
  className?: string;
  style?: React.CSSProperties;
}

export const PixelBlocks: React.FC<PixelBlocksProps> = ({
  position = 'top-right',
  color = '#000000',
  size = 22,
  className = '',
  style = {}
}) => {
  // Pattern 1: Stepped Tetris-like / staircase cluster
  // Array of coordinates [row, col]
  const pattern = [
    [0, 2], [0, 3],
    [1, 1], [1, 2], [1, 3],
    [2, 0], [2, 1], [2, 2],
    [3, 0], [3, 1]
  ];

  return (
    <div 
      className={`pixel-blocks ${className}`}
      style={{
        position: 'relative',
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        pointerEvents: 'none',
        userSelect: 'none',
        ...style
      }}
    >
      {pattern.map(([r, c], idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: `${r * size}px`,
            left: `${c * size}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color
          }}
        />
      ))}
    </div>
  );
};

export const PixelCornerCluster: React.FC<{
  type?: 'corner-top-right' | 'corner-top-left' | 'corner-bottom-right' | 'corner-bottom-left';
  size?: number;
  color?: string;
}> = ({ type = 'corner-top-right', size = 20, color = '#000000' }) => {
  // Renders a geometric cluster of squares matching the exact screenshots
  const squares = [
    { top: 0, left: size * 2 },
    { top: 0, left: size * 3 },
    { top: size, left: size * 1 },
    { top: size, left: size * 2 },
    { top: size, left: size * 3 },
    { top: size * 2, left: 0 },
    { top: size * 2, left: size * 1 },
    { top: size * 2, left: size * 2 },
    { top: size * 3, left: 0 },
    { top: size * 3, left: size * 1 },
  ];

  const transform = 
    type === 'corner-top-left' ? 'scaleX(-1)' :
    type === 'corner-bottom-right' ? 'scaleY(-1)' :
    type === 'corner-bottom-left' ? 'scale(-1)' : 'none';

  return (
    <div
      style={{
        position: 'relative',
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        transform,
        pointerEvents: 'none'
      }}
    >
      {squares.map((sq, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${sq.top}px`,
            left: `${sq.left}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color
          }}
        />
      ))}
    </div>
  );
};
