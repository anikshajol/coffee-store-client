/*  const handleUpdateCoffee = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const imageFile = formData.get("photo");

  let imageUrl = "";

  try {
    // ১. ছবি আপলোড লজিক (ছবি থাকলে আপলোড হবে)
    if (imageFile && imageFile.name) {
      const imageData = new FormData();
      imageData.append("image", imageFile);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`,
        {
          method: "POST",
          body: imageData,
        },
      );
      const imgData = await imgRes.json();
      if (imgData.success) {
        imageUrl = imgData.data.display_url;
      }
    }

    // ২. কফি ডাটা প্রস্তুত করা
    const coffeeData = Object.fromEntries(formData.entries());

    // যদি নতুন ছবি থাকে তবেই লিঙ্ক আপডেট হবে, নাহলে আগের লিঙ্কে হাত দিবে না
    if (imageUrl) {
      coffeeData.photo = imageUrl;
    } else {
      delete coffeeData.photo; // ফাইলে কিছু না থাকলে প্রপার্টি বাদ দেওয়া যেন নাল (null) না হয়
    }

    // ৩. ডাটাবেজ আপডেট করার সঠিক Fetch পদ্ধতি (এটিকে if (imgData.success) এর বাইরে রাখতে হবে)
    const res = await fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    });

    const result = await res.json();
    console.log("Update Result:", result);

    if (result.modifiedCount > 0) {
      Swal.fire({
        title: "Good job!",
        text: `Update Successfully`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Info",
        text: "No changes were made",
        icon: "info",
      });
    }
  } catch (error) {
    console.error("Update Error:", error);
    Swal.fire("Error", "Something went wrong!", "error");
  }
};
 
 */
