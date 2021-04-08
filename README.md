# Projeto

Aplicação em ReactJS que possui uma lista com vários dados contendo séries de TV, obtidos pela [API do TV Maze](http://www.tvmaze.com/api).

A lista funciona como um drag and drop, permitindo arrastar e mudar qualquer item de posição. Para isso usa a biblioteca [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd).

A estilização da aplicação é feita utilizando o [TailwindCSS](https://tailwindcss.com).

Utiliza um React Hook customizado para lidar com a requisição assíncrona que é feita a API e com a atualização do estado da aplicação.

O deploy da aplicação foi realizado na Vercel e pode ser acessado em:

[https://react-list-performance.vercel.app](https://react-list-performance.vercel.app)

## Funcionalidades

Além de exibir a lista de séries obtidas a partir da API, é possível acessar a URL da série no site do TV Maze e marcar as séries favoritas.

Para salvar as séries favoritas do usuário, é utilizado o `local storage` do navegador. Com isso, os favoritos ficam salvos por tempo indeterminado, até que o usuário limpe o `local storage` do navegador.

## Performance

A lista é composta por mais de 2.000 items e a renderização da mesma sem algum tipo de otimização degrada a performance da aplicação.

Foram aplicadas algumas técnicas para melhorar a performance:

- Uso do [react-window](https://github.com/bvaughn/react-window)
  * Renderiza apenas a parte dos dados que está aparecendo para o usuário
- Uso de memoization com `React memo`
- Uso do React Hook `useCallback`

Com a aplicação dessas técnicas, a aplicação consegue ter um funcionamento agradável sem atrapalhar a experiência do usuário.

## Instalação

Para testar o projeto localmente, deve-se baixar o repositório e instalar as dependências necessárias para o mesmo funcionar:

```
git clone https://github.com/pedrovicentesantos/react-list-performance
cd react-list-performance
npm install
```

Feito isto basta iniciar a aplicação rodando:

```
npm start
```

A aplicação estará disponível em [localhost:3000](http://localhost:3000).