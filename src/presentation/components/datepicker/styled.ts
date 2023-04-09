import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
  input[type='text'] {
    background: transparent;
    width: 95px;
    padding: 4px;
    box-size: boder-box;
    cursor: pointer;
    border: 1px dashed #ccc;
    &:focus {
      background: khaki;
      border: 1px dashed #ccc;
      outline: none;
    }
  }
`
