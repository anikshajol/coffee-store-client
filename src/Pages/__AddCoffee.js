/* const handleAddCoffee = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const imageFile = formData.get("photo");
  const imgFormData = new FormData();
  imgFormData.append("image", imageFile);

  try {
    fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`,
      {
        method: "POST",
        body: imgFormData,
      },
    )
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);

        if (imgData.success) {
          const imgUrl = imgData.data.display_url;
          const coffeeData = Object.fromEntries(formData.entries());
          console.log(coffeeData);
          coffeeData.photo = imgUrl;
          fetch(`http://localhost:5000/coffees`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(coffeeData),
          })
            .then((res) => {
              const data = res.json();
              if (!res.ok) {
                throw new Error(data.message);
              }
              return data;
            })
            .then((data) => {
              console.log("after post", data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Good job!",
                  text: "Data added Successfully!",
                  icon: "success",
                });
              }
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                text: `${err.message}`,
              });
            });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
 */
