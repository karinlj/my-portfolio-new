import styled from "styled-components";
import { device, colors } from "./styles/variables";

const StyledMenuBtn = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 1rem; //0
  // position: relative;
  z-index: 10000;
  width: 50px;
  height: 50px;
  padding: 0 0.7rem;
  margin-right: -0.9rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  /* Hamburger Line */
  > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: ${colors.textcolor_light};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    /* Hamburger Lines - Top & Bottom */
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background: inherit;
    }
    /* Moves Line Down */
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background: inherit;
      top: 10px;
    }
  }
  //hide veggoburger
  @media ${device.mobileM} {
    display: none;
  }
  //clicked veggoburger
  &.menu_btn_clicked {
    > div {
      transform: rotate(135deg);
      /* Turns Lines Into X */
      &:before {
        top: 0;
        transform: rotate(90deg);
      }
      &:after {
        top: 0;
        transform: rotate(90deg);
      }
    }
    &:hover {
      > div {
        transform: rotate(225deg);
      }
    }
  }
`;

interface IProps {
  toggleMenu(): void;
  mobileOpen: boolean;
}
const ToggleMenuBtn = ({ toggleMenu, mobileOpen }: IProps) => {
  return (
    <StyledMenuBtn
      className={mobileOpen ? "menu_btn_clicked" : "menu_btn"}
      aria-label="Mobile Menu"
      aria-expanded={mobileOpen ? "true" : "false"}
      onClick={toggleMenu}
    >
      <div aria-hidden="true"></div>
    </StyledMenuBtn>
  );
};
export default ToggleMenuBtn;
