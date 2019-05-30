const index = props => {
  return (
    <div className="ga-program-file-wrap">
      <h3>Upload Zip File of Image Assets</h3>
      <label tabIndex="0" htmlFor="gaProgramPhoto" className="input-file-trigger">
        Upload
      </label>
      <div className="gaProgramPhoto" />
      <output id="gaProgramFile" className="gaProgramFile" />
      <input
        className="input-file"
        id="gaProgramPhoto"
        type="file"
        name="files[]"
      />
      <p className="ga-file-return" />
    </div>
  );
};

export default index;
