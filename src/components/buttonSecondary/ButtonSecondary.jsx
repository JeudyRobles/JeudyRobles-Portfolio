import styled from "@emotion/styled";
import { css } from "@emotion/react";

const buttonStyles = css`
  height: 2.5rem;
  width: 10.9375rem;
  margin-right: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  background-color: var(--primary-color-500);
  text-decoration: none;
  transition: transform 0.25s ease-out, background-color 0.25s ease-out;

  &:hover {
    transform: translateY(-0.1875rem);
  }

  @media (max-width: 27.5rem) {
    width: 15.5rem;
    height: 3.5rem;
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  ${buttonStyles}
`;

const ButtonLink = styled.a`
  ${buttonStyles}
`;

const ButtonSpan = styled.span`
  color: var(--secondary-color);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(0.875rem, 2vw, 1rem);
`;

export default function ButtonSecondary({
  text,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) {
  if (href) {
    return (
      <ButtonLink href={href} target={target} rel={rel}>
        <ButtonSpan>{text}</ButtonSpan>
      </ButtonLink>
    );
  }

  return (
    <Button type="button">
      <ButtonSpan>{text}</ButtonSpan>
    </Button>
  );
}
