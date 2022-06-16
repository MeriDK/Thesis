import React, { Fragment, useState } from "react";

import Description from "./Description";
import Options from "./Options";
import UploadFile from "./UploadFile";
import DownloadModal from "./DownloadModal";

import { difficultyOptions } from "./constants";
import { getGeneratedLevel } from "./utils";

import logo from "../../static/ragnarock_logo.png";

const controller = new AbortController();

const Form = () => {
  const [levelChecked, setLevelChecked] = useState(
    new Array(difficultyOptions.length).fill(false)
  );
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOptionsChange = position => {
    const levelCheckedUpdated = levelChecked.map((item, index) => {
      return index === position ? !item : item;
    });
    setLevelChecked(levelCheckedUpdated);
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const getFile = async () => {
    handleOpenModal();
    getGeneratedLevel(file, levelChecked, handleCloseModal, controller);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    controller.abort();
    setShowModal(false);
  };

  return (
    <form className='form'>
      <img src={logo} alt='logo' className='logo' width={640} height={360} />
      <Description />
      <h2 className='header'>Step 1. Upload Your Song</h2>
      <div className='uploadMusic'>
        <UploadFile file={file} handleFileChange={handleFileChange} />
      </div>
      <h2 className='header'>Step 2. Select Difficulty Levels</h2>
      <div className='options'>
        <Options
          levelChecked={levelChecked}
          handleOptionsChange={handleOptionsChange}
        />
      </div>
      {file ? (
        <Fragment>
          <h2 className='header'>Step 3. Download files</h2>
          <div className='responsiveBtn' id='greenBorder' onClick={getFile}>
            <span>Download Files</span>
          </div>
        </Fragment>
      ) : null}
      <DownloadModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </form>
  );
};

export default Form;
