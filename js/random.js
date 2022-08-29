// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।


const RandonUsers = () => {

    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = (users) => {
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user)

        const { name } = user;
        const { title, first, last } = name;
        // console.log(title, first, last)


        const { location } = user;
        const { street, city, state, country, postcode, coordinates, timezone } = location;
        const { latitude, longitude } = coordinates
        const { number } = street;
        const { offset, description } = timezone;





        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
        userDiv.innerHTML = `

        <div class="card h-100">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title.concat(' ', first).concat(' ', last)} </h5>
                <p><span class="fw-semibold">Phone: </span>${user.phone}  </p>
                <p><span class="fw-semibold">coordinates:</span> ${latitude} , ${longitude} </p>

                <p><span class="fw-semibold">Tize-zone:</span> ${offset} ,${description}</p>

                <p><span class="fw-semibold">Street:</span> ${number} , ${street.name}</p>
                <p><span class="fw-semibold">Post-Code:</span> ${postcode}</p>
                <p><span class="fw-semibold">Adress:</span> ${city},${state},${country}</p>



            </div>
        </div>
    
        `;


        userContainer.appendChild(userDiv);



    }
}

RandonUsers();