document.getElementById("Download").addEventListener("click", function() {
    let resumeFileURL ="file:///C:/Users/sabithaR/Downloads/Resume.pdf";

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFileURL;
    
    document.body.append(downloadLink);
  
    downloadLink.click();
});
