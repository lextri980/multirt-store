import { Text } from "@nextui-org/react";
import ModalX from "@nextui-org/react/modal";
import { ModalContainer } from "./Modal.style";

function Modal(props) {
  //! Props type
  //Require: open, close, children
  //Option: header
  //Func: close
  const { open, close, header, children } = props;

  return (
    <ModalContainer>
      <ModalX aria-labelledby="modal-title" open={open} onClose={close}>
        <ModalX.Header>
          <Text id="modal-title" size={25} style={{ marginTop: "10px" }}>
            {header}
          </Text>
        </ModalX.Header>
        <ModalX.Body>{children}</ModalX.Body>
      </ModalX>
    </ModalContainer>
  );
}

export default Modal;
