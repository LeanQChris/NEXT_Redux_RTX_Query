"use client"

import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';


interface CusModalProps{
  show:boolean,
  onClose?:any,
  title?:string,
  buttonTitle?:string,
}

export default function CusModal({show,onClose,title,buttonTitle}:CusModalProps) {
  const [showModal,setShowModal] = useState<boolean>(false);
  const handleShow=()=>setShowModal(true);

  useEffect(()=>{
    setShowModal(show)
  },[show]);

  return (
     <>
      <Button type="primary" onClick={handleShow}>
        Open Modal
      </Button>
      <Modal title={title?? "Basic Modal"} open={showModal} onOk={()=>{}} onCancel={()=>{}}>
      </Modal>
    </>
  )
}
