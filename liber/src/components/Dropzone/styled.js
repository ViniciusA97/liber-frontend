import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border-color: #e83f5b;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  position: relative;
  border: 1.5px dashed #969cb3;
  border-radius: 5px;
  cursor: pointer;
  width: 180px;
  height: 230px;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}

  img{
    position: relative;
    width: 99%;
    height: 99%;
    margin: .5%;
  }

  @media(max-width: 991px){
    width: 150px;
  }
  @media(max-width: 860px){}
  @media(max-width: 767px){
    width: 150px;
    height: 200px;
    margin: 10px auto 15px;
  }

  @media(max-width: 490px){
    width: 120px;
    height: 160px;
  }

`;

const messageColors = {
  default: '#3326AE',
  error: '#e83f5b',
  success: '#12a454',
};

export const UploadMessage = styled.p`
  position: relative;
  top: 50px;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  padding: 28px 0;
  color: ${({ type }) => messageColors[type || 'default']};
  
  @media(max-width: 767px){
    top: 20px;
  }
  
  @media(max-width: 490px){
    top: 20px;
  }
`;