import Card from "react-bootstrap/Card";
import "./product-card.scss";

interface cardProp {
    title: string,
    description: string,
    imageUrl: string
}

export const ProductCard:React.FC<cardProp> = ({title, description, imageUrl}) => {

    return (
        <Card className="custom-card">
            <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1631856954913-c751a44490ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFyZHdhcmUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
                style={{ height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
