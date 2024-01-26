const DetailSkeleton = () => {
  return (
    <div className="placeholder-glow">
      <span
        className="placeholder col-10 placeholder-lg rounded-2"
        style={{ height: '3.5rem' }}
      ></span>
      <div className="d-flex flex-column ">
        <span className="placeholder col-6 mt-2 rounded-2"></span>
        <span className="placeholder col-6 mt-2 rounded-2"></span>
        <span className="placeholder col-6 mt-2 rounded-2"></span>
        <span className="placeholder col-6 mt-2 rounded-2"></span>
      </div>
      <div className="d-flex  gap-2 pt-5">
        <span className="placeholder col-1  rounded-2"></span>
        <span className="placeholder col-1  rounded-2"></span>
      </div>
    </div>
  );
};
export default DetailSkeleton;
