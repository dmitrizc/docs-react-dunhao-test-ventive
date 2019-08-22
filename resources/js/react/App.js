import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  getDocumentsList,
  postDocument,
  selectDocument,
} from './redux/actions/documents';

import FileList from './components/FileList';
import FileView from './components/FileView';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: #4dc0b5;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDocumentsList();
  }

  render() {
    const {
      documents,
      postDocument,
      isPostingDocument,
      getDocumentsList,
      isFetchingDocumentsList,
      selectedDocumentId,
      selectDocument,
    } = this.props;

    return (
      <AppWrapper className="app">
        <FileList
          documents={documents}
          postDocument={postDocument}
          isPostingDocument={isPostingDocument}
          getDocumentsList={getDocumentsList}
          isFetchingDocumentsList={isFetchingDocumentsList}
          selectedDocumentId={selectedDocumentId}
          onSelectFile={selectDocument}
        />
        <FileView documents={documents} selectedDocumentId={selectedDocumentId}/>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  documents: PropTypes.array.isRequired,
  isFetchingDocumentsList: PropTypes.bool.isRequired,
  isPostingDocument: PropTypes.bool.isRequired,
  selectedDocumentId: PropTypes.any,
  getDocumentsList: PropTypes.func.isRequired,
  postDocument: PropTypes.func.isRequired,
  selectDocument: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  documents: store.rootReducer.documents.documents,
  isFetchingDocumentsList: store.rootReducer.documents.isFetchingDocumentsList,
  isPostingDocument: store.rootReducer.documents.isPostingDocument,
  selectedDocumentId: store.rootReducer.documents.selectedDocumentId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDocumentsList,
  postDocument,
  selectDocument,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
