import { StyledProduct } from "./styles";

const Product = (props) => {
  return (
    <StyledProduct>
      <div style={{ minHeight: "70px" }}>
        <p
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            padding: "1rem 0",
          }}
        >
          {props.name}
        </p>
      </div>
      <img
        src="https://source.unsplash.com/random/300x350"
        style={{
          display: "block",
          maxWidth: "100%",
          width: "300px",
          margin: "0 auto",
        }}
      />
    </StyledProduct>
  );
};

export { Product };
