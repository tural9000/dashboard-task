import { Table, Form } from "antd";
import "antd/dist/antd.css";

const TableFormAntd = () => {
  const [dataSource, setDataSource] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const form = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 6; index++) {
      data.push({
        key: `${index}`,
        name: `name ${index}`,
        address: `address ${index}`,
      });
    }
    setDataSource(data);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name="name"
              // rule = {[{
              //   required: true,
              //   message: 'Please enter your name'
              // }]}
            >
              <input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      name: "Address",
      dataIndex: "address",
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name="address"
              // rule = {[{
              //   required: true,
              //   message: 'Please enter your address'
              // }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      name: "Action",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditRow(record.key);
                form.setFieldsValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
      const updateDataSource = [...dataSource];
      updateDataSource.splice(editRow, 1, {...values, key: editRow})
      setDataSource(updateDataSource)
      setEditRow(null)
  };
  return (
    <div className="tableForm">
      <Form form={form} onFinish={onFinish}>
        <Table columns={columns} dataSource={dataSource}></Table>
      </Form>
    </div>
  );
};

export default TableFormAntd;
