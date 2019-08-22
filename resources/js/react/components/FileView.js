import React from 'react';
import PropTypes from 'prop-types';
import _find from 'lodash/find';
import styled from 'styled-components';

const FileViewWrapper = styled.div.attrs({ className: 'file-view-wrapper' })`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: white;
`;

const FileViewHeader = styled.div.attrs({ className: 'file-view-header' })`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  margin: 0;
  padding: 10px 20px;
  width: 100%;
  height: 50px;
  background: #4077e4;
  overflow: hidden;
  
  .document-title {
    font-weight: bolder;
    font-size: 18px;
    line-height: 1em;
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const FileContent = styled.div.attrs({ className: 'file-view-content' })`
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  margin: 0;
  padding: 28px;
  width: 100%;
  height: 100%;
  
  & > iframe {
    width: 100%;
    border: none;
  }
`;

class FileView extends React.PureComponent {
  render() {
    const {
      documents,
      selectedDocumentId,
    } = this.props;

    let selectedDocument = null;
    if (selectedDocumentId) {
      selectedDocument = _find(documents, { id: selectedDocumentId });
    }

    return (
      <FileViewWrapper>
        <FileViewHeader>
          <span className="document-title">
            Document #{(selectedDocument && `${selectedDocument.id}${selectedDocument.title ? ` - ${selectedDocument.title}` : ''}`) || ''}
          </span>
        </FileViewHeader>

        <FileContent>
          {selectedDocument && (
            <iframe src={selectedDocument.path}/>
          )}
        </FileContent>
      </FileViewWrapper>
    );
  }
}

FileView.propTypes = {
  documents: PropTypes.array.isRequired,
  selectedDocumentId: PropTypes.any,
};

export default FileView;
