import PropTypes from "prop-types";

const ChangeLanguageButton = (props) => {
  const { changeLanguage, language } = props;

  const buttonStyle = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
    color: "white",
    cursor: "pointer",
  };

  return (
    <button onClick={changeLanguage} style={buttonStyle}>
      {language === "id" ? "ID" : "EN"}
    </button>
  );
};

export default ChangeLanguageButton;

ChangeLanguageButton.propTypes = {
  changeLanguage: PropTypes.func,
  language: PropTypes.string,
};
