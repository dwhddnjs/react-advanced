import { forwardRef, useImperativeHandle, useState } from "react";

export const Modal = forwardRef((props: any, ref: any) => {
  console.log("ref: ", ref);
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));
  if (!modalState) return null;

  return (
    <div className="modal">
      <p>this is my modal</p>
      <button onClick={() => setModalState(false)}>close</button>
    </div>
  );
});
