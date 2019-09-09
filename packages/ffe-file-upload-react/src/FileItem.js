import React from 'react';
import { number, func, shape, object, string as stringType } from 'prop-types';

const FileItem = props => (
    <li key={props.index}>
        {// File is loading
        !props.file.document && !props.file.error && (
            <div className="ffe-file-upload__file-item-stencil">
                <div className="ffe-file-upload__file-item-stencil-info">
                    <div className="ffe-file-upload__file-item-stencil-info-background" />
                    <div className="ffe-file-upload__file-item-stencil-info-text">
                        {props.file.name}
                    </div>
                </div>
                <button
                    type="button"
                    id={props.file.name}
                    className="ffe-file-upload__file-item-delete-button"
                    onClick={props.onFileDeleted}
                >
                    {props.cancelText}
                    <div
                        id={props.file.name}
                        className="ffe-file-upload__file-item-delete-icon"
                    />
                </button>
            </div>
        )}
        {// File finished loading
        props.file.document && (
            <div className="ffe-file-upload__file-item-loaded">
                <button
                    type="button"
                    id={props.file.name}
                    className="ffe-file-upload__file-item-delete-button"
                    onClick={props.onFileDeleted}
                >
                    {props.deleteText}
                    <div
                        id={props.file.name}
                        className="ffe-file-upload__file-item-delete-icon"
                    />
                </button>
                <div className="ffe-file-upload__file-item-filename">
                    {props.file.name}
                </div>
            </div>
        )}
        {// File has error
        props.file.error && (
            <div className="ffe-file-upload__file-item-error">
                <div className="ffe-file-upload__file-item-error-icon ffe-field-error-message" />
                <button
                    type="button"
                    id={props.file.name}
                    className="ffe-file-upload__file-item-delete-button"
                    onClick={props.onFileDeleted}
                >
                    {props.deleteText}
                    <div
                        id={props.file.name}
                        className="ffe-file-upload__file-item-delete-icon"
                    />
                </button>
                <div className="ffe-file-upload__file-item-error-info">
                    <div className="ffe-file-upload__file-item-error-info-filename">
                        {props.file.name}
                    </div>
                    <div className="ffe-file-upload__file-item-error-info-error-message">
                        {props.file.error}
                    </div>
                </div>
            </div>
        )}
    </li>
);

FileItem.propTypes = {
    /** Shape of the file type, name is required, error and document.content is optional */
    file: shape({
        name: stringType.isRequired,
        document: object,
        error: stringType,
    }).isRequired,
    index: number.isRequired,
    /**
     * Called when the user clicks the delete button for a given file. Is called with the name of the file in question.
     */
    onFileDeleted: func.isRequired,
    /** Label for the cancel button */
    cancelText: stringType,
    /** Label for the delete button */
    deleteText: stringType,
};

export default FileItem;
