




// Promises, async/await, destructuring.


//callback
/**
 * 
 Uma função callback é uma função passada como argumento para outra função, 
 que será executada em um momento posterior, geralmente quando uma tarefa é concluída ou um evento ocorre.
 */

 function loginUser(email, password, onSuccess, onError) {
    setTimeout(() => {
        if (email === "emailllll" && password === "12345") {
            console.log("User logged!");
            onSuccess({ email });
        } else {
            onError("Invalid email or password");
        }
    }, 1500);
}

loginUser(
    "emailllll",
    "12345",
    (user) => {  
        console.log("Success:", user);
    },
    (error) => {
        console.log({ error });
    }
);


//Promise
/**
 * 
 Uma Promise em JavaScript é um objeto usado para lidar com operações assíncronas. 
 Ela representa um valor que pode estar disponível agora, no futuro, ou nunca.

 */

const loginUserPromise = (email, password) => {
    
    return new Promise((resolve, reject) => {
        const error = false

        if(error){
            return onError(new Error('error in login!'))
        }

        console.log('user logged!');
        resolve ({ email });
    })
}


loginUserPromise("emaill", '123456')
    .then((user) => {
    console.log({user})
    }).catch((error) => {
        console.log({error})
    })



/*

Async/Await

async: Indica que a função irá retornar uma Promise.
await: Espera a Promise ser resolvida antes de continuar a execução do código.
try/catch: Trata a execução assíncrona, onde você pode pegar tanto o sucesso quanto o erro.
*/

//usando o promise de cima

const displayUser = async () => {
    try {
        const user = await loginUserPromise("email2", "user");
        console.log("feito")
    } catch (error) {
        console.log(error)
        
    }
}

displayUser()







/// Teste consumindo api


axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log({data: response.data});
}).catch((error) => {
    console.log({error});
});

const fetchApi = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    console.log({data});
    } catch (error) {
        console.log({error});
    }
}

fetchApi();