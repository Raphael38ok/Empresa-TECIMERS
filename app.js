//console.log(funcionario);



// Obtém o elemento com o ID "resultados-pesquisa" e atribui a variável section
section = document.getElementById("resultados-pesquisa");

// Imprime o valor de section no console (opcional, para depuração)
console.log(section);

// Adiciona o conteúdo HTML dentro do elemento section
section.innerHTML = `
 <div class="item-resultado">
    <h2>
        <a href="#" target="_blank">Raphael-Front-End</a>
    </h2>
    <p class="descricao-meta">
        descricao : "Raphael é um Desenvolvedor Front-end que transformou sua paixão por design de gelados em interfaces digitais elegantes e intuitivas. De gelados gourmet a interfaces digitais, Raphael utiliza sua criatividade e conhecimento técnico para criar experiências online memoráveis.",
    </p>
    <a href="https://pt.wikipedia.org/wiki/Front-end_e_back-end">Mais Informações</a>
</div>
`

