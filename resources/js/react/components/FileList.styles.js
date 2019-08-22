import React from 'react';
import styled from 'styled-components';

export const FileListWrapper = styled.div.attrs({ className: 'file-list-wrapper' })`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin: 0;
  border: none;
  padding: 0;
  width: 260px;
  background: #f3f3f3;
`;

export const FileHeaderWrapper = styled.div.attrs({ className: 'file-list-header' })`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  border: none;
  border-bottom: 1px solid #d7d9e0;
  padding: 15px;
  width: 100%;
  min-height: 50px;
  
  & > span {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 2px;
    color: #394166;
    text-transform: uppercase;
  }
`;

export const UploadButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: none;
  padding: 5px;
  
  background: transparent;
  
  & > span {
    margin: 0 10px 0 0;
    font-size: 13px;
    line-height: 1em;
    color: #9ca0b2;
  }
  
  & > svg {
    margin: 0;
  }
`;

export const Files = styled.div.attrs({ className: 'file-list' })`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin: 0;
  padding: 10px 5px;
  width: 100%;
  height: 100%;
  
  overflow: auto;
`;

export const FileItem = styled.div.attrs({ className: 'file-object' })`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 10px 0;
  border: 1px solid transparent;
  border-left: 5px solid transparent;
  border-radius: 2px;
  padding: 15px 15px 15px 10px;
  width: 100%;
  height: 76px;
  overflow: hidden;
  cursor: pointer;
  
  .file-title {
    margin: 0 0 14px;
    font-weight: bolder;
    font-size: 14px;
    line-height: 17px;
    color: #394166;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .file-author {
    margin: 0;
    font-weight: bolder;
    font-size: 12px;
    line-height: 14px;
    color: #394166;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &.active {
    background: white;
    border: 1px solid #E8EAEF;
    border-left: 5px solid #4077e4;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(57, 65, 102, 0.05);
  }
`;
