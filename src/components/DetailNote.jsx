import { deleteNote, archiveNote, unarchiveNote } from "../utils/api";
import { LanguageConsumer } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DetailNote = ({ note }) => {
  const navigate = useNavigate();

  return (
    <LanguageConsumer>
      {({ language }) => (
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
          <p className="text-gray-600">{note.body}</p>
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={
                note.archived
                  ? async () => {
                      const { error } = await unarchiveNote(note.id);
                      if (!error) navigate("/");
                    }
                  : async () => {
                      const { error } = await archiveNote(note.id);
                      if (!error) navigate("/");
                    }
              }
              className={`bg-${
                note.archived ? "yellow" : "green"
              }-500 text-white py-2 px-4 rounded`}
            >
              {note.archived ? "Batal Arsip" : "Arsipkan"}
            </button>
            <button
              type="button"
              onClick={async () => {
                const { error } = await deleteNote(note.id);
                if (!error) navigate("/");
              }}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              {language === "id" ? "Hapus" : "Delete"}
            </button>
          </div>
        </div>
      )}
    </LanguageConsumer>
  );
};

export default DetailNote;

DetailNote.propTypes = {
  note: PropTypes.object.isRequired,
};
