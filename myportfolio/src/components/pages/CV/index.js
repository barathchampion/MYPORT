import React, { useState, createContext, Children } from "react";
import { Button, Image, Modal, Space, Tooltip } from "antd";
import mycv from "../../../IMG/cloud-engineer.png";
import myResumePdf from "../../../IMG/cloud-engineer.pdf";
import { createStyles, useTheme } from "antd-style";
import { DownloadOutlined } from "@ant-design/icons";

const downloadPdf = () => {
  const link = document.createElement("a");
  link.href = myResumePdf;
  link.download = "Resume2025.pdf";
  link.click();
};

const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingSM,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
    textAlign: `center !important`,
  },
  "my-modal-content": {
    border: "1px solid #333",
    width: `75%`,
  },
}));

export const ToggleContext = createContext();

const CV = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState("large");
  const { styles } = useStyle();
  const token = useTheme();

  const toggleModal = (ip) => {
    setIsModalOpen(ip);
  };
  const classNames = {
    body: styles["my-modal-body"],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
  };
  const modalStyles = {
    header: {
      borderInlineStart: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: "inset 0 0 5px #999",
      borderRadius: 5,
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      // borderTop: "1px solid #333",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };
  return (
    <>
      <ToggleContext.Provider value={{ isModalOpen, toggleModal }}>
        <Modal
          title="Resume 2025"
          open={isModalOpen}
          onCancel={() => toggleModal(false)}
          footer={[
            <Tooltip title="Download PDF" key="download">
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                onClick={downloadPdf}
                size={size}
              >
                Download
              </Button>
            </Tooltip>,
          ]}
          width={400}
          classNames={classNames}
          styles={modalStyles}
        >
          <Image
            width={200}
            src={mycv}
            preview={{
              src: mycv,
            }}
            style={{ padding: "10px" }}
          />
        </Modal>

        {children}
      </ToggleContext.Provider>
    </>
  );
};
export default CV;
