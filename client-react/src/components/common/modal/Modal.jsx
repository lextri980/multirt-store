import { Text } from "@nextui-org/react";
import ModalX from "@nextui-org/react/modal";
import Button from "../button/Button";
import { ModalContainer } from "./Modal.style";

function Modal(props) {
  return (
    <ModalContainer>
      <ModalX
        aria-labelledby="modal-title"
        open={props.open}
        onClose={props.close}
      >
        <ModalX.Header>
          <Text id="modal-title" size={25} style={{marginTop: '10px'}}>
            {props.header}
          </Text>
        </ModalX.Header>
        <ModalX.Body>{props.children}</ModalX.Body>
        <ModalX.Footer style={{marginBottom: '10px'}}>
          <Button
            name={props.closeBtn || "Close"}
            color="danger"
            onClick={props.close}
          />
          <Button
            color="success"
            name={props.submitBtn || "Submit"}
            onClick={props.submit}
          />
        </ModalX.Footer>
      </ModalX>
    </ModalContainer>
  );
}

export default Modal;
