import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, FormInstance } from 'antd';
import IUser from './../types/User';
import { putUser } from '../api/User';
import { observer } from "mobx-react-lite";
import { useStores } from "../store/useStore"; 

interface IUserFormProps {
  datas: IUser | undefined,
  onComplete: () => void
}

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  datas: IUser | undefined,
  onCreate: (values: Values, form:FormInstance<Values>) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  datas,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Change UserInfo"
      okText="Change"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        console.log(form);
        
        form.validateFields()
            .then(values => {

              form.resetFields();
                onCreate(values, form);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={datas ?? {}}
      >
        <Form.Item name={"email"} label="Email" rules={[{ type: 'email' }]} >
          <Input /> 
        </Form.Item>
        <Form.Item name="ip_address" label="IpAddress">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};




const UserForm = ({datas, onComplete}:IUserFormProps) => {
  const { usersStore } = useStores();
  
  const [visible, setVisible] = useState(false);

  const onCreate = (values:any) => {
    const data = {...datas, ...values} 
    putUser(data).then(() => onComplete())
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Edit
      </Button>
      <CollectionCreateForm
      datas={datas}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default observer(UserForm)