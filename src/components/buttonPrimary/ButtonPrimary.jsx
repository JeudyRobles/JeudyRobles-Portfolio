import styled from '@emotion/styled';

const ButtonLink = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  @media (max-width: 27.5rem) {
    display: none;
  }

  &:hover .front {
    transform: translateY(-0.375rem);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-0.125rem);
    transition: transform 34ms;
  }
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
`;

const Front = styled.span`
  width: 11rem;
  height: 2.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  font-size: 1.25rem;

  border: solid 0.125rem var(--text-muted);
  border-radius: var(--radius-md);
  transform: translateY(-0.25rem);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const ButtonText = styled.span`
  font-size: var(--font-size-sm);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--primary-color);
  user-select: none;
  transition: color 0.25s ease-out;
`;

export default function ButtonPrimary({ text }) {
  return (
    <ButtonLink
      data-aos="zoom-in"
      href="mailto:jeudyjr@outlook.com"
      rel="noopener noreferrer"
    >
      <Edge />
      <Front className="front">
        <ButtonText>{text}</ButtonText>
      </Front>
    </ButtonLink>
  );
}
