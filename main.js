var input = document.getElementById('input');

input.addEventListener('change', function(){
    readXlsxFile(input.files[0]).then(function(data){
        var i = 0;
       data.map((row, index)=>{
        if(i==0){
            let table = document.getElementById('tbl-data');
            generateTableHead(table, row);
        }

        if(i>0){
            let table = document.getElementById('tbl-data');
            generateTableRows(table, row);
        }


        
       })
    });
});

