const inputUserElement = document.querySelector('#user');
const buttonUserElement = document.querySelector('#search-repos');
const listReposElement = document.querySelector('#repos ul');

function searchRepos(){
    const username = inputUserElement.value;
    const url = 'https://api.github.com/users/'+username+'/repos';
    listReposElement.innerHTML = '';
    inputUserElement.value = '';
    listReposElement.appendChild(document.createElement('li').appendChild(document.createTextNode('Wait...')));
    axios.get(url)
    .then(function (response){
        listReposElement.innerHTML = '';
        const repos = response.data;
        for(repo of repos){
            const textElement = document.createTextNode(repo.name);
            const itemElement = document.createElement('li');
            itemElement.appendChild(textElement);
            listReposElement.appendChild(itemElement);
        }
    })
    .catch(function (error){
        listReposElement.innerHTML = '';
        listReposElement.appendChild(document.createElement('li').appendChild(document.createTextNode('User not found.')));
    });
}





/*
axios.get('http://api.github.com/users/diego3g')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});


function checaIdade(idade){
    return new Promise(function(resolve, reject){
        if(idade > 18){
            resolve('Maior que 18.');
        }else{
            reject('Menor que 18.');
        }
    });
}

checaIdade(18)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});
*/