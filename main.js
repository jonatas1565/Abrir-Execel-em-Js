var input = document.getElementById('input');
let table = document.getElementById('headT'),
    body = document.getElementById('bodyT');
    Mnota = document.getElementById('maxmin')
    dbarras = document.getElementById('div-barras')
    dpizza= document.getElementById('div-pizza')
    dtabela= document.getElementById('div-table')
    
    
// função que lê o xlsx, cria tabelas e graficos.
input.addEventListener('change', function(){
    readXlsxFile(input.files[0]).then(function(data){
      inserindotable(data);
      inserindoBodyT(data);
        inserindoGbarras(data);
        inserindoGpizzas(data);
        menorNota(data);
        menorNota2(data);
        
       })
    });

// inserindo cabeçalho da tabela
    function inserindotable(data){ 
        let table = [],
        cTable = [];

    for (let i = 0; i < data[0].length; i++) {
        table.push(
            `<th>${data[0][i]}</th>`);
    }
    for (let i = 0; i < table.length; i++) {
        cTable.push(`${table[i]}`);
    }
    headT.innerHTML = cTable.join('');
    dtabela.style.display = 'block';
}

// inserindo o corpo da tabela
function inserindoBodyT(data) {
    for (let i = 1; i < data.length; i++) {
        body.innerHTML += `
        <td>  ${data[i][0]} </td>
        <td> ${data[i][1]} </td>
        <td>  ${data[i][2]} </td>`;
        
    }
}

// gráfico de barras
function inserindoGbarras(data){
    let labels = [],
    nota = [];
    nota2 = [];
    for (let i = 1; i < data.length; i++){
        labels.push(data[i][0]);
        nota.push(data[i][1]);
        nota2.push(data[i][2]);
        dbarras.style.display = 'block';
    }
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'nota 1',
            data: nota,
            backgroundColor: [
                'rgba(23, 245, 249, 0.2)',
                'rgba(62, 54, 106, 0.2)',
                'rgba(153, 253, 244, 0.2)',
                'rgba(126, 83, 255, 0.2)',
                'rgba(1, 150, 193, 0.2)',
                'rgba(179, 224, 238, 0.2)'
            ],
            borderColor: [
                'rgba(23, 245, 249, 1)',
                'rgba(62, 54, 106, 1)',
                'rgba(153, 253, 244, 1)',
                'rgba(126, 83, 255, 1)',
                'rgba(1, 150, 193, 1',
                'rgba(179, 224, 238, 1)'
            ],
            borderWidth: 1
        },{
            label: 'nota 2',
            data: nota2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        
        ]},
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}

// gráfico de pizza
function inserindoGpizzas(data){
    let labels = [],
    nota = [];
    nota2 = [];
    for (let i = 1; i < data.length; i++){
        if (data[i][1]) {
        labels.push(data[i][0]);
        nota.push(data[i][1]);
        nota2.push(data[i][2]);
        dpizza.style.display = 'block';
    }
    }
const ctx = document.getElementById('gPizzas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'nota 1',
            data: nota,
            backgroundColor: [
                'rgba(23, 245, 249, 0.2)',
                'rgba(62, 54, 106, 0.2)',
                'rgba(153, 253, 244, 0.2)',
                'rgba(126, 83, 255, 0.2)',
                'rgba(1, 150, 193, 0.2)',
                'rgba(179, 224, 238, 0.2)'
            ],
            borderColor: [
                'rgba(23, 245, 249, 1)',
                'rgba(62, 54, 106, 1)',
                'rgba(153, 253, 244, 1)',
                'rgba(126, 83, 255, 1)',
                'rgba(1, 150, 193, 1',
                'rgba(179, 224, 238, 1)'
            ],
            borderWidth: 1
        },{
            label: 'nota 2',
            data: nota2,
            backgroundColor: [
                'rgba(23, 245, 249, 0.4)',
                'rgba(62, 54, 106, 0.4)',
                'rgba(153, 253, 244, 0.4)',
                'rgba(126, 83, 255, 0.4)',
                'rgba(1, 150, 193, 0.4)',
                'rgba(179, 224, 238, 0.4)'
            ],
            borderColor: [
                'rgba(23, 245, 249, 1)',
                'rgba(62, 54, 106, 1)',
                'rgba(153, 253, 244, 1)',
                'rgba(126, 83, 255, 1)',
                'rgba(1, 150, 193, 1',
                'rgba(179, 224, 238, 1)'
            ],
            borderWidth: 1
        },
        
        ]},
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}

function menorNota(data){
    var arr = []
    for (let i = 1; i < data.length; i++){
        arr.push(data [i][1])
    }
    
    let min =Math.min(...arr);
    let max = Math.max(...arr);
    let notamax = document.querySelector('#maxnota')
    let notamin = document.querySelector('#minnota')
    Mnota.style.display = 'block';
    notamax.innerHTML = min;
    notamin.innerHTML= max;
    
}

function menorNota2(data){
    var arr = []
    for (let i = 1; i < data.length; i++){
        arr.push(data [i][2])
    }
    
    let min =Math.min(...arr);
    let max = Math.max(...arr);
    let notamax2 = document.querySelector('#maxnota2')
    let notamin2 = document.querySelector('#minnota2')
    notamax2.innerHTML = min;
    notamin2.innerHTML= max;
}

