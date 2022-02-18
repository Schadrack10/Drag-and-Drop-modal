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


// import React from 'react';
// import {useDropzone} from 'react-dropzone';

// function Basic(props) {
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
//     disabled: true
//   });

//   const files = acceptedFiles.map(file => (
//     <li key={file.name}>
//       {file.name} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone disabled'})}>
//         <input {...getInputProps()} />
//         <input {...getInputProps()} style={{height:"100px",background:"#222",background:"transparent"}}  />
//         <label for="file">Choose a photo</label>
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }

// export default Basic

import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  marginTop: 5,
  width:"100%",
  height:"100%",

};

const thumb = {
  // display: 'inline-flex',
  borderRadius: 2,
  // border: '1px solid #eaeaea',
  // marginBottom: 8,
  marginRight: 8,
  width: "100%",
  height: "100%",
  // padding: 4,
  boxSizing: 'border-box',
  // width:"100%"
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  width:"100%",
  height:"100%",
  overflow: 'auto'
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit:"cover"
};
const container = {
    overflow:"auto"

}

function Previews(props) {

const handleCheck = (e)=>{
     console.log(e.target.value)
}

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg',
    onClick : acceptedFiles => acceptedFiles.map(file => object.assign(file,{
      preview:URL.createObjectURL(file)
    })),
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
      <div style={{margin:"10px 0"}}>file name :{file.name}</div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container" style={container}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} onclick={()=>handleCheck(e)}/>
        <p style={{fontSize:"12px",textTransform:"uppercase"}}>Drag 'n' drop the show cover image</p>
        <p style={{fontSize:"10px",textTransform:"uppercase",margin:"10px 0 5px 0"}}>Accepted files TYPES : jpeg/jpg </p>
        <div style={{height:"200px",width:"100%",background:"#222"}}>
        <aside style={thumbsContainer}  >
        {thumbs}
      </aside>
        </div>
      </div>
  
    </section>
  );
}

export default Previews