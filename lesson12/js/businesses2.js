window.addEventListener('load', () => {
    fetch("json/directory.json")
        .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business'];
        console.table(jsonObject); 
            for (let i = 0; i < business.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');
    
        h2.textContent = business[i].name;
        p1.textContent = 'Contact: ' + business[i].contact;
        p2.textContent = 'Website: ' + business[i].website;

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
    
        document.querySelector('div.cards2').appendChild(card);
        }
    });
});
