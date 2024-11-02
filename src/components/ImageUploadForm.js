import React, { useState } from 'react';

function ImageUploadForm() {
    const [fileInfo, setFileInfo] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileInfo({
                name: file.name,
                size: (file.size / 1024).toFixed(2) + ' KB'
            });
        }
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {fileInfo && (
                <div style={{ marginTop: '10px' }}>
                    <p><strong>File Name:</strong> {fileInfo.name}</p>
                    <p><strong>File Size:</strong> {fileInfo.size}</p>
                </div>
            )}
        </div>
    );
}

export default ImageUploadForm;
