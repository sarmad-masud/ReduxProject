import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="Service 1" src="service1.jpg" />}
          >
            <Meta title="Service 1" description="Description of Service 1 goes here." />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="Service 2" src="service2.jpg" />}
          >
            <Meta title="Service 2" description="Description of Service 2 goes here." />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="Service 3" src="service3.jpg" />}
          >
            <Meta title="Service 3" description="Description of Service 3 goes here." />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
