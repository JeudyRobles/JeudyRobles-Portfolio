import styled from '@emotion/styled';

const ButtonWrapper = styled.a`
  text-decoration: none;

  @media (max-width: 440px) {
    display: none;
}
`;

const Button = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;

  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const Front = styled.div`
  width: 176px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-size: 1.25rem;
  
  border: solid 2px #B3B5B8;
  border-radius: 8px;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--primary-color);
  user-select: none;
  transition: all 0.25s ease-out;

`;

export default function ButtonPrimary({ text }) {
  return (
    <ButtonWrapper data-aos="zoom-in" href="mailto:jeudyjr@outlook.com" rel="noopener noreferrer">
      <Button>
        <Edge />
        <Front className="front">
          <ButtonText>{text}</ButtonText>
        </Front>
      </Button>
    </ButtonWrapper>
  );
}