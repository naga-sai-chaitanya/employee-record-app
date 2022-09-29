const populateTable = (data) => {

}

console.log('loaded...');
fetch('http://localhost:5050/employees').then((res) => res.json())
                                        .then(data => {
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
                                           
                                            
                                            for(var j=0;j<10;j++){
                                                const trElem = document.createElement('tr');
                                                var actual_data = data[j]
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
                                        })

document.getElementById('next-btn').onclick = () => {
    //document.getElementById('prev-btn').textContent
    document.getElementById('first').textContent = 2
    document.getElementById('second').textContent = 3
    document.getElementById('third').textContent = 4
    fetch(`http://localhost:5050?value=10`)
    //document.getElementById('next-btn').textContent



}

document.getElementById('first').onclick = () => {
    
}

document.getElementById('second').onclick = () => {
    
} 

document.getElementById('third').onclick = () => {
    
}

document.getElementById('next-btn').onclick = () => {
    
}

