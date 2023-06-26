"use client";

import { ProductWithPrices } from "@/types";
import Modal from "./Modal";

interface SubscribeModalProps {
  products: ProductWithPrices[];
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  let content = <div className="text-center">No products available.</div>;
  return (
    <Modal
      title="Only for premium users"
      description="Listen to music with Spotify Premium"
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
