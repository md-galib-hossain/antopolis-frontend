export const uploadToImgBB = async (image: File): Promise<string | null> => {
  if (!image) {
    console.error("No image provided for upload.");
    return null;
  }

  const imageHostKey = process.env.NEXT_PUBLIC_Imgbb_Token;
  if (!imageHostKey) {
    console.error("Image host API key is missing.");
    return null;
  }

  const formData = new FormData();
  formData.append("image", image);

  try {
    const imgbbResponse = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!imgbbResponse.ok) {
      throw new Error(`Image upload failed with status: ${imgbbResponse.status}`);
    }

    const imgbbData = await imgbbResponse.json();
    return imgbbData.data?.url ?? null;

  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    return null;
  }
};
