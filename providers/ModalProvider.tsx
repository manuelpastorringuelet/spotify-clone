"use client";

import Modal from "@/components/Modal";
import { use, useEffect, useState } from "react";

const ModalProvider = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="test modal"
        description="test description"
        isOpen
        onChange={() => {}}
      >
        <div>test</div>
      </Modal>
      
    </>
  );
};

export default ModalProvider;
