async function uploadImage(imageFile) {
  const apiUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API_KEY}`;
  // Create a FormData object and append the image file
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    const displayUrl = result.data.display_url;
    // console.log("Upload successful:", displayUrl);
    return { success: true, displayUrl };
  } catch (error) {
    console.error("Error uploading image:", error);
    return { success: false };
  }
}

export default uploadImage;
