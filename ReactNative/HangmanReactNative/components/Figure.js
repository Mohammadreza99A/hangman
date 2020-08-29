import React from 'react';
import {Viewt} from 'react-native';
import {Svg, Line, Circle, Rect, G} from 'react-native-svg';

const Figure = () => {
  return (
    <Svg
      height="250"
      width="200"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMinYMin meet"
      fill="white"
      stroke="#f1f1f1"
      color="white">
      {/* Rod */}
      {/* <Line x1="60" y1="20" x2="140" y2="20" />
        <Line x1="140" y1="20" x2="140" y2="50" />
        <Line x1="60" y1="20" x2="60" y2="230" />
        <Line x1="20" y1="230" x2="100" y2="230" /> */}
      <Rect fill="white" width="10" height="400" x="20" y="0" />
      <Rect fill="white" width="300" height="10" x="20" y="0" />
      <Rect fill="white" width="150" height="10" x="0" y="400" />
      <Line
        x1="250"
        y1="0"
        x2="250"
        y2="120"
        stroke="#f1f1f1"
        strokeWidth="5"
      />

      {/* Head */}
      <Circle cx="250" cy="150" r="30" fill="#f1f1f1" />
      {/* <Circle cx="140" cy="70" r="20" /> */}

      {/* Body */}
      <Rect width="10" height="100" x="245" y="150" i fill="#f1f1f1" />
      {/* <Line x1="140" y1="90" x2="140" y2="150" /> */}

      {/* Arms */}
      <G>
        <Line
          x1="250"
          y1="200"
          x2="220"
          y2="230"
          stroke="#f1f1f1"
          stroke-Linecap="round"
          strokeWidth="10"
        />
        <Line
          x1="250"
          y1="200"
          x2="280"
          y2="230"
          stroke="#f1f1f1"
          stroke-Linecap="round"
          strokeWidth="10"
        />
      </G>
      {/* <Line x1="140" y1="120" x2="120" y2="100" />
        <Line x1="140" y1="120" x2="160" y2="100" /> */}

      {/* Legs */}
      <G>
        <Line
          x1="250"
          y1="250"
          x2="230"
          y2="300"
          stroke="#f1f1f1"
          stroke-Linecap="round"
          strokeWidth="10"
        />
        <Line
          x1="250"
          y1="250"
          x2="270"
          y2="300"
          stroke="#f1f1f1"
          stroke-Linecap="round"
          strokeWidth="10"
        />
      </G>
      {/* <Line x1="140" y1="150" x2="120" y2="180" />
        <Line x1="140" y1="150" x2="160" y2="180" /> */}
    </Svg>
  );
};

export default Figure;
