import type { IThemeRepository } from '../../core/repositories/IThemeRepository';

const THEME_KEY = 'ts-theme';

export class LocalStorageThemeRepo implements IThemeRepository {
  getTheme(): 'dark' | 'light' {
    try {
      const theme = localStorage.getItem(THEME_KEY);
      if (theme === 'dark' || theme === 'light') return theme;
      return 'light'; // default
    } catch {
      return 'light';
    }
  }

  setTheme(theme: 'dark' | 'light'): void {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // storage unavailable
    }
  }
}
