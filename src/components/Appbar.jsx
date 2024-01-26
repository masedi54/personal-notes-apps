// Appbar.js
import { Link } from "react-router-dom";
import ChangeThemeButton from "./common/ChangeThemeButton";
import { ThemeConsumer } from "../context/ThemeContext";
import { LanguageConsumer } from "../context/LanguageContext";
import ChangeLanguageButton from "./common/ChangeLanguageButton";
import PropTypes from "prop-types";

const Appbar = ({ logout }) => {
  return (
    <ThemeConsumer>
      {({ theme, changeTheme }) => (
        <LanguageConsumer>
          {({ language, changeLanguage }) => (
            <nav className="bg-gray-800 p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                  {language === "id" ? "Catatan Ku" : "My Note"}
                </Link>
                <div className="flex space-x-4 items-center">
                  <Link to="/" className="text-white">
                    {language === "id" ? "Beranda" : "Home"}
                  </Link>
                  <Link to="/archived" className="text-white">
                    {language === "id" ? "Arsip Catatan" : "Note Archived"}
                  </Link>
                  <div className="flex items-center space-x-2">
                    <ChangeThemeButton
                      language={language}
                      theme={theme}
                      changeTheme={changeTheme}
                    />
                    <ChangeLanguageButton
                      language={language}
                      changeLanguage={changeLanguage}
                    />
                  </div>
                  <button
                    onClick={logout}
                    className="bg-yellow-500 text-white py-2 px-4 rounded"
                  >
                    {language === "id" ? "Keluar" : "Logout"}
                  </button>
                </div>
              </div>
            </nav>
          )}
        </LanguageConsumer>
      )}
    </ThemeConsumer>
  );
};

export default Appbar;

Appbar.propTypes = {
  logout: PropTypes.func,
};
