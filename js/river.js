
const apiURL ="./data.json";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);
        const employees = jsonObject['employees'];
        for (let i = 0; i < employees.length; i++) {

            let card = document.createElement('section');
            card.setAttribute('class', 'section');
            let h2 = document.createElement('h2');
            
            let name = document.createElement('p');
            let lastname = document.createElement('p');       
            let age = document.createElement('p');
            let position = document.createElement('p');
            let certification = document.createElement('p');
            let experience = document.createElement('p');
            let email = document.createElement('p');
            let biography = document.createElement('p');
            h2.textContent = employees[i].name + ' ' + employees[i].lastName;
            name.textContent = "Name: " + employees[i].name;
            lastname.textContent = "Lastname: " + employees[i].lastName;
            age.textContent = "Age: " + employees[i].age;
            position.textContent = "Position: " + employees[i].position;
            certification.textContent = "Certification: " + employees[i].certification;
            experience.textContent = "Experience: " + employees[i].experience;
            email.textContent = "Email: " + employees[i].email;
            biography.textContent =  employees[i].biography;
            let img = document.createElement('img');
            img.setAttribute('src', employees[i].imageurl);
            img.setAttribute('alt', employees[i].name + ' ' + employees[i].lastname + '-' + [i]);
            img.setAttribute('class', 'profile');


            card.appendChild(h2);
            card.appendChild(name);
            card.appendChild(lastname);
            card.appendChild(age);
            card.appendChild(position);
            card.appendChild(certification);
            card.appendChild(experience);
            card.appendChild(email);
 
            card.appendChild(img);
            card.appendChild(biography);
            document.querySelector('div.cards').appendChild(card);
        }
    });

