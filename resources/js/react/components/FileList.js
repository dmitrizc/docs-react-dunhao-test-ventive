import React from 'react';
import PropTypes from 'prop-types';

import {
  FileListWrapper,
  FileHeaderWrapper,
  UploadButton,
  Files,
  FileItem,
} from './FileList.styles'

class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.fileRef = null;

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleClickUpload = this.handleClickUpload.bind(this);
  }

  handleFileChange(e) {
    const {
      postDocument,
      getDocumentsList,
      isPostingDocument,
    } = this.props;

    if (isPostingDocument || !(e.target.files && e.target.files.length)) {
      return;
    }

    const data = new FormData();
    data.append('file', e.target.files[0]);

    this.fileRef.value = '';

    postDocument(data)
      .then(() => {
        alert('File Uploaded!');
        getDocumentsList();
      })
      .catch(() => {
        alert('File upload failed!');
      });
  }

  handleClickUpload(e) {
    e.preventDefault();

    if (this.props.isPostingDocument) {
      return;
    }

    if (this.fileRef) {
      this.fileRef.click();
    }
  }

  render() {
    const {
      documents,
      isFetchingDocumentsList,
      isPostingDocument,
      selectedDocumentId,
      onSelectFile,
    } = this.props;

    return (
      <FileListWrapper>
        <FileHeaderWrapper>
          <span>FILES</span>

          <UploadButton onClick={this.handleClickUpload} disabled={isPostingDocument}>
            <span>Upload</span>

            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.2773 3.9668C10.4258 4.11523 10.5 4.29297 10.5 4.5C10.5 4.71875 10.4258 4.89844 10.2773 5.03906C10.1328 5.17969 9.95703 5.25 9.75 5.25H7.875V9C7.875 9.20703 7.80078 9.38477 7.65234 9.5332C7.50781 9.67773 7.33203 9.75 7.125 9.75H4.875C4.66797 9.75 4.49023 9.67773 4.3418 9.5332C4.19727 9.38477 4.125 9.20703 4.125 9V5.25H2.25C2.04297 5.25 1.86523 5.17969 1.7168 5.03906C1.57227 4.89844 1.5 4.71875 1.5 4.5C1.5 4.29688 1.57227 4.11914 1.7168 3.9668L5.4668 0.216797C5.61133 0.0722656 5.78906 0 6 0C6.20703 0 6.38281 0.0722656 6.52734 0.216797L10.2773 3.9668ZM10.5 10.5V7.5H12V10.5C12 10.9141 11.8535 11.2676 11.5605 11.5605C11.2676 11.8535 10.9141 12 10.5 12H1.5C1.08594 12 0.732422 11.8535 0.439453 11.5605C0.146484 11.2676 0 10.9141 0 10.5V7.5H1.5V10.5H10.5Z"
                fill="#9CA0B2" />
            </svg>
          </UploadButton>

          <input type="file" name="file" onChange={this.handleFileChange} hidden ref={ref => {this.fileRef = ref;}} />
        </FileHeaderWrapper>

        <Files>
          {documents.map(file => (
            <FileItem
              key={file.id}
              className={selectedDocumentId === file.id ? 'active' : ''}
              onClick={() => onSelectFile(file)}
            >
              <span className="file-title">Document #{`${file.id}${file.title ? ` - ${file.title}` : ''}`}</span>
              <span className="file-author">{file.user.name || file.user.email || ''}</span>
            </FileItem>
          ))}
        </Files>
      </FileListWrapper>
    );
  }
}

FileList.propTypes = {
  documents: PropTypes.array.isRequired,
  getDocumentsList: PropTypes.func.isRequired,
  isFetchingDocumentsList: PropTypes.bool.isRequired,
  postDocument: PropTypes.func.isRequired,
  isPostingDocument: PropTypes.bool.isRequired,
  selectedDocumentId: PropTypes.any,
  onSelectFile: PropTypes.func.isRequired,
};

export default FileList;