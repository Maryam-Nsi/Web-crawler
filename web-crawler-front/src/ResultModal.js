import { type } from "@testing-library/user-event/dist/type";
import { Modal, Button } from "antd";
import { Table } from 'antd';

export default function Form(props) {
    // const columns = Object.keys(props.data[0])
    const columns = Object.keys(props.data[0]).map(i => {
      var obj = {title: i,dataIndex: i,key: i}
      return obj        
    })
    console.log(props.data)
    return (
        <>
            {<Modal title="Results" open={props.res} onCancel={() => props.handleCancel("res")}
            footer={[
                <Button key="link" type="primary"
                style={{
                    background: "gray"
                }}
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(props.data))
                  console.log(JSON.stringify(props.data))
                }}
                >
                    Copy
                </Button>
            ]}
            >
                <Table columns={columns} dataSource={props.data} pagination={{ pageSize: 5 }} />
            </Modal>}
        </>
    )
}
