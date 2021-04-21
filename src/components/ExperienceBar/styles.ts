import styled from "styled-components";

export const BarBox = styled.header`
  display: flex;
  align-items: center;
`;

export const XpNumber = styled.span`
  font-size: 1rem;
`;

export const Bar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const CompletedBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
