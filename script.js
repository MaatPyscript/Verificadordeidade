function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formularioano = document.getElementById('txtano');
    var resp = document.querySelector('div#resp');
  
    if (formularioano.value.length == 0 || Number(formularioano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
      var fsex = document.getElementsByName('radsex');
      var idade = ano - Number(formularioano.value);
      var genero = '';
      var img = document.createElement('img');
      img.setAttribute('id', 'foto');
  
      if (fsex[0].checked) {
        genero = 'Homem';
        console.log(idade)
        if (idade >= 0 && idade < 12) {
          //Bebê
          img.setAttribute('src', './fotomeninobebe.png');
        } else if (idade >= 12 && idade < 17) {
          //Criança
          img.setAttribute('src', './fotomenino.png');
        } else if (idade >= 17 && idade < 18) {
          //Adolescente
          img.setAttribute('src', './fotohadolescente.png');
        } else if (idade >= 19 && idade <= 49) {
          //Adulto
          img.setAttribute('src', './fotohomemadulto.png');
        } else if (idade >= 50 && idade <= 90) {
          //Idoso
          img.setAttribute('src', './fotoidoso.png');
        } else if (idade > 91) {
          //Morto
          img.setAttribute('src', './fotocaixao.png')
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher';
  
        if (idade >= 0 && idade < 12) {
          //Bebê
          img.setAttribute('src', './fotomeninabebe.png');
        } else if (idade >= 12 && idade < 17) {
          //Criança
          img.setAttribute('src', './fotomenina.png');
        } else if (idade >= 17 && idade < 18) {
          //Adolescente
          img.setAttribute('src', './fotomeninaadolescente.png');
        } else if (idade >= 19 && idade <= 49) {
          //Adulto
          img.setAttribute('src', './fotomulheradulta.png');
        } else if (idade >= 50 && idade <= 90) {
          //Idoso
          img.setAttribute('src', './fotoidosa.png');
        } else if (idade > 91) {
          //Morto
          img.setAttribute('src', './fotocaixao.png')
        }
      }
  
      resp.style.textAlign = 'center';
      resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      resp.appendChild(img);
    }
  }