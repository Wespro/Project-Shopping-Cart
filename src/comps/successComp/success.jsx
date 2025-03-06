import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const SuccessCard = styled(motion.div)`
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 500px;
`;

const Title = styled(motion.h1)`
  color: #00796b;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px solid;
`;

const SuccessMessage = styled.p`
  color: #4caf50;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px solid;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #00796b;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 2px 1px 1px solid;

  &:hover {
    background-color: #004d40;
  }
`;

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <SuccessCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
          }}
        >
          Success!
        </Title>
        <SuccessMessage>
          Your operation was completed successfully.
        </SuccessMessage>
        <Button onClick={() => navigate('/shop')}>Shop again ?</Button>
      </SuccessCard>
    </PageContainer>
  );
};

export default SuccessPage;
