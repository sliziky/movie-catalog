import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';

type NotificationProps = {
  visible: boolean;
  onClose(): void;
}

function Notification({ visible, onClose }: NotificationProps) {
  return (
    <ToastContainer position={'top-end'}>
      <Toast bg={'success'} onClose={() => onClose()} show={visible} delay={2000000} autohide>
        <Toast.Header>
          <strong className="me-auto">Movie added</strong>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
}

export default Notification