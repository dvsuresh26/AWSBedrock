//This is a 4 lines code snippet to generate an image if you have the image in string format.

const fs = require('fs');




fs.writeFileSync('generated_image.png', Buffer.from(imageData, 'base64'));

console.log('Image downloaded successfully as generated_image.png');