const ImageUpload = (props) => {

    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    }

  return (
    <div className="upload-wrapper">
      <label htmlFor="fileInput" className="upload-label">
        <input 
          type="file" 
          id="fileInput" 
          style={{ display: 'none' }} 
          onChange={ShowImageHandler}
        />
        <div className="upload-text">
          Click and drag to upload your image
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;

