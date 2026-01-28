1. Criar pasta: mkdir projeto-pagamentos
2. Criar pasta: mkdir backend
3. Criar pasta + projeto com vite: npm create vite@latest frontend
obs. se instalaçao nao der certo parar e limpar cache:rm -rf node_modules package-lock.json (apaga as bibliotecas e o registro), npm cache clean --force(limpa a memória temporária do instalador)., npm install (reinstala tudo do zero e limpo).
4. Instalar a biblioteca do material UI (componentes prontos).
-------------------------------------------------------------
5. Exportar o botao e criar o componente para testar se deu certo a instalaçao no app.tsx
6. Limpeza: Apagar arquivos App.css e Index.css, pasta assets
7. Criar formulario
8. Validaçao e feedback
O Fluxo Ideal de Produção (A Ordem Certa)
Desenho (A Tela): Você cria o TextField e o Button apenas visualmente (sem lógica).

Estado (useState): Você faz o campo "escrever" (conecta o value e o onChange).

Validação de Campo (Feedback): Você adiciona o error e o helperText para aquele campo específico.

Validação de Grupo (O Botão): Você cria a variável formularioValido que une todos os campos.
--------------------------------------------------------------------
9.  Mascara da Moeda