const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
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

async function putObject(filename, contentType) {
  const command = new PutObjectCommand({
    Bucket: "s3-bucket-name",
    Key: "name of that file",
    contentType: contentType,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  return url;
}

async function listObject() {
  const command = new ListObjectsV2Command({
    Bucket: "s3-bucket-name",
    Key: "/",
  });

  const result = await s3Client.send(command);

  console.log(result);
}

async function init() {
  //   console.log(
  //     "url for getting image/video/file",
  //     await getObjectUrl("name of that file")
  //   );

  //   console.log(
  //     "url for uploading",
  //     await putObject(`image-${Date.now}.jpeg`, "image/jpeg")
  //   );

  //   await listObject();

  const cmd = new DeleteObjectCommand({
    Bucket: "s3-bucket-name",
    Key: "name of that file",
  });

  await s3Client.send(cmd);
}

init();
