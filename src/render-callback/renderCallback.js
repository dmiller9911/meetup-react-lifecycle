import { MatchMedia } from './matchMedia';
import React from 'react';
import { styles } from './renderCallback.styles';

export const medium = '(min-width: 768px)';

export function RenderCallback() {
  return (
    <div style={styles.composition}>
      <div style={styles.card}>
        <MatchMedia media={medium}>
          {matches => (
            <div style={styles.resultText(matches)}>
              {matches ? 'Matches' : 'Does Not Match'}
            </div>
          )}
        </MatchMedia>
        <div style={styles.text}>
          {medium}
        </div>
      </div>
    </div>
  );
}
