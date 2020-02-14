const input = document.querySelector('#image_uploads');

const preview= document.querySelector('.preview');

input.addEventListener('change', updateImageDisplay);


function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if(curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);

    for(const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');

      if(validFileType(file)) {
       
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

const fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number > 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number > 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}
/*
function updateImageDisplaypn() {
    while(preview_pn.firstChild) {
      preview_pn.removeChild(preview_pn.firstChild);
    }
  
    const curFiles = input_pn.files;
    if(curFiles.length === 0) {
      const para = document.createElement('p1');
      para.textContent = 'No files currently selected for upload';
      preview_pn.appendChild(para);
    } else {
      const list = document.createElement('ol1');
      preview_pn.appendChild(list);
  
      for(const file of curFiles) {
        const listItem = document.createElement('li1');
        const para = document.createElement('p1');
  
        if(validFileType(file)) {
         
          const image = document.createElement('img1');
          image.src = URL.createObjectURL(file);
  
          listItem.appendChild(image);
          listItem.appendChild(para);
        } else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          listItem.appendChild(para);
        }
  
        list.appendChild(listItem);
      }
    }
  }
  
*/