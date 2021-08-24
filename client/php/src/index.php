<!-- 
 * SOBRE
 *
 * ESSE SOFTWARE FOI DESENVOLVIDO UNICO E EXCLUSIVAMENTE PARA SER UTILIZADO
 * NAS DEPENDENCIAS DA UNINOVE.
 * SUA VENDA OU REPRODUÇÃO PARA TERCEIROS SEM AUTORIZAÇÃO  É PROIBIDA!
 * Contato: joaovc@uninove.br / (11)986287128
 * 
 Copyright 2021 - João Vinicius da Costa
 *
-->

<?php
    // session_start();
    // include("php/verifica_login.php");
    include('php/conexao.php');
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style2.css">
    <title>Log in | UNINOVE</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap&family=Krona+One&display=swap');
        .bg-light{
            background-color: #ffffff;
            display: block;
        }
        body{
            background-color: #e8e8e8;
        }
        label{
            font-family: 'Krona One', sans-serif;
        }
        .bg{
            background-image: linear-gradient(65deg,#3858c6,#38c3fe);
        }
    </style>
    </head>
<body>
<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 text-center mb-5">
					<h1>Registro SD</h1>
				</div>
			</div>
            <!--              -->

    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <?php
          $query = "SELECT * FROM registros";
          $resultado = mysqli_query($conexao, $query);
          $row = mysqli_num_rows($resultado);
              while($coluna = mysqli_fetch_array($resultado)){ // Enquanto houver dados ficará em loop
                  $id = $coluna['id'];
                  $resp = $coluna['responsavel'];
                  $req = $coluna['requisitante'];
                  $mat = $coluna['matricula'];
                  $email = $coluna['email'];
                  $tel = $coluna['telefone'];
                  $assunto = $coluna['assunto'];
                  $res = $coluna['resolucao'];
                  $status = $coluna['status'];
                  $data = $coluna['data_formatada'];
                  $hora = $coluna['hora_formatada'];
              
        ?>
         <div class="col-md-12 blr3">
            <div class="card mb-4 shadow-sm">
                <?php
                if($status == "Concluído"){
                  echo"<div class='card-header bg-success'>";
                }else{
                  echo"<div class='card-header bg-danger'>";
                }
                ?>
                <p class="my-0 fw-normal text-light">Registro <?php echo $id?> encontrado</p>
            </div>
            <div class="card-body">
                <h5 class="card-title pricing-card-title">
                  <small>Criado por: <?php echo"<b>".$resp."</b>"?></small>
                </h5>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="text-dark">Requisitante: <?php echo"<b>".$req."</b>"?></li>
                    <li class="text-dark">Matrícula/RA: <?php echo"<b>".$mat."</b>"?></li>
                    <li class="text-dark">E-mail: <?php echo"<b>".$email."</b>"?></li>
                    <li class="text-dark">Telefone: <?php echo"<b>".$tel."</b>"?></li>
                    <li class="text-dark">Assunto: <?php echo"<b>".$assunto."</b>"?></li>
                    <li class="text-dark">Data: <?php echo"<b>".$data.' as '.$hora."</b>"?></li>
                    <li class="text-dark h6 mt-2">Resolução</li>
                    <div class="card mt-2">
                        <li class="text-dark p-2">Registrado por: <?php echo "<b>".$resp."</b> em $data as $hora"."<br><br>".$res?></li>
                    </div>
                    <?php
                      $query2 = "SELECT *,TIME_FORMAT(hora, '%H:%i')as hora_formatada,DATE_FORMAT(data, '%d/%m/%Y') as data_formatada FROM updates WHERE n_registro = '$id'";
                      $resultado2 = mysqli_query($conexao, $query2);
                      while($coluna2 = mysqli_fetch_array($resultado2)){ // Enquanto houver dados ficará em loop
                        $respAlt = $coluna2['responsavel']; 
                        $atualizacao = $coluna2['atualizacao'];
                        $data = $coluna2['data_formatada'];
                        $hora = $coluna2['hora_formatada'];
                    ?>
                    <div class="card mt-2">
                        <li class="text-dark">Atualizado por: <?php echo "<b>".$respAlt."</b> em $data as $hora"."<br><br>".$atualizacao?></li>
                    </div>
                    <?php
                    }
                    ?>
                    <li class="text-dark">Status: <?php 
                    if($status == "Concluído"){
                      echo"<b class='text-success'>".$status."</b></p>";
                    }else{
                      echo"<b class='text-danger'>".$status."</b></p>";
                    }
                    ?>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
            <?php
                }
            ?>
            </div>
            </div>

            <!--              -->
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
                        <div class="d-md-flex">
                            <div class="col-md-6 bg p-lg-5 text-center d-flex align-items-center order-md-last">
                                <div class="container">
                                    <img width="80%" src="images/uni9.png">
                                </div>
                            </div>
                        <div class="col-md-6 bg-light p-lg-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Log In</h3>
                                </div>	
                            </div>
                            <form action="php/login.php" method="POST">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Usuário</label>
                                    <input name="usuario" type="email" class="form-control" placeholder="Usuário" required>
                                </div>
                                <label class="label" for="password">Senha</label>
                                <div id="input3" class="input-group">
                                    <input name="senha" type="password" class="form-control form-control" placeholder="Senha">
                                    <button class="btn btn-outline-secondary" type="button" data-bs-toggle="button"><i class="fas fa-eye"></i></button>
                                </div> 
                                <div class="form-group mt-3">
                                    <button type="submit" class="form-control btn btn-outline-dark px-3">Acessar</button>
                                </div>
                            </form>
                            <div class="container col-md-12">
                                <div class="row">
                                    <?php
                                        if($_SESSION['login_vazio']){
                                    ?>
                                    <div class="blr3 card bg-danger mt-3">
                                        <p class="text-center text-light">Os campos não podem ficar vazios</p>
                                    </div>
                                    <?php
                                        }
                                    unset($_SESSION['login_vazio']);
                                    ?>
                                    <?php
                                        if($_SESSION['login_invalido']){
                                    ?>
                                    <div class="blr3 card bg-danger mt-3">
                                        <p class="text-center text-light">Usuário ou senha inválida, por favor tente novamente</p>
                                    </div>
                                    <?php
                                        }
                                    unset($_SESSION['login_invalido']);
                                    ?>
                                </div>
                            </div>
                        </div>
		            </div>
				</div>
			</div>
		</div>
	</section>
    
    <script>
        var input3 = document.querySelector('#input3 input');
        var button3 = document.querySelector('#input3 button');
        button3.addEventListener('click', function () {
        input3.type = input3.type == 'text' ? 'password' : 'text';
        });
    </script>
    <script src="https://kit.fontawesome.com/5a9643203d.js" crossorigin="anonymous"></script>
</body> 
</html>
