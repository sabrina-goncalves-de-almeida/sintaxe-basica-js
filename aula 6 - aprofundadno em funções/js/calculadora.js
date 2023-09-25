function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n1 - adição (+)\n2 - subtração (-)\n3 - multiplicação (*)\n4 - divisão real (/)\n5 - divisão inteira (%)\n6 - potenciação (**)"));

    if(!operacao || operacao >= 7 || operacao <= 0){
        alert("Operção inválida");
        calculadora();
    } else {
        let n1 = Number(prompt("Insira primeiro valor"));
        let n2 = Number(prompt("Insira segundo valor"));
        let resultado;

        if(!n1 || !n2){
            alert("Valores inválidos.")
        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInt(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }
        
            function novaOperacao(){
                let opcao = prompt("Deseja realizar uma nova operação?\n1 - Sim\n2 - Não");
        
                if(opcao == 1){
                    calculadora();
                } else if(opcao == 2){
                    alert("Até mais!");
                } else {
                    alert("Digite uma opção válida");
                    novaOperacao();
                }
            }     
        }

        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInt();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

calculadora();
