import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';
import Appbar from '../components/Appbar';

const MainLayout = (props) => {
  const { children, logout } = props;

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(
    localStorage.getItem('language'),
    'en'
  );

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  function changeLanguage() {
    setLanguage(language === 'en' ? 'id' : 'en');
    localStorage.setItem('language', language === 'en' ? 'id' : 'en');
  }

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider value={{ theme, changeTheme }}>
      <LanguageProvider value={{ language, changeLanguage }}>
        <Appbar logout={logout} />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default MainLayout;

MainLayout.propTypes = {
  logout: PropTypes.func,
  children: PropTypes.any,
};
