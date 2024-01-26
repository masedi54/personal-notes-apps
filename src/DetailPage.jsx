import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "./utils/api";
import DetailSkeleton from "./components/skeleton/DetailSkeleton";
import MainLayout from "./layouts/MainLayout";
import DetailNote from "./components/DetailNote";

const DetailPage = ({ logout }) => {
  const [note, setNote] = useState(null);

  const idNote = useParams().id;

  useEffect(() => {
    async function fetchDetailNote() {
      const { error, data } = await getNote(idNote);
      if (!error) setNote(data);
    }
    fetchDetailNote();
  }, [idNote]);

  return (
    <MainLayout logout={logout}>
      <div className="container mx-auto mt-5">
        {!note ? <DetailSkeleton /> : <DetailNote note={note} />}
      </div>
    </MainLayout>
  );
};

export default DetailPage;

DetailPage.propTypes = {
  logout: PropTypes.func,
};
