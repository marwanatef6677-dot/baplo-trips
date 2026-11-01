/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    text: '#183B3A',
    tint: '#167B70',
    background: '#F5F8F5',
    foreground: '#173635',
    card: '#FFFFFF',
    cardForeground: '#173635',
    primary: '#167B70',
    primaryForeground: '#FFFFFF',
    secondary: '#E7F1EE',
    secondaryForeground: '#1D5B54',
    muted: '#EDF2EF',
    mutedForeground: '#71817B',
    accent: '#FFF0D8',
    accentForeground: '#85561E',
    destructive: '#C84F4F',
    destructiveForeground: '#FFFFFF',
    border: '#E1E9E4',
    input: '#D7E2DC',
    success: '#167B70',
    successSoft: '#E1F2EC',
    warning: '#9B641F',
    warningSoft: '#FFF0D8',
    info: '#426F8A',
    infoSoft: '#E7F0F5',
  },
  dark: {
    text: '#E7F1EC',
    tint: '#71C9B6',
    background: '#102422',
    foreground: '#E7F1EC',
    card: '#18312E',
    cardForeground: '#E7F1EC',
    primary: '#71C9B6',
    primaryForeground: '#10312D',
    secondary: '#213D39',
    secondaryForeground: '#C8E7DD',
    muted: '#203632',
    mutedForeground: '#A3B8AF',
    accent: '#463A26',
    accentForeground: '#F1C77F',
    destructive: '#F07171',
    destructiveForeground: '#FFFFFF',
    border: '#2B4641',
    input: '#39544E',
    success: '#71C9B6',
    successSoft: '#1E4039',
    warning: '#F1C77F',
    warningSoft: '#463A26',
    info: '#9CC9DF',
    infoSoft: '#263C49',
  },
  radius: 20,
};

export default colors;
