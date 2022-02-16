// // import React from 'react'
// import React, {Component} from 'react';
// import Dropzone from 'react-dropzone';

// class Basic extends Component {
//   constructor() {
//     super();
//     this.onDrop = (files) => {
//       this.setState({files})
//     };
//     this.state = {
//       files: []
//     };
//   }

//   render() {
//     const files = this.state.files.map(file => (
//       <li key={file.name}>
//         {file.name} - {file.size} bytes
//       </li>
//     ));

//     return (
//       <Dropzone onDrop={this.onDrop}>
//         {({getRootProps, getInputProps}) => (
//           <section className="container">
//             <div {...getRootProps({className: 'dropzone'})}>
//               {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
//               <input {...getInputProps()} style={{height:"200px",background:"#444"}}/> 
//             </div>
//             <aside>
//               <h4>Files</h4>
//               <ul>{files}</ul>
//             </aside>
//           </section>
//         )}
//       </Dropzone>
//     );
//   }
// }

// export default Basic


import React from 'react';
import {useDropzone} from 'react-dropzone';

function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    disabled: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone disabled'})}>
        <input {...getInputProps()} />
        <input {...getInputProps()} style={{height:"100px",background:"#222",background:"transparent"}}  />
        <label for="file">Choose a photo</label>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default Basic