

const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';

    fetch(url)
        .then(res => res.json())
        .then(data => displayComments(data.slice(0, 20)))
}

const displayComments = (comments) => {


    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        // console.log(comment)
        const { id, name, email, postId, body } = comment;

        const commentDiv = document.createElement('div');


        commentDiv.innerHTML = `
        <div class="card w-96 h-96 bg-base-100 shadow-xl mb-5 ">
            <div class="card-body">
           
                <h2 class="card-title" > ${name}</h2 >
                <p> ID: ${id}</p>            
                <p> Post ID: ${postId}</p>            
                <p> Email: ${email}</p>            
                <p> Body: ${body}</p>

                <div onclick="commentBtn(${id})"  class="card-actions ">
                        <button class="btn btn-primary">Comment</button>
                    </div>
            </div>
        </div> 
        `;
        commentsContainer.appendChild(commentDiv);



    });
}


const commentBtn = (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayId(data))
}

const displayId = (id) => {
    console.log(id)

    const selectedCommentContainer = document.getElementById('selected-comment-container');

    window.scrollTo(0, 20)


    selectedCommentContainer.innerHTML = `
    <div class="card w-96  bg-base-100 shadow-xl m-10">
        <div class="card-body">
            <h2 class="card-title" > ${id.name}</h2 >
            <p> ID: ${id.id}</p>            
            <p> Post ID: ${id.postId}</p>            
            <p> Email: ${id.email}</p>                     
        </div>
    </div> 
    `;


}




loadComments()


