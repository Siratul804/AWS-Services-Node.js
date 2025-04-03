const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

async function getObjectUrl(key) {
  const command = new GetObjectCommand({
    Bucket: "s3-bucket-name",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  return url;
}

async function init() {
  console.log(
    "url for image/video/file",
    await getObjectUrl("name of that file")
  );
}

init();
