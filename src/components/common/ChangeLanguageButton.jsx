import PropTypes from "prop-types";

const ChangeLanguageButton = (props) => {
  const { changeLanguage, language } = props;

  const buttonStyle = {
    borderRadius: "50%", // membuat sudut menjadi bulat
    width: "40px", // atur lebar tombol
    height: "40px", // atur tinggi tombol
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080", // warna latar belakang
    color: "white", // warna teks
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
