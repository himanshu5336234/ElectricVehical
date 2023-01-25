import React from 'react';
import styled from 'styled-components';
const DivScroll = styled.div`
  width: 90%;
  margin: 20px 20px 24px;
  overflow-x: auto;
  white-space: nowrap;
`;
const Td = styled.td`
  padding: 0 8px;
  font-weight: 500;
  font-size: 13px;
`;

const Scroll = () => {
  return (
<>
<DivScroll class="container">
        <table>
          <tbody>
            <tr>
              <Td>TRENDING</Td>
              <Td>PERFORMANCE</Td>
              <Td>CHARGING</Td>
              <Td>BATTERY</Td>
              <Td>DESIGN</Td>
              <Td>TECH</Td>
              <Td>NEWS</Td>
            </tr>
          </tbody>
        </table>
      </DivScroll>
</>
    )
}

export default Scroll