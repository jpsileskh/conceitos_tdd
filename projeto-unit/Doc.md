
Tutorial: Testando com PHPUnit no XAMPP
Introdução:

O PHPUnit é uma ferramenta poderosa para testar seus códigos PHP, garantindo sua qualidade e confiabilidade. Neste tutorial, demonstraremos como configurar e executar testes com PHPUnit em um ambiente XAMPP.

Pré-requisitos:

Ter o XAMPP instalado e configurado.
Ter o Composer instalado globalmente.
Ter conhecimento básico de PHP e PHPUnit.
Passo a Passo:

1. Crie um Projeto Básico:

Crie um diretório para o seu projeto, por exemplo, meu-projeto-phpunit.
Dentro do diretório do projeto, crie um arquivo index.php com o seguinte conteúdo:
PHP
<?php

function soma($a, $b) {
  return $a + $b;
}

echo soma(2, 3); // Imprime 5
Use o código com cuidado.
content_copy
2. Instale o PHPUnit com Composer:

Abra o terminal e navegue até o diretório do projeto.
Execute o seguinte comando:
Bash
composer require phpunit/phpunit
Use o código com cuidado.
content_copy
3. Crie um Arquivo de Teste:

Crie um diretório chamado tests dentro do diretório do projeto.
Dentro do diretório tests, crie um arquivo SomaTest.php com o seguinte conteúdo:
PHP
<?php

use PHPUnit\Framework\TestCase;

class SomaTest extends TestCase {

  public function testSomaComSucesso() {
    $this->assertEquals(5, soma(2, 3));
  }
}
Use o código com cuidado.
content_copy
4. Configure o XAMPP para PHPUnit:

Abra o arquivo php.ini do XAMPP (geralmente em C:\xampp\php\php.ini).
Localize a linha unserialize_callback_func. Se estiver comentada, remova o comentário.
Adicione a seguinte linha após unserialize_callback_func:
unserialize_callback_func = __autoload
Salve o arquivo php.ini e reinicie o servidor XAMPP.
5. Execute os Testes:

No terminal, navegue até o diretório do projeto.
Execute o seguinte comando:
Bash
phpunit
Use o código com cuidado.
content_copy
Explicação do Código:

O arquivo index.php contém uma função simples chamada soma() que soma dois números.
O arquivo SomaTest.php contém um teste unitário que verifica se a função soma() está funcionando corretamente.
O teste utiliza a classe TestCase do PHPUnit para criar um caso de teste.
O método testSomaComSucesso() verifica se a função soma() retorna o valor esperado (5) quando os argumentos 2 e 3 são passados.
O comando phpunit executa todos os testes unitários no diretório tests.
A configuração do php.ini é necessária para evitar erros durante a execução dos testes com PHPUnit no XAMPP.
Observações:

Este é um exemplo simples de um teste unitário com PHPUnit. Você pode criar testes mais complexos para testar diferentes aspectos do seu código.
Para mais informações sobre o PHPUnit, consulte a documentação oficial: https://phpunit.de/documentation.html.
Conclusão:

Neste tutorial, você aprendeu como configurar e executar testes com PHPUnit em um ambiente XAMPP. O PHPUnit é uma ferramenta valiosa para garantir a qualidade e confiabilidade do seu código PHP.

Dicas Adicionais:

Utilize o comando phpunit --verbose para obter mais informações detalhadas sobre a execução dos testes.
Utilize o comando phpunit --filter nomeDoTeste para executar apenas um teste específico.
Utilize o comando phpunit --group nomeDoGrupo para executar todos os testes que pertencem a um grupo específico.
Crie um arquivo phpunit.xml para configurar opções personalizadas para a execução dos testes.