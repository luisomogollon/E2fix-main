import React from "react";

/*
Anterior
<Container>
    <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
            {children}
        </Col>
    </Row>
</Container>
*/

const FormContainer = ({ children }) => {
  return <div>{children}</div>;
};

export default FormContainer;
