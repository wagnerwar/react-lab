import React, {useState, useEffect} from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement('#app');
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function ModalComponente(props){
 
  function handleCloseModal () {
    props.callBack()
  }

  function handleCallBackModal () {
    props.callBackSucesso()
  }

  return (
      <div>
          <Modal 
            open={props.exibir} 
            onClose={() => handleCloseModal()} 
            center
            closeOnOverlayClick={false}>
            <h2>
              {props.titulo}
            </h2>
            <p>
              {props.msg}
            </p>
            {
              props.exibirBotao && 
              (
                <button className="button btn btn-primary botao" onClick={() => handleCallBackModal()}>
                  OK
                </button>
              )
            }         
          </Modal>
    </div>
  );
}