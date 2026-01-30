//imports

import { useState } from 'react';
import {Button, TextField, Typography, Card, CardContent, Container, Alert} from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';


//funçao mascara do valor

const formatarMoeda = (valor: string) => {
  const apenasNumeros = valor.replace(/\D/g, ""); // Remove tudo que não é número
  const valorDecimal = Number(apenasNumeros) / 100; // Transforma em decimal (ex: 100 vira 1.00)

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valorDecimal);
};


function App(){

  //1. estados

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(''); 
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  //2. validação

  const nomeSemEspacos = nome.trim(); // o trim remove e sobra "", que tem tamanho 0.
  const nomeEhValido = nomeSemEspacos.length >= 3 && nomeSemEspacos.length <= 40; //entre 3 e 40 letras

  const valorLimpo = valor.replace(/\D/g, ""); 
  const valorNumerico = Number(valorLimpo) / 100;  
  const valorEhValido = valor !== '' && valorNumerico > 0 && valorNumerico < 1000000;

  const formularioValido = nomeEhValido && valorEhValido;

  

  //3.ação

  const confirmarPagamento = () => {
  if (formularioValido) {
    setCarregando(true); // Ativa o círculo de carregando no botão

    // Simula uma espera de 2 segundos (como se fosse o banco respondendo)
    setTimeout(() => {
      setCarregando(false);
      setSucesso(true);
      
      setNome('');  // Volta o estado do nome para vazio
      setValor(''); // Volta o estado do valor para vazio
      
      
    }, 2000);
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
          {/* Coloque isso logo abaixo do Typography do título */}
          {sucesso && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Pagamento realizado com sucesso!
            </Alert>
          )}

          {/* Campo do Nome */}          
          <TextField 
            label="Nome do Recebedor"             
            variant="outlined" 
            fullWidth 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            // 'error' vermelho se o usuário já começou a digitar algo inválido.
            error={nome.length > 0 && !nomeEhValido}
            //  feedback para usuario do erro
            helperText={
              nome.length > 0 && nome.length < 3 
                ? "O nome deve ter no mínimo 3 caracteres"
                : nome.length > 40 ? "Máximo de 40 caracteres atingido" : ""
            }
  
          />

          {/* Campo do Valor */}
          <TextField 
            label="Valor do Pagamento" 
            variant="outlined" 
            type="text"
            fullWidth 
            value={valor}
            onChange={(e) => setValor(formatarMoeda(e.target.value))}
            error={valor !== '' && !valorEhValido}
            helperText={
              valor !== '' && valorNumerico <= 0
                ? "O valor deve ser maior que zero"
                : valorNumerico >= 1000000 ? "Valor muito alto" : ""
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
            disabled={!formularioValido || carregando} // Desativa também se estiver carregando
            >
            {carregando ? "Processando..." : "Confirmar Pagamento"}         
          </Button>

        </CardContent>
      </Card>
    </Container>
  );
}

export default App;