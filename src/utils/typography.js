import Typography from 'typography';
import styles from '../styles/base_values.scss';

const typography = new Typography({
  baseFontSize: toString(styles.baseFontSize),
  baseLineHeight: toString(styles.baseLineHeight),
  headerFontFamily: [
    'camptonbold_demo',
    'sans-serif',
  ],
  // Since we are using a bold font
  headerWeight: 'normal',
  bodyFontFamily: ['Raleway', 'serif'],
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '400',
        '500',
        '700',
      ],
    },
  ],
});

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
