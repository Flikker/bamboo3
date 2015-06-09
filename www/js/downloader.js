function downloadFile(serverurl, localurl) {


var fileTransfer = new FileTransfer();
    
    var uri = encodeURI(serverurl);
    var fileURL = 'cdvfile://localhost/persistent/path/to/downloads/' + localurl;

    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            console.log("download complete: " + entry.toURL());
            persistData(entry.toURL(), 'is this in', 'lets hope');
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );

};



 // !! Assumes variable fileURL contains a valid URL to a path on the device,
    //    for example, cdvfile://localhost/persistent/path/to/downloads/
    
    