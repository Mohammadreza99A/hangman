import React, {useContext} from 'react';
import {Context} from '../globalState';
import {Svg, Line, Circle, Rect, G} from 'react-native-svg';

const Figure = () => {
  const [state] = useContext(Context);
  const {wrongLetters} = state;

  return (
    <Svg
      height="200"
      width="200"
      viewBox="-20 0 200 450"
      preserveAspectRatio="xMinYMin meet"
      fill="white"
      stroke="#f1f1f1"
      color="white">
      {/* Rod */}
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
      {wrongLetters.length > 0 && (
        <Circle cx="250" cy="150" r="30" fill="#f1f1f1" />
      )}

      {/* Body */}
      {wrongLetters.length > 1 && (
        <Rect width="10" height="100" x="245" y="150" i fill="#f1f1f1" />
      )}

      {/* Arms */}
      <G>
        {wrongLetters.length > 2 && (
          <Line
            x1="250"
            y1="200"
            x2="220"
            y2="230"
            stroke="#f1f1f1"
            stroke-Linecap="round"
            strokeWidth="10"
          />
        )}
        {wrongLetters.length > 3 && (
          <Line
            x1="250"
            y1="200"
            x2="280"
            y2="230"
            stroke="#f1f1f1"
            stroke-Linecap="round"
            strokeWidth="10"
          />
        )}
      </G>

      {/* Legs */}
      <G>
        {wrongLetters.length > 4 && (
          <Line
            x1="250"
            y1="250"
            x2="230"
            y2="300"
            stroke="#f1f1f1"
            stroke-Linecap="round"
            strokeWidth="10"
          />
        )}
        {wrongLetters.length > 5 && (
          <Line
            x1="250"
            y1="250"
            x2="270"
            y2="300"
            stroke="#f1f1f1"
            stroke-Linecap="round"
            strokeWidth="10"
          />
        )}
      </G>
    </Svg>
  );
};

export default Figure;
