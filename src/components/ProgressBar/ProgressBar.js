/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: '8px',
    padding: '0px',
    borderRadius: '4px'
  },
  medium: {
    height: '12px',
    padding: '0px',
    borderRadius: '4px'
  },
  large: {
    height: '16px',
    padding: '4px',
    borderRadius: '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (<Wrapper role='progressbar' aria-valuenow={value} aria-valuemin='0' aria-valuemax='100' style={{'--padding': styles.padding, '--borderRadius': styles.borderRadius}}>
    <BarWrapper>
    <Bar style={{'--width':value + '%', '--height': styles.height}} />
    </BarWrapper>
    <VisuallyHidden>{value}%</VisuallyHidden>
  </Wrapper>);
};

const Wrapper = styled.div`
  width: auto;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;

  /* Bar Wrapper is needed to trim off corners of the Bar in large size when it reaches close to 100 as overflow hidden on the Wrapper does not work as it is not touching */
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
