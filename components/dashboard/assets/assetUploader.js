const index = props => {
  return (
    <div class="ga-program-file-wrap">
      <h3>Upload Zip File of Image Assets</h3>
      <label tabIndex="0" htmlFor="gaProgramPhoto" class="input-file-trigger">
        Upload
      </label>
      <div class="gaProgramPhoto" />
      <output id="gaProgramFile" class="gaProgramFile" />
      <input
        class="input-file"
        id="gaProgramPhoto"
        type="file"
        name="files[]"
      />
      <p class="ga-file-return" />
    </div>
  );
};

export default index;
