import styled from "@emotion/styled";
import { useLanguage } from "../../context/LanguageContext.jsx";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: var(--space-nav-gap);
  padding: var(--space-4);
  align-items: center;
`;

const LangToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: "Montserrat", sans-serif;
  font-size: var(--font-size-sm);
  font-weight: 600;
  user-select: none;
`;

const LangBtn = styled.button`
  background: none;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: var(--radius-md);
  color: ${(props) =>
    props.$active ? "var(--primary-color)" : "var(--text-muted)"};
  transition: color 0.25s ease-out, background-color 0.25s ease-out;

  &:hover {
    color: var(--primary-color);
    background-color: var(--NeutralAlpha);
  }
`;

const Separator = styled.span`
  color: var(--text-muted);
`;

export default function Nav() {
  const { lang, t, setLang } = useLanguage();

  return (
    <NavContainer data-aos="fade-down" className="Nav">
      <img src="/v0_dark.svg" alt="Jeudy Robles Logo" />
      <a href="#Hero" className="Nav__Title">
        Jeudy Robles / <span className="Nav__SubTitle">{t("nav.portfolio")}</span>
      </a>
      <LangToggle>
        <LangBtn $active={lang === "en"} onClick={() => setLang("en")}>
          EN
        </LangBtn>
        <Separator>/</Separator>
        <LangBtn $active={lang === "es"} onClick={() => setLang("es")}>
          ES
        </LangBtn>
      </LangToggle>
    </NavContainer>
  );
}
