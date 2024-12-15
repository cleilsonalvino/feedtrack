fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(user => {
    // Extrair informações específicas
    const { name, email, phone } = user;
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${phone}`);
  })
  .catch(error => console.error('Erro na requisição:', error));
