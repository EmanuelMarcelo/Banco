/* 
arquivos a serem instalados
    npm init -y
    npm install playright
    npm install cucumber
    npm install expect
    npm install chai
    
    códigos não utilizados e salvos aqui.

Gerador de codigo
    npx playwright codegen

Abre a pagina e mostra o processo
     {headless:false, slowMo: 50} tem que estar dentro de chromium.launch()

Atribui tempo de espera para carregamento da pagina
     await page.waitForTimeout(2000)

Imprime o resultado no console
     console.log('contem: '+ contem)

Tira print da pagina
     await page.screenshot({path:'tudo.png'})

     { storageSate: 'state.json' }

Abre um atalho para codificar os testes
     npx playwright codegen + site

*/
const { Given, Then, When, BeforeAll, AfterAll } = require('cucumber');
const {  expect } = require('expect');
const { chromium } = require('playwright');

let browser, context, page;

(async() => {
    browser = await chromium.launch({headless:false, slowMo: 50})
    context = await browser.newContext()
    page = await context.newPage()


//abrindo a pagina
    await page.goto('https://rhuantac.github.io/vaga-qa/')

// clicando em Entendi
    await page.getByRole('button', { name: 'Entendi' }).click();

// teste da conta do joão silva
    await page.getByText('João SilvaConta: 1234-5 R$').click();

//teste simples de deposito
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();

// teste de saque a cima do valor em conta
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('1200');
    await page.getByRole('button', { name: 'Sacar' }).click();

// teste transferencia para usuarios nao cadastrado
    await page.getByRole('textbox', { name: 'Destinatário' }).click();
    await page.getByRole('textbox', { name: 'Destinatário' }).fill('@qw');
    await page.getByPlaceholder('Valor').nth(2).click();
    await page.getByPlaceholder('Valor').nth(2).fill('100');
    await page.getByRole('button', { name: 'Transferir' }).click();

//saque de saldo negativo
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('-200');
    await page.getByRole('button', { name: 'Sacar' }).click();

// deposito de valor negativo
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('-100');
    await page.getByRole('button', { name: 'Depositar' }).click();

// tranferencia sem destinatario
    await page.getByPlaceholder('Valor').nth(2).click();
    await page.getByPlaceholder('Valor').nth(2).fill('300');
    await page.getByRole('button', { name: 'Transferir' }).click();

//zerando saldo da conta
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();

// depositos consecutivos
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();
    await page.getByPlaceholder('Valor').first().click();
    await page.getByPlaceholder('Valor').first().fill('100');
    await page.getByRole('button', { name: 'Depositar' }).click();

//saque consecutivos
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();
    await page.getByPlaceholder('Valor').nth(1).click();
    await page.getByPlaceholder('Valor').nth(1).fill('100');
    await page.getByRole('button', { name: 'Sacar' }).click();

// saindo da conta
    await page.getByRole('button', { name: 'Sair da conta' }).click();
    
//fechando o browser
    await browser.close()


}) ()