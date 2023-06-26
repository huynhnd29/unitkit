import { styled } from 'styled-components';

export const SelectWrapper = styled.div`
  text-transform: uppercase;
  font-size: 0.8142em;
  line-height: 1.625rem;
  outline: none;
  border: none;
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  position: relative;
  .selection {
    padding: 0.5rem 0.8rem;
  }
  :hover {
    background-color: #ecf0f1;
  }
  .list-select {
    position: absolute;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    min-width: 100px;
    right: 0;
    margin-top: 6px;
    .item {
      font-size: 0.9571em;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
      margin-top: 5px;
      padding: 0.25rem 1.5rem;
    }
  }
`;
