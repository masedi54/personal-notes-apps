// HomePage.js
import { Link } from "react-router-dom";
import { getActiveNotes } from "./utils/api";
import { useEffect, useState } from "react";
import { LanguageConsumer } from "./context/LanguageContext";
import MainLayout from "./layouts/MainLayout";
import PropTypes from "prop-types";
import Note from "./components/Note";

const HomePage = ({ logout }) => {
  const [activeNotes, setActiveNotes] = useState([]);

  const getNotesActve = async () => {
    const { error, data } = await getActiveNotes();
    if (!error) setActiveNotes(data);
  };

  useEffect(() => {
    getNotesActve();
  }, []);

  return (
    <MainLayout logout={logout}>
      <LanguageConsumer>
        {({ language }) => (
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:rounded-md">
              {activeNotes.length !== 0 ? (
                activeNotes.map((note) => <Note key={note.id} note={note} />)
              ) : (
                <div className="col-12 text-center">
                  <p className="text-gray-500">
                    {language === "en"
                      ? "No archived notes found"
                      : "Tidak ditemukan catatan terarsip"}
                  </p>
                </div>
              )}
            </div>
            {/* Circular "Create Note" button */}
            <Link
              to="/create"
              className="bg-blue-500 text-white font-bold rounded-full fixed bottom-12 right-12 text-4xl flex items-center justify-center h-16 w-16 dark:bg-slate-800"
            >
              +
            </Link>
          </div>
        )}
      </LanguageConsumer>
    </MainLayout>
  );
};

HomePage.propTypes = {
  logout: PropTypes.func,
};

export default HomePage;
