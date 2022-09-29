const populateTable = (data) => {
    //console.log('in populateTable',data)
    document.querySelector('table').textContent = "";
    const myTable = document.querySelector('table')

                                            var theadEle = document.createElement('thead') 
                                            const col_names = ['SNo','First Name','Last Name','Gender','Comapany','Country']
                                            for(var i=0;i<col_names.length;i++){
                                                const thEle = document.createElement('th')
                                                thEle.textContent = col_names[i]
                                                
                                                theadEle.appendChild(thEle)
                                            }
                                            myTable.appendChild(theadEle)
                                            const tBody = document.createElement('tbody');
                                            for(var j=0;j<data.length   ;j++){
                                                const trElem = document.createElement('tr');
                                                var actual_data = data[j]
                                               // console.log('data,actual_data',data,actual_data)
                                                var {_id,id,FirstName,LastName,gender,company,country} = actual_data
                                                actual_data = [id,FirstName,LastName,gender,company,country]
                                                for(var k=0;k<6;k++){
                                                    const tdEle = document.createElement('td')
                                                    tdEle.textContent = actual_data[k]
                                                    trElem.appendChild(tdEle)
                                                }
                                                tBody.appendChild(trElem)
                                            }
                                           
                                            myTable.appendChild(tBody)
}

console.log('loaded...');
fetch('http://localhost:5050/employees').then((res) => res.json())
                                        .then(data => {populateTable(data)})
var count = 0;
document.getElementById('next-btn').onclick = () => {
    console.log('next btn clicked...');
    count += 10
    fetch(`http://localhost:5050/page?value=${count}`).then(res=>res.json())
                                           .then(data=>populateTable(data))
    var cur_first = document.getElementById('first').textContent;
    var cur_second = document.getElementById('second').textContent;
    var cur_third = document.getElementById('third').textContent;
    document.getElementById('first').textContent = parseInt(cur_first) + 1;
    document.getElementById('second').textContent = parseInt(cur_second) + 1;
    document.getElementById('third').textContent = parseInt(cur_third) + 1;

}



document.getElementById('prev-btn').onclick = () => {
    console.log('prev btn clicked...');
    count -= 10;
    if(count<0){
        return;
    }
    fetch(`http://localhost:5050/page?value=${count}`).then(res=>res.json())
                                           .then(data=>populateTable(data))

    var cur_first = document.getElementById('first').textContent;
    var cur_second = document.getElementById('second').textContent;
    var cur_third = document.getElementById('third').textContent;
    document.getElementById('first').textContent = parseInt(cur_first) - 1;
    document.getElementById('second').textContent = parseInt(cur_second) - 1;
    document.getElementById('third').textContent = parseInt(cur_third) - 1;
}



document.getElementById('first').onclick = () => {
    var cur_first = document.getElementById('first').textContent;
    var cur_second = document.getElementById('second').textContent;
    var cur_third = document.getElementById('third').textContent;
    var val = parseInt(cur_first) * 10 - 10;
    fetch(`http://localhost:5050/page?value=${val}`)
    document.getElementById('second').textContent = parseInt(cur_first) + 1;
    document.getElementById('third').textContent = parseInt(cur_second) + 1;

}
document.getElementById('first').onclick = () => {
    console.log('fist btn clicked...')
    var cur_first = document.getElementById('first').textContent;
    var cur_second = document.getElementById('second').textContent;
    var cur_third = document.getElementById('third').textContent;
    var val = parseInt(cur_first) * 10 - 10;
    fetch(`http://localhost:5050/page?value=${val}`).then((res) => res.json())
                                                    .then((data) => populateTable(data))
    document.getElementById('second').textContent = parseInt(cur_first) + 1;
    document.getElementById('third').textContent = parseInt(cur_second) + 1;

}
document.getElementById('second').onclick = () => {
    var cur_first = document.getElementById('first').textContent;
    var cur_second = document.getElementById('second').textContent;
    var cur_third = document.getElementById('third').textContent;
    var val = parseInt(cur_third) * 10 - 10;
    fetch(`http://localhost:5050/page?value=${val}`)
    document.getElementById('first').textContent = parseInt(cur_second) - 1;
    document.getElementById('third').textContent = parseInt(cur_second) + 1;

}
document.getElementById('third').onclick = () => {
    var cur_first = document.getElementById('first').textContent;
    var cur_second = document.getElementById('second').textContent;
    var cur_third = document.getElementById('third').textContent;
    var val = parseInt(cur_first) * 10 - 10;
    fetch(`http://localhost:5050/page?value=${val}`)
    document.getElementById('first').textContent = parseInt(cur_second) - 1;
    document.getElementById('second').textContent = parseInt(cur_third) - 1;

}

document.getElementById('search-btn').onclick = () => {
    const searchQuery = document.getElementById('search-query').value;
    
    fetch(`http://localhost:5050/employee/${searchQuery}`).then(res=>res.json())
                                                 .then((data) => {
                                                    if(data.length==0){
                                                        document.querySelector('table').textContent = "No Data found!"
                                                        return;
                                                    }
        
                                                    populateTable((data))})
}