import React, { useState } from "react";
import { RiOilFill } from "react-icons/ri";
import { GiGloves,GiBoots } from "react-icons/gi";

import ModalElement from "./ModalElement";
import Modal from 'react-modal';
import { Button, ModalCustom, ModalButton } from "./ModalElement";

function ModalFunction() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  }
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  }

 
  return (
    <>
      <Button onClick={setModalIsOpenToTrue}><RiOilFill/></Button>
      <Modal isOpen={modalIsOpen} style={ModalCustom} onRequestClose={() => setModalIsOpen(false)}> 
          <ModalButton onClick={setModalIsOpenToFalse}><GiGloves /><GiBoots /></ModalButton>
          <ModalElement />
      </Modal>
    </>
    
  );
}

export default ModalFunction;

