import { Modal, Button } from "antd";
import { Table } from 'antd';

export default function Form(props) {
    
    const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32
        },
        {
          key: '4',
          name: 'Joe Black',
          age: 32
        },
        {
          key: '5',
          name: 'Joe Black',
          age: 32
        },
        {
          key: '6',
          name: 'John Brown',
          age: 32
        },
        {
          key: '7',
          name: 'Jim Green',
          age: 42
        },
        {
          key: '8',
          name: 'Joe Black',
          age: 32
        },
        {
          key: '9',
          name: 'Joe Black',
          age: 32
        },
        {
          key: '10',
          name: 'John Brown',
          age: 32
        },
        {
          key: '11',
          name: 'Jim Green',
          age: 42
        },
        {
          key: '12',
          name: 'Joe Black',
          age: 32
        },
        {
          key: '13',
          name: 'Joe Black',
          age: 32
        }
      ];

      const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        }
      ];

    return (
        <>
            {<Modal title="Results" open={props.res} onCancel={() => props.handleCancel("res")}
            footer={[
                <Button key="link" type="primary"
                style={{
                    background: "gray"
                }}
                >
                    دانلود
                </Button>
            ]}
            >
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
            </Modal>}
        </>
    )
}
