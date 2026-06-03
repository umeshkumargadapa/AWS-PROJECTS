// AWS CONFIGURATION

AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
    region: "ap-south-2"
});

// OPTIONAL CONFIG
AWS.config.s3ForcePathStyle = true;
AWS.config.signatureVersion = 'v4';

// BUCKET NAME
const bucketName = "leo-files-s3-upload";

// CREATE S3 OBJECT
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'ap-south-2',
    endpoint: 'https://s3.ap-south-2.amazonaws.com',
    params: {
        Bucket: bucketName
    }
});

// UPLOAD FILE FUNCTION
function uploadFile() {

    const fileInput =
        document.getElementById("fileInput");

    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file");
        return;
    }

    const params = {
        Bucket: bucketName,
        Key: Date.now() + "_" + file.name,
        Body: file,
        ContentType: file.type
    };

    s3.upload(params, function(err, data) {

        if (err) {

            console.log(err);

            document.getElementById("message").innerText =
                "Upload Failed";

        } else {

            document.getElementById("message").innerText =
                "Upload Successful";

            loadFiles();
        }
    });
}

// LOAD FILES FROM S3
function loadFiles() {

    const params = {
        Bucket: bucketName
    };

    s3.listObjectsV2(params, function(err, data) {

        if (err) {
            console.log(err);
            return;
        }

        const fileList =
            document.getElementById("fileList");

        fileList.innerHTML = "";

        data.Contents.forEach(file => {

            // SKIP WEBSITE FILES
            if (
                file.Key === "index.html" ||
                file.Key === "script.js" ||
                file.Key === "style.css"
            ) {
                return;
            }

            // FILE URL
            const fileUrl =
                `https://${bucketName}.s3.${AWS.config.region}.amazonaws.com/${file.Key}`;

            const div =
                document.createElement("div");

            div.className = "file-item";

            div.innerHTML = `
                <p>${file.Key}</p>

                <a href="${fileUrl}" target="_blank">
                    Open File
                </a>

                <br>
            `;

            // IMAGE PREVIEW
            if (
                file.Key.endsWith(".jpg") ||
                file.Key.endsWith(".png") ||
                file.Key.endsWith(".jpeg")
            ) {

                div.innerHTML += `
                    <img src="${fileUrl}">
                `;
            }

            fileList.appendChild(div);
        });
    });
}

// LOAD FILES ON PAGE LOAD
loadFiles();