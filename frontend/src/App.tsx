import { useState } from 'react';
import {Button, TextField, Typography, Card, CardContent, Container} from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';

function App(){
  //1. estados
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(''); 

  //2. validação 
  const nomeSemEspacos = nome.trim(); // o trim remove e sobra "", que tem tamanho 0.
  const nomeEhValido = nomeSemEspacos.length >= 3 && nomeSemEspacos.length <= 40; //entre 3 e 40 letras

  const valorNumerico = Number(valor);//Number() converte para número
  const valorEhValido = valor !== '' && valorNumerico > 0 && valorNumerico < 1000000; // Limite de 1 milhão por segurança

  const formularioValido = nomeEhValido && valorEhValido;

  //3.ação
  const confirmarPagamento = () => {
    
    if (formularioValido) {
      alert(`Enviando R$ ${valor} para ${nome}`);
    }
  };
  
  //interface
  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Card elevation={3}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: 4 }}>
          
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            Área de Pagamentos
          </Typography>

          {/* Campo do Nome */}
          <TextField 
            label="Nome do Recebedor" 
            variant="outlined" 
            fullWidth 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            // O Porquê: 'error' fica vermelho se o usuário já começou a digitar algo inválido.
            error={nome.length > 0 && !nomeEhValido}
            // O Porquê: O helperText explica para o usuário O QUE ele errou.
            helperText={
              nome.length > 0 && nome.length < 3 
                ? "O nome deve ter no mínimo 3 caracteres"
                : nome.length > 40 ? "Máximo de 40 caracteres atingido" : ""
            }
            inputProps={{ maxLength: 40 }} 
          />

          {/* Campo do Valor */}
          <TextField 
            label="Valor (R$)" 
            variant="outlined" 
            type="number"
            fullWidth 
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            // O Porquê: Se o campo não está vazio mas o valor é inválido, acende o erro.
            error={valor !== '' && !valorEhValido}
            helperText={
              valor !== '' && valorNumerico <= 0
                ? "O valor deve ser maior que zero"
                : valorNumerico >= 1000000 ? "Valor muito alto para esta operação" : ""
            }
          />

          {/* Botão de Enviar */}
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            startIcon={<PaymentsIcon />}
            fullWidth
            onClick={confirmarPagamento}
            // O Porquê: 'disabled' espera um "sim ou não" para travar o botão.
            // Usamos '!' (não) porque queremos desativar se o formulário NÃO for válido.
            disabled={!formularioValido}
          >
            Confirmar Pagamento
          </Button>

        </CardContent>
      </Card>
    </Container>
  );
}

export default App;