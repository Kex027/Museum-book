import React from "react";
import Modal from "../helper/Modal";

const VideoModal = ({ videoModal, setVideoModal }) => {
  return (
    <Modal setShowModal={setVideoModal} white>
      {videoModal}
    </Modal>
  );
};

export default VideoModal;
