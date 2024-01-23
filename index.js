const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pede ao usuário para inserir o nome
rl.question("Por favor, insira seu nome: ", function(nome) {
  // Pede ao usuário para inserir a idade
  rl.question("Agora, insira sua experiência: ", function(exp) {
    // Fecha a interface de leitura
    rl.close();

    // Verifica se o usuário inseriu um nome e uma idade válida
    if (nome.trim() !== "" && !isNaN(exp) && exp > 0 && exp < 1000)  
        {
        // Exibe uma mensagem de saudação com o nome e a idade
        console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Ferro.`);
        } 
    
    else if (nome.trim() !== "" && !isNaN(exp) && exp > 1000 && exp <= 2000) 
        {
            // Exibe uma mensagem se o nome ou a idade não forem válidos
            console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Bronze.`);
        }

    else if (nome.trim() !== "" && !isNaN(exp) && exp > 2000 && exp <= 5000) 
        {
            // Exibe uma mensagem se o nome ou a idade não forem válidos
            console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Prata Ouro.`);
        }    
    
    else if (nome.trim() !== "" && !isNaN(exp) && exp > 5000 && exp <= 8000) 
        {
            // Exibe uma mensagem se o nome ou a idade não forem válidos
            console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Platina Diamante.`);
        }    
    else if (nome.trim() !== "" && !isNaN(exp) && exp > 8000 && exp <= 9000) 
        {
            // Exibe uma mensagem se o nome ou a idade não forem válidos
            console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Ascendente.`);
        }    
    else if (nome.trim() !== "" && !isNaN(exp) && exp > 9000 && exp <= 10000) 
        {
            // Exibe uma mensagem se o nome ou a idade não forem válidos
            console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Imortal.`);
        }       
    else if (nome.trim() !== "" && !isNaN(exp) && exp > 10000) 
        {
            // Exibe uma mensagem se o nome ou a idade não forem válidos
            console.log(`O Herói de nome, ${nome.trim()}! Está no nível ${exp} de experiência e te faz um nível: Radiante.`);
        }  
    else {
      // Exibe uma mensagem se o nome ou a idade não forem válidos
      console.log("Por favor, insira um nome válido e uma exp válida. Tente novamente.");
    }
  });
});



