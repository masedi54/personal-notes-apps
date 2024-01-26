import { useNavigate } from "react-router-dom";
import { LanguageConsumer } from "./context/LanguageContext";
import { addNote } from "./utils/api";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";
import PropTypes from "prop-types";

const AddPage = ({ logout }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  return (
    <MainLayout logout={logout}>
      <LanguageConsumer>
        {({ language }) => (
          <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto p-4 bg-white border rounded-md shadow-md">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const { error } = await addNote({ title, body });
                  if (!error) navigate("/");
                }}
              >
                <div className="mb-4">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    autoFocus
                    placeholder={
                      language === "en"
                        ? "Note Title here"
                        : "Judul catatan disini"
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder={
                      language === "en"
                        ? "Note Body here"
                        : "Isi Catatan disini"
                    }
                    rows={7}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                  >
                    {language === "id" ? "Tambah Catatan " : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </LanguageConsumer>
    </MainLayout>
  );
};

export default AddPage;

AddPage.propTypes = {
  logout: PropTypes.func,
};
