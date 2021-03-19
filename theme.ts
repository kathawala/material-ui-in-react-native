import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme,
} from '@react-navigation/native';
import {ColorSchemeName} from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      animationColor: string;
    }
    interface Theme {
      statusBar: 'light' | 'dark' | 'auto' | 'inverted' | undefined;
    }
  }
}

interface ReactNavigationTheme extends Theme {
  statusBar: 'light' | 'dark' | 'auto' | 'inverted' | undefined;
}

export function combineThemes(
  themeType: ColorSchemeName
): ReactNativePaper.Theme | ReactNavigationTheme {
  const CombinedDefaultTheme: ReactNativePaper.Theme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    statusBar: 'dark',
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      animationColor: '#2922ff',
      primary: '#079c20',
      accent: '#2922ff',
    },
  };
  const CombinedDarkTheme: ReactNativePaper.Theme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    mode: 'adaptive',
    statusBar: 'light',
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      animationColor: '#6262ff',
      primary: '#079c20',
      accent: '#2922ff',
    },
  };

  return themeType === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
}
