// script.js

// Add event listener to the comment submit button
document.querySelector('.comment-section button').addEventListener('click', function() {
    const commentInput = document.querySelector('.comment-section textarea');
    const commentText = commentInput.value;

    if (commentText) {
        // Create a new comment element
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;

        // Add the new comment to the comments list
        document.querySelector('.comments-list').appendChild(newComment);

        // Clear the comment input field
        commentInput.value = '';
    } else {
        alert('Please write a comment before submitting.');
        return; 
        // If the comment input field is empty, prevent the form submission and display an alert message
        // Returning from the function prevents further execution of the code within it
    }