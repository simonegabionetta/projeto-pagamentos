FRONT


1. Criar pasta: mkdir projeto-pagamentos
2. Criar pasta: mkdir backend
3. Criar pasta + projeto com vite: npm create vite@latest frontend
obs. se instalaçao nao der certo parar e limpar cache:rm -rf node_modules package-lock.json (apaga as bibliotecas e o registro), npm cache clean --force(limpa a memória temporária do instalador)., npm install (reinstala tudo do zero e limpo).
4. Instalar a biblioteca do material UI (componentes prontos).
-------------------------------------------------------------
5. Exportar o botao e criar o componente para testar se deu certo a instalaçao no app.tsx
6. Limpeza: Apagar arquivos App.css e Index.css, pasta assets
7. Criar formulario
TELA DO CELULAR / COMPUTADOR
┌─────────────────────────────────────┐
│                                     │
│            Container                │   ← Centraliza tudo
│     ┌─────────────────────────┐     │
│     │         Card            │     │   ← Cartão branco com sombra
│     │   ┌─────────────────┐   │     │
│     │   │  CardContent    │   │     │   ← Organização interna
│     │   │                 │   │     │
│     │   │  Área de        │   │     │   ← Typography (título)
│     │   │  Pagamentos     │   │     │
│     │   │                 │   │     │
│     │   │  [ Nome ]       │   │     │   ← TextField
│     │   │                 │   │     │
│     │   │  [ Valor ]      │   │     │   ← TextField
│     │   │                 │   │     │
│     │   │ [ Confirmar ]   │   │     │   ← Button
│     │   │                 │   │     │
│     │   └─────────────────┘   │     │
│     └─────────────────────────┘     │
│                                     │
└─────────────────────────────────────┘
--------------------------------------------------------------
8. Validaçao e feedback

CAMPO NOME
1. Limpeza.trim(): remove espaços em branco inicio e fim
2. Checa tamanho(.length): conta as letras que sobraram após a limpeza
3. Veredito (nomeEhValido): Verifica se o resultado está entre 3 e 40 caracteres. Se for falso, o TextField ativa o error (borda vermelha) e mostra o helperText.

CAMPO VALOR
1. Entrada e Máscara: O usuário digita 1050. O onChange chama a função e transforma em "R$ 10,50".
2. Limpeza para o Computador (replace): Para validar, o código "suja as mãos" e retira tudo o que a máscara colocou, deixando apenas "1050".
3. Conversão (Number()): Transforma o texto "1050" no número decimal 10.50.
4. Checagem de Valor (> 0): O código pergunta: "Este número é maior que zero e menor que 1 milhão?".
5. Veredito (valorEhValido): Se as respostas forem sim, o campo está aprovado.

FOMULARIO(A União)
Depois que os dois campos passaram pelos seus testes individuais, eles chegam ao "porteiro" final.
A Operação && (E): O código executa: nomeEhValido && valorEhValido.

Ação: Se ambos forem verdadeiros, a variável formularioValido vira true.
Resultado no Botão: O atributo disabled={!formularioValido} é atualizado. O botão deixa de ser cinza e fica azul (clicável).

Revisão rápida:
Nome: Limpa espaços -> Mede tamanho -> Dá o veredito.

Valor: Aplica máscara -> Limpa símbolos -> Converte para número -> Checa se é positivo -> Dá o veredito.

Botão: Só libera se os dois vereditos forem positivos.

--------------------------------------------------------------------
BACKEND

1. Inicializar o projeto Node.js: npm init -y
2. Instalar as dependências: npm install express cors
express: É um framework para Node.js que gerencia rotas HTTP.
cors (Cross-Origin Resource Sharing): É um middleware necessário porque o seu Frontend (Vite) roda em uma porta (5173) e o Backend rodará em outra (3000). Sem o CORS, o navegador bloqueia a comunicação entre eles por segurança.
3. Criar arquivo index.js

1.  importar bibliotecas  express e cors
2.  inicializar o servidor
3.  ativar o cors e o express json
4.  cria rota get de teste
5.  define a porta que o servidor ira rodar
6.  rodar o servidor:  node index.js

-----------------------------------------------------------------------------