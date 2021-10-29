async function apiCall(event) {
  event.preventDefault();
  let ApiText = document.getElementById("sent").value;
  if (Client.nameChecker(ApiText)) {
    try {

      document.getElementById("apiCallBtn").disabled = true;
      document.getElementById("thinking").style.backgroundImage= "url('./assets/images/bg.gif')";

      console.log("::: API Called :::");     
      const cloudApi = await fetch(`http://localhost:8081/scan/${ApiText}`);
      const CloudResponse = await cloudApi.json();
   
      document.getElementById("ag").innerHTML = CloudResponse.agreement;
      document.getElementById("sub").innerHTML = CloudResponse.subjectivity;
      document.getElementById("conf").innerHTML = CloudResponse.confidence;
      document.getElementById("ir").innerHTML = CloudResponse.irony;
      
      document.getElementById("thinking").style.backgroundImage= "url('./assets/images/bg1.gif')";
      document.getElementById("responceDiv").style.visibility = 'visible';
      document.getElementById("apiCallBtn").disabled = false;
    } catch (err) {
      document.getElementById("thinking").style.backgroundImage= "url('./assets/images/bg1.gif')";
      console.log({"::: Error :::":err.message});
      document.getElementById("apiCallBtn").disabled = false;
      document.getElementById("responceDiv").style.visibility ='hidden';
      alert("Error: ",err.message);
    }
  } else {
    document.getElementById("thinking").style.backgroundImage= "url('./assets/images/bg1.gif')";
    alert("Error: Request with Blancked field");
  }
}
export { apiCall };
