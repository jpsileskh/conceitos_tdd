<?php
  use PHPUnit\Framework\TestCase;

  class SomaTest extends TestCase {

    public function testSomaComSucesso() {
      $this->assertEquals(5, soma(2, 3));
    }
  }
?>