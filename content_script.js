// window.addEventListener('load', () => {
//     const message = 'Hello from the content script!';
//     window.alert(message);
//   });

  document.addEventListener('copy', async (event) => {
    // Prevent the default copy action
    //event.preventDefault();
  
    try {
      // Read text from the clipboard
      const copiedText = await navigator.clipboard.readText();
      console.log(copiedText);
      //window.alert(copiedText);
      const op= await fetchBlogContent(copiedText);
      console.log(op);
      window.alert(op);

    } catch (error) {
      console.error('Failed',error);
    }
    


  });
  
  async function fetchBlogContent(topic) {
    const apiUrl = `https://7nxb0gdff1.execute-api.us-east-1.amazonaws.com/dev/generateBlog`;
    const requestBody = { blog_topic: topic };

    try {
        const response = await fetch(apiUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            return data.blog_content;
        } else {
            return response.status;
        }
    } catch (error) {
        displayResponse('Error: ' + error.message);
    }
}