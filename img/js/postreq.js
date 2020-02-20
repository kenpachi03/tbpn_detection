var dis;
function settb(tb){
  dis="Tuberculosis";        
}

function setpneu(){
  dis="Pneumonia";
}

function doSubmit(){
    // Form Data
    var formData = new FormData();

    var fileSelect = document.getElementById("image_uploads");
    if(fileSelect.files && fileSelect.files.length == 1){
     var file = fileSelect.files[0]
     formData.set("disease_image", file , file.name);
    }
    formData.set("disease_name",dis);

    // Http Request  
    var request = new XMLHttpRequest();
    request.onload= function(){
      var partxt =JSON.parse(this.responseText);
      const results=document.getElementById('results');
      results.innerHTML=partxt[dis];
      const normal=document.getElementById('res_nor');
      normal.innerHTML=partxt["Normal"];
    }

    request.open('POST',"http://192.168.43.61:8000/imageAnalysis/get_prediction_on_image");
    //request.open('POST', "http://192.168.1.8:8000/imageAnalysis/get_prediction_on_image");
    request.send(formData);
     }