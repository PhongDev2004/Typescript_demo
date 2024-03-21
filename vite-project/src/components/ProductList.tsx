import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link as LinkIcon } from "react-feather";
import {Product} from "~/types/Product"

type TProps = {
  products: Product[],
}

const ProductList = (props: TProps) => {
  console.log(props.products);
  
  return (
    <Row xs={1} md={3} className="g-4">
      {props.products.map((product) => (
        <Col key={product.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{width:"250px", height:"150px"}} src={product.images[0]} alt={product.title}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              <div
                style={{
                  whiteSpace: "nowrap",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                }}
              >
                <span>{product.description}</span>
              </div>
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
