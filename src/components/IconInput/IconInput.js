import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36
  }
}

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  // delegated is kept to minimise the props directly affecting a component
  // in this case placeholder is reqd for the input and not the wrapper itself

  const styles = STYLES[size];

  if(!styles){
    return new Error(`Unknown size passed for Input component: ${size}`);
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput style={{ "--width": width + 'px', '--height': styles.height / 16 + 'rem', '--fontSize': styles.fontSize /16 + 'rem', '--border': styles.borderThickness + 'px' }} {...delegated} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  outline-offset: 2px;
  color: inherit;
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
