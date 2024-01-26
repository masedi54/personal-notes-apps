import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  const maxTextLength = 150;

  const truncateText = (text) => {
    return text.length > maxTextLength
      ? text.substring(0, maxTextLength) + "..."
      : text;
  };

  return (
    <div className="col-lg-4 mb-3 dark:bg-slate-800">
      <div className="bg-white border border-gray-300 p-4 rounded-md shadow-md h-full dark:bg-slate-800 dark:rounded-md dark:border-gray-700">
        <Link
          to={`/note/${note.id}`}
          className="text-decoration-none dark:bg-slate-800"
        >
          <h5 className="text-xl font-semibold mb-2 dark:text-white">
            {note.title}
          </h5>
          <small className="text-gray-500 mb-2 block">
            {new Date(note.createdAt).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
          <p className="text-gray-600 overflow-hidden">
            {truncateText(note.body)}
          </p>
          {note.body.length > maxTextLength && (
            <Link to={`/note/${note.id}`} className="text-blue-500">
              Learn More
            </Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Note;

Note.propTypes = {
  note: PropTypes.object.isRequired,
};
