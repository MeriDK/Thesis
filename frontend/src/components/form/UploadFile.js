import { useRef, useState } from "react";

const UploadFile = ({ file, handleFileChange }) => {
  const uploadFileRef = useRef();
  const [showError, setShowError] = useState(false);

  const handleUploadClick = () => {
    uploadFileRef.current.click();
  };

  const handleChange = e => {
    if (isFileExtensionValid(e.target.files[0].name)) {
      handleFileChange(e);
      setShowError(false);
      return;
    }
    setShowError(true);
  };

  const isFileExtensionValid = file => {
    const validExtension = file.match(
      /[-\s\w\d]*((.mp3)|(.aiff)|(.aac)|(.ogg)|(.wav)|(.flac))$/
    );
    if (!validExtension) {
      return false;
    }
    return true;
  };

  return (
    <div className='file'>
      <div className='responsiveBtn' onClick={handleUploadClick}>
        <span>Upload File</span>
        <input
          type='file'
          ref={uploadFileRef}
          onChange={handleChange}
          accept='.mp3,.aiff,.aac,.ogg,.wav,.flac,audio/*'
          hidden
        />
      </div>
      {file ? (
        <span className='selectedFile'>
          <strong>Selected file:</strong> {file.name}
        </span>
      ) : null}
      {showError ? <span className='error'>Invalid file extension</span> : null}
    </div>
  );
};

export default UploadFile;
