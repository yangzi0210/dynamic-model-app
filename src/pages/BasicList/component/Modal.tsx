import { Form, Modal as AntdModal } from 'antd';
import { useEffect } from 'react';
import { useRequest } from 'umi';
import ActionBuilder from '../builder/ActionBuilder';
import FormBuilder from '../builder/FormBuilder';

const Modal = ({
  modalVisible,
  hideModal,
  modalUri,
}: {
  modalVisible: boolean;
  hideModal: () => void;
  modalUri: string;
}) => {
  // TODO 修改写法
  const init = useRequest<{ data: PageApi.Data }>(`${modalUri}`);

  useEffect(() => {
    if (modalVisible) {
      init.run();
    }
  }, [modalVisible]);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      <AntdModal
        title={init?.data?.page?.title}
        open={modalVisible}
        onCancel={hideModal}
        footer={ActionBuilder(init?.data?.layout?.actions[0]?.data)}
      >
        <Form {...layout}>{FormBuilder(init?.data?.layout?.tabs[0]?.data)}</Form>
      </AntdModal>
    </div>
  );
};

export default Modal;
