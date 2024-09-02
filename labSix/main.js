addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.data.slice(0, 10);
      // console.log(response);
      console.log(data);

      const jsonDataInnerContainerId = document.getElementById(
        "json-data-inner-container-id"
      );

      data.forEach((item) => {
        const jsonDataTemplate = document
          .getElementById("json-data-template")
          .content.cloneNode(true);

        jsonDataTemplate.querySelector(".card-title").textContent = item.title;
        jsonDataTemplate.querySelector(".card-text").textContent = item.body;

        jsonDataInnerContainerId.appendChild(jsonDataTemplate);
      });
    } catch (error) {
      console.error("There was an error!", error); // Handle errors
    }
  }

  fetchData();
});
