import styled from '@emotion/styled';

const Button = styled.button`
  height: 40px;
  width: 175px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #69D0B7;
  transition: all 0.25s ease-out;

  &:hover{
  transform: translateY(-3px);
  }

  @media (max-width: 440px) {
    width: 15.5rem;
    height: 3.5rem;
    margin-right: 0.5rem;
  }
`;

const ButtonSpan = styled.span`
  color: var(--secondary-color);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(14px, 2vw, 16px);
`;

export default function ButtonSecondary({text, variant}) {
    return (
      <>
        <Button>
          <ButtonSpan>{text}</ButtonSpan>
          
        </Button>
      </>
  );
}