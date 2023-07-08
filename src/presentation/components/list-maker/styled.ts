import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: 'circle';
  margin-bottom: 16px;
  list-position: inside;
  padding-left: 16px;
`
export const ListItem = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px;
  margin-bottom: 8px;
  &:hover {
    background: #ddd;
  }
`
