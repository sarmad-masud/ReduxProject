import { Layout, Radio, RadioChangeEvent, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import AddUser from './AddUser';
import UserListTable from './UserList';

const { TabPane } = Tabs;
type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const UserDashboard: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs defaultActiveKey="1" tabPosition={tabPosition}>
        <TabPane tab="Add Users" key="1">
          <p>Plese Fill The Form</p>
          <AddUser/>
        </TabPane>

        <TabPane tab="View Users" key="2">
        
          <p>UserList</p>
          <UserListTable/>
        </TabPane>

      </Tabs>
    </>
  );
};


export default UserDashboard;