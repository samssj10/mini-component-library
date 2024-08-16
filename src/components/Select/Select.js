import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentationalBit>
      {displayedValue}
      <IconWrapper>
      <Icon  id={'chevron-down'} size={24}/>
      {/* when dealing with icon svg figma design might only show polyline */}
      </IconWrapper>
    </PresentationalBit>
    </Wrapper>
  );
};

// PresentationalBit is responsible for what sighted users actually see and 
// Wrapper ensures both are tied together such that 
// functionality is still provided by native select

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  /* this ensures both visual and functional components reside in the same space exactly overlapping each other */
  /* By default when calculating layout absolute elements are ignored but if this property is not set it tries to use NativeSelect as well in doing layout*/
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* no restriction currently on width and height */
  -webkit-appearance: none;
  /* in safari select tags have a default height which can't be overriden so above ensures that is removed */
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  /* to match the functional layer and ensure no leaking is there */
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16/16}rem;
  /* width: max-content; */
  /* this ensures visually our select takes up only as much space as reqd but our native select providing the functionality is still there outside the bounds of visual layer and can trigger unwanted clicks */

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
    /* this applies on all inline elements like text, icons etc */
  }

`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: max-content;
  height: max-content;
  pointer-events: none;
  /* since IconWrapper and NativeSelect use positioned layout and no z-index is set by default DOM order follows so we need to ensure click events on icon are disabled */
  /* this makes the icon transparent to clicks and NativeSelect transparent to visuals */
`;

export default Select;
