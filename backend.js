
        let mybtn= document.getElementById("loadData")
        mybtn.addEventListener("click",displayData)
       async function apiCall()
       {
        let response = await fetch('http://localhost:3010/data')
        let mydata = await response.json()
        return mydata
       }
       async function displayData()
       {
        try{
        let mydata2= await apiCall();
        let dataContainer = document.getElementById("dataContainer")
        dataContainer.innerHTML = mydata2.map(
            item => 
                `<p>ID: ${item.id}</p>
                <p>Name: ${item.name}</p>
                <p>Description: ${item.description}</p>
                `
            
            
        ).join('');
        }
        catch(error){
            alert(`Something is not working properly ${error}`)
        }
       }
       