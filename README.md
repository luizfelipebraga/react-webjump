# Projeto WebJump.

Entre nas pastas backend e frontend e instale os pacotes com:

| | -> significa ' ou '
```
cd backend

yarn install || npm install

cd ..

cd frontend 

yarn install || npm install
```

Abra um terminal para iniciar o backend:
```
cd backend

npm start || yarn start
```

Abra outro terminal para iniciar o frontend:
```
cd frontend

npm start || yarn start
```

Depois disso, o Frontend deverá rodar no seguinte endereço:
```
Local:  http://localhost:3000
```


## Obs: Rodar o Backend 
 - Para uma melhor experiência inicialize o backend, pois parte da navbar e os cards foram feitos pelo backend, exceto a ixibição das imagens.


 ## Tecnologias/Pacotes e Boas Práticas:

[x] React

[x] Typescript

[x] react-router-dom

[x] axios

[x] styled-components

[x] react-icons

[x] Arquivo Env.ts para esconder o endereço, porém não coloquei no .gitignore


## Requesitos

[x] Design responsivo nos breakpoints 320px, 768px, 1024px e 1440px

[x] Suporte para IE, Chrome, Safari, Firefox

[x] Semântica

[] Fazer os filtros da sidebar funcionarem através de Javascript

[x] Estrutura e organização do código e dos arquivos

[x] Soluções adotadas

[x] Tecnologias utilizadas

[x] Qualidade

[x] Fidelidade ao Layout

## Adendos

 - Não consegui fazer o fetch de images do backend para exibir no Frontend, devido algo que deva estar faltando. Portanto, coloquei uma foto randômica. Também, não consegui fazer o filtro por meio do Filtro da Nav. Contudo, os demais requisitos está funcionando perfeitamente. Tentei tirar a responsabilidade o máximo possível das páginas e foquei e um único componente para fazer as requisições, além de ter boas práticas como por exemplo: Componentização e Env.
