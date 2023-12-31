import { fetchTable } from '@/services/basic-list/api';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from '@umijs/max';
import { Button, Card, Col, Pagination, Row, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import ActionBuilder from './builder/ActionBuilder';
import ColumnBuilder from './builder/ColumnBuilder';
import Modal from './component/Modal';
import styles from './index.less';

const Index = () => {
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [sortQuery, setSortQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUri, setModalUri] = useState('');
  const init = useRequest<{ data: BasicListApi.Data }>(
    (params) => fetchTable({ X_API_KEY: 'antd', ...params }),
    {
      debounceInterval: 300,
    },
  );
  useEffect(() => {
    init.run({ page, per_page, sortQuery });
  }, [page, per_page]);

  const searchLayout = () => <Card>TODO</Card>;
  const beforeTableLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Space>{ActionBuilder(init?.data?.layout?.tableToolBar)}</Space>
        </Col>
      </Row>
    );
  };
  const paginationChangeHandler = (_page: any, _per_page: any) => {
    setPage(_page);
    setPerPage(_per_page);
  };
  const tableChangeHandler = (_: any, __: any, sorter: any) => {
    if (sorter.order === undefined) {
      setSortQuery('');
    } else {
      const orderBy = sorter.order === 'ascend' ? 'asc' : 'desc';
      setSortQuery(`&sort=${sorter.field}&order=${orderBy}`);
    }
  };
  const afterTableLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination
            total={init?.data?.meta?.total || 0}
            current={init?.data?.meta?.page || 1}
            pageSize={init?.data?.meta?.per_page || 10}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
            onChange={paginationChangeHandler}
            onShowSizeChange={paginationChangeHandler}
          />
        </Col>
      </Row>
    );
  };
  return (
    <PageContainer>
      <Button
        type="primary"
        onClick={() => {
          setModalUri('https://public-api-v2.aspirantzhang.com/api/admins/add?X-API-KEY=antd');
          setModalVisible(true);
        }}
      >
        Add
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setModalUri('https://public-api-v2.aspirantzhang.com/api/admins/206?X-API-KEY=antd');
          setModalVisible(true);
        }}
      >
        Edit
      </Button>
      {searchLayout()}
      <Card>
        {beforeTableLayout()}
        <Table
          rowKey="id"
          dataSource={init?.data?.dataSource}
          columns={ColumnBuilder(init?.data?.layout?.tableColumn)}
          pagination={false}
          loading={init.loading}
          onChange={tableChangeHandler}
        />
        {afterTableLayout()}
      </Card>
      <Modal
        modalVisible={modalVisible}
        hideModal={() => {
          setModalVisible(false);
        }}
        modalUri={modalUri}
      />
    </PageContainer>
  );
};

export default Index;
