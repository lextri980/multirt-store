import { Text } from "@nextui-org/react";
import ModalX from "@nextui-org/react/modal";
import Button from "../button/Button";
import { ModalContainer } from "./Modal.style";

function Modal(props) {
  //! Props type
  //Require: open, close, children, submit
  //Option: header, closeBtn, submitBtn
  //Func: close, submit
  const { open, close, header, children, closeBtn, submit, submitBtn } = props;

  return (
    <ModalContainer>
      <ModalX aria-labelledby="modal-title" open={open} onClose={close}>
        <ModalX.Header>
          <Text id="modal-title" size={25} style={{ marginTop: "10px" }}>
            {header}
          </Text>
        </ModalX.Header>
        <ModalX.Body>{children}</ModalX.Body>
        <ModalX.Footer style={{ marginBottom: "10px" }}>
          <Button color="danger" onClick={close}>
            {closeBtn || "Close"}
          </Button>
          <Button color="success" onClick={submit}>
            {submitBtn || "Submit"}
          </Button>
        </ModalX.Footer>
      </ModalX>
    </ModalContainer>
  );
}

export default Modal;
