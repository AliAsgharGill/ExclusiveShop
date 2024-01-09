import { Card } from "antd";
const { Meta } = Card;
const CardComponent = ({ url, title, description }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={url} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardComponent;
