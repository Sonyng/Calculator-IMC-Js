var body = document.querySelector("body")
var div = document.createElement("div")
div.classList = "Div-CALCULATOR-IMC"
body.appendChild(div)


//divs Input
var divInputs = document.createElement("div") //inputs
var divInputName = document.createElement("div") //input Name
var divInputValores = document.createElement("div") //input Valores
var divButtonCalcular = document.createElement("div") //Button Calcular

//Div Results
var divResults = document.createElement("div") //resultados
var divColorIMC = document.createElement("div")
var divName = document.createElement("div")
var divIdade = document.createElement("div")

div.appendChild(divInputs)
div.appendChild(divResults)

divInputs.appendChild(divInputName)
divInputs.appendChild(divInputValores)
divInputs.appendChild(divButtonCalcular)

divResults.appendChild(divColorIMC)
divResults.appendChild(divName)
divResults.appendChild(divIdade)



//elements Input


//input name
var InputName = document.createElement("input")
InputName.setAttribute("type", "text")
InputName.setAttribute("maxlength", "30")
InputName.setAttribute("placeholder", "Nome")
divInputName.appendChild(InputName)


//input idade
var InputIdade = document.createElement("input")
InputIdade.setAttribute("type","number")
InputIdade.setAttribute("oninput", "validity.valid||(value='');")
InputIdade.setAttribute("placeholder", "idade")
divInputValores.appendChild(InputIdade)

//input peso
var InputPeso = document.createElement("input")
InputPeso.setAttribute("type", "number")
InputPeso.setAttribute("placeholder", "Peso (Kg)")
divInputValores.appendChild(InputPeso)

//input altura 
var InputAltura = document.createElement("input")
InputAltura.setAttribute("type", "number")
InputAltura.setAttribute("step", ".01")
InputAltura.setAttribute("placeholder", "Altura (Cm)")
divInputValores.appendChild(InputAltura)


//button Calcular
var ButtonCalculo = document.createElement("button")
var textButtonCalculo = document.createTextNode("Calcular IMC")
ButtonCalculo.setAttribute("onclick", "Calcular()")
ButtonCalculo.appendChild(textButtonCalculo)
divButtonCalcular.appendChild(ButtonCalculo)


//Color IMC
var ColorIMC = document.createElement("div")
divColorIMC.appendChild(ColorIMC)

var ResIMC = document.createElement("a")
ResIMC.setAttribute("id", "ResIMC")
ColorIMC.appendChild(ResIMC)

var SituacaoIMC = document.createElement("p")
SituacaoIMC.setAttribute("id", "SituacaoIMC")
divColorIMC.appendChild(SituacaoIMC)


//OUTPUT NAME
let PutName = document.createElement("p")
let TextPutName = document.createTextNode("Nome: ")
PutName.appendChild(TextPutName)
divName.appendChild(PutName)


 var OutputName = document.createElement("Output")
 OutputName.setAttribute("id", "OutputName")
 divName.appendChild(OutputName)





//OUTPUT IDADE
var OutputIdade = document.createElement("a")
OutputIdade.setAttribute("id","OutputIdade")
OutputIdade.setAttribute("value", "idade")
divIdade.appendChild(OutputIdade)

let PutIdade = document.createElement("p")
let TextPutIdade = document.createTextNode("Idade:  ")
PutIdade.appendChild(TextPutIdade)
divIdade.appendChild(PutIdade)




//CSS
{

    body.style.background = "linear-gradient(to right, #233329, #41b883)"
    body.style.padding = "0"
    body.style.display = "flex"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"
}


{
    div.style.display = "flex"
    div.style.justifyContent = "center"
    div.style.width = "600px"
    div.style.height = "600px"
    div.style.flexWrap = "wrap"
}

{
    divInputs.style.display = "flex"
    divInputs.style.backgroundColor = "blue"
    divInputs.style.width = "400px"
    divInputs.style.height = "300px"
    divInputs.style.borderRadius = "20px"
    divInputs.style.flexWrap = "wrap"
}


{
    divInputName.style.display = "flex"
    divInputName.style.position = "relative"
    divInputName.style.width = "400px"
    divInputName.style.height = "100px"
    divInputName.style.justifyContent = "center"
    divInputName.style.alignItems = "center"
    

}

{
    InputName.style.height = "30px"
    InputName.style.width = "300px"
}

{
    divInputValores.style.display = "flex"
    divInputValores.style.position = "relative"
    divInputValores.style.width = "500px"
    divInputValores.style.height = "100px"
    divInputValores.style.justifyContent = "Space-around"
    divInputValores.style.alignItems = "center"
}

{
    InputIdade.style.width = "90px"
    InputIdade.style.height = "30px"
    InputIdade.style.borderStyle = "solid"
}

{
    InputAltura.style.width = "90px"
    InputAltura.style.height = "30px"

}

{
    InputPeso.style.width = "90px"
    InputPeso.style.height = "30px"

}

{
    divButtonCalcular.style.display = "flex"
    divButtonCalcular.style.position = "relative"
    divButtonCalcular.style.justifyContent = "center"
    divButtonCalcular.style.alignItems = "center"
    divButtonCalcular.style.backgroundColor = "#800dc0"
    divButtonCalcular.style.width = "500px"
    divButtonCalcular.style.height = "50px"
}

{
    ButtonCalculo.style.height = "40px"
    ButtonCalculo.style.width = "100px"
    ButtonCalculo.style.borderRadius = "10px"
    ButtonCalculo.style.borderStyle = "ridge"
    ButtonCalculo.style.cursor = "pointer"
    ButtonCalculo.style.backgroundColor = "#0077FF"
    ButtonCalculo.style.border = "1px solid #ccc"
}

{
    divResults.style.display = "flex"
    divResults.style.position = "relative"
    divResults.style.alignItems = "center"
    divResults.style.justifyContent = "space-around"
    divResults.style.padding = "4px"
    divResults.style.width = "600px"
    divResults.style.height = "100px"
}

{
    divColorIMC.style.display = "flex"
    divColorIMC.style.width = "120px"
    divColorIMC.style.height = "100px"
    divColorIMC.style.alignItems = "center"
    divColorIMC.style.justifyContent = "center"
    divColorIMC.style.flexWrap = "wrap"
    divColorIMC.style.fontSize = "20px"
}
{
    ColorIMC.style.display = "flex"
    ColorIMC.style.width = "60px"
    ColorIMC.style.height = "60px"
    ColorIMC.style.borderRadius = "50%"
    ColorIMC.style.alignItems = "center"
    ColorIMC.style.justifyContent = "center"
    ColorIMC.style.fontFamily = "Courier"
}

{
    divName.style.display = "flex"
    divName.style.width = "300px"
    divName.style.height = "40px"
    divName.style.backgroundColor = "white"
    divName.style.color = "black"
    divName.style.textAlign = "center"
    divName.style.justifyContent = "center"
    divName.style.alignItems = "center"
    divName.style.borderStyle = "double "
    divName.style.borderColor = "red"

}
{
    OutputName.style.display = "flex"
    OutputName.style.textAlign = "center"
    OutputName.style.width = "300px"
    OutputName.style.height = "30px"
    OutputName.style.alignItems = "center"
    OutputName.style.justifyContent = "center"
    OutputName.style.fontFamily = "Arial"
}
{
    PutName.style.fontFamily = "hervetica"
}

{
    divIdade.style.display = "flex"
    divIdade.style.justifyContent = "start"
    divIdade.style.width = "90px"
    divIdade.style.height = "40px"
    divIdade.style.alignItems = "center"
    divIdade.style.flexDirection = "row-reverse"
}
{

}




//functions

function Calcular(){
    

    //output value
    var resultIMC = InputPeso.value / (InputAltura.value * (InputAltura.value))
    var resultadoIMC = resultIMC.toFixed(2)
    document.getElementById("ResIMC").textContent = (resultadoIMC)


    //output name
    document.getElementById("OutputName").textContent = ( InputName.value)


    //output idade
    document.getElementById("OutputIdade").textContent = (InputIdade.value )

    
    //Colors

    if (resultadoIMC < 18.5) {
        ColorIMC.style.backgroundColor = '#87CEEB';
        SituacaoIMC.textContent = 'Baixo peso';
      } 
     else if(resultadoIMC < 25){
        ColorIMC.style.backgroundColor = 'green';
        SituacaoIMC.textContent = 'Normal';

    }
    else if(resultadoIMC < 30){
        ColorIMC.style.backgroundColor = '#FFFF00';
        SituacaoIMC.textContent = 'Excesso de peso';

    }
    else if(resultadoIMC < 35){
        ColorIMC.style.backgroundColor = '#FF4500';
        SituacaoIMC.textContent = 'Obesidade 1';

    }
    else if(resultadoIMC < 40){
        ColorIMC.style.backgroundColor = 'orange';
        SituacaoIMC.textContent = 'Obesidade 2';

    }
    else if(resultadoIMC >= 40){
        ColorIMC.style.backgroundColor = 'red';
        SituacaoIMC.textContent = 'Obesidade 3';
    }
    else{
        ColorIMC.style.backgroundColor = 'white';
        SituacaoIMC.textContent = ''
        document.getElementById("ResIMC").textContent = "0"
    }

      }

    
      
      
    
     
    
 