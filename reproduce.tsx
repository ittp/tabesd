import { DownOutlined } from "@ant-design/icons";
import type { ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button, message } from "antd";

const valueEnum = {
  0: "close",
  1: "running",
  2: "online",
  3: "error"
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"];

for (let i = 0; i < 20; i += 1) {
  tableListDataSource.push({
    key: i,
    name: "AppName",
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? "test" : "test2"
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: "ID",
    dataIndex: "name",
    render: (text, record, index, actions) => {
      const messageStr = "current " + actions?.pageInfo?.current;
      message.info(messageStr);
      console.log(messageStr);

      const pageInfo = actions?.pageInfo ?? { current: 0, pageSize: 0 };
      const startIndex = (pageInfo?.current - 1) * pageInfo?.pageSize;
      return index + startIndex;
    }
  },
  {
    title: "name",
    dataIndex: "name",

    render: (_) => <a>{_}</a>
  }
];

export default () => {
  return (
    <ProTable<TableListItem>
      dataSource={tableListDataSource}
      rowKey="key"
      pagination={{
        pageSize: 5,
        showQuickJumper: true
      }}
      columns={columns}
      search={false}
      dateFormatter="string"
      headerTitle="ame"
      toolBarRender={false}
    />
  );
};
