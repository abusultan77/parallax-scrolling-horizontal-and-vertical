import { create } from "ipfs-http-client";
const projectId = "2E6wz7GkHGNj2VCFy7gyPnayjGj";
const projectSecret = "1063222031887d57279e615d89af9006";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
// const client = create("https://ipfs.infura.io:5001/api/v0");
// export const IpfsStorage = async (file) => {
//   try {
//     const added = await client.add(file);
//     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
//     return url;
//   } catch (error) {
//     console.log("Error uploading file: ", error);
//   }
// };
export const IpfsStorage = async (file) => {
  try {
    console.log('file::::' , file)
    let converted = dataURLtoFile(file , "something.png")
    console.log('converted::::' , converted)
    const addImage = await client.add(converted, {pin : true});
    console.log('waleed qureshi:::::' , addImage)

    // const imageUrl = `ipfs://${addImage.path}`;
    const imageUrl = `https://ipfs.io/ipfs/${addImage.path}`;
    // const imageUrl = `https://ipfs.infura.io/ipfs/${addImage.path}`;
    return imageUrl;
  } catch (error) {
  }
};


function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}