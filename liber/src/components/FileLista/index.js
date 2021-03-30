  
import React from 'react';

import { Container, FileInfo } from './styled';

const FileList = ({ files,preview }) => {
  return (
    <Container>
        {console.log(files)}
          <FileInfo>
            <img src={preview} alt="" />
            <div>
              <strong>{files.name}</strong>
              <span>{files.readableSize}</span>
            </div>
          </FileInfo>
    </Container>
  );
};

export default FileList;