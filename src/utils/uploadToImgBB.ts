import { fileNameGenerator } from "./fileNameGenerator";

const uploadToImgBB = async (image: File): Promise<string | null> => {
  let imgUrl: string | null = null;

  // Ensure that image is provided
  if (!image) {
    console.error("No image provided for upload.");
    return imgUrl;
  }

  const imageHostKey = process.env.NEXT_PUBLIC_Imgbb_Token;
  if (!imageHostKey) {
    console.error("Image host API key is missing.");
    return imgUrl;
  }

  // Prepare the image data
  const formData = new FormData();
  formData.append("image", image);
  const fileName = fileNameGenerator();

  try {
    // Upload the image to ImgBB
    const imgbbResponse = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}&name=${fileName}`,
      {
        method: "POST",
        body: formData,
      }
    );

    // Check if the response is not OK
    if (!imgbbResponse.ok) {
      throw new Error(`Image upload failed with status: ${imgbbResponse.status}`);
    }

    // Parse the JSON response
    const imgbbData = await imgbbResponse.json();

    // Check if the data object has the expected URL
    imgUrl = imgbbData.data?.url ?? null;

    return imgUrl;
  } catch (error) {
    // Log the error with more context
    console.error("Error uploading image to ImgBB:", error);
    return null;
  }
};

export default uploadToImgBB;
