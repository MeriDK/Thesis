import Modal from "../modal/Modal";
import Spinner from "../Spinner";

const DownloadModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal}>
      <div className='downloadModal'>
        <header className='headerModal'>
          <h4>Generating level</h4>
        </header>
        <Spinner width={5} height={5} />
        <p>Waiting for files...</p>
        <div
          className='responsiveBtn'
          id='cancelDownload'
          onClick={handleCloseModal}>
          <span>Cancel</span>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadModal;
