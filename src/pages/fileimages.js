import React from 'react';
import firebase from 'firebase';

const FileImages = () => {
  /* const [urlImages, updateUrlimages] = useState({
    fileImages: null,
    nameImages: null,
  }); */

  const handleChange = (files) => {
    console.log('files :', files);
    console.log('files[0] :', files[0]);
    console.log('files[0].name', files[0].name);
    /* updateUrlimages({
      fileImages: files[0],
      nameImages: files[0].name,
    }); */

    const bucketName = 'users';
    const file = files[0];
    const storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    const uploadTask = storageRef.put(file);
    /* uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      const downloadURL = uploadTask.snapshot.downloadURL;
      console.log('downloadURL', downloadURL);
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
      });
    }); */
    uploadTask.on(
      'state_changed',
      null,
      function (error) {
        console.log('Error al subir el archivo', error);
      },
      function () {
        console.log('Subida completada');
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type='file' onChange={(e) => handleChange(e.target.files)} />
      <img id='new-img' />
    </div>
  );
};

export default FileImages;
