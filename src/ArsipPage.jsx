import { getArchivedNotes } from "./utils/api";
import { useEffect, useState } from "react";
import { LanguageConsumer } from "./context/LanguageContext";
import MainLayout from "./layouts/MainLayout";
import PropTypes from "prop-types";
import Note from "./components/Note";

const ArsipPage = ({ logout }) => {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await getArchivedNotes();
      if (!error) setArchivedNotes(data);
    };
    fetchData();
  }, []);

  return (
    <MainLayout logout={logout}>
      <LanguageConsumer>
        {({ language }) => (
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {archivedNotes.length !== 0 ? (
                archivedNotes.map((note) => <Note key={note.id} note={note} />)
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
          </div>
        )}
      </LanguageConsumer>
    </MainLayout>
  );
};

export default ArsipPage;

ArsipPage.propTypes = {
  logout: PropTypes.func,
};
