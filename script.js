const topicInput = document.getElementById('topicInput');
const submitBtn = document.getElementById('submitBtn');
const responseContainer = document.getElementById('responseContainer');

submitBtn.addEventListener('click', () => {
    const topic = topicInput.value.trim();
    if (topic) {
        fetchBlogContent(topic);
    } else {
        alert('Please enter a topic');
    }
});

async function fetchBlogContent(topic) {
    const apiUrl = `https://7nxb0gdff1.execute-api.us-east-1.amazonaws.com/dev/generateBlog`;
    const requestBody = { blog_topic: topic };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            displayResponse(data.blog_content);
        } else {
            displayResponse('Error: ' + response.status);
        }
    } catch (error) {
        displayResponse('Error: ' + error.message);
    }
}

function displayResponse(content) {
    responseContainer.innerHTML = `<p>${content || 'No response'}</p>`;
}