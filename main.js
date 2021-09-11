document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random()*100000000) + '';
  const status = 'Open';

  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')){
    issues = JSON.parse(localStorage.getItem('issues'));
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();
}

const closeIssue = (id) => {
  const issues = JSON.parse(localStorage.getItem('issues'));
 const currentIssue = issues.find(issue=>issue.id==id);

 currentIssue. status= 'closed';
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}

const deleteIssue = id => {
     
console.log();
  const cart = getCart();
  const position=cart.indexOf(id);
  console.log(position);
  
 if(position ==-1){
  cart.splice(position,1);
  console.log(cart);
  const cartToString = JSON.stringify(cart);
  localStorage.setItem('issues', cartToString);
  document.getElementById('id').innerHTML='';

 }
  
 

  




  // const issues = JSON.parse(localStorage.getItem('issues'));
  // const remainingIssues= issues.filter( issue=>{
  //  parseInt(issue.id)!==parseInt(id);
  //  console.log(parseInt(issue.id)!==id);
  // })
  // console.log(remainingIssues);
 

   
  // localStorage.setItem('issues', JSON.stringify(remainingIssues));
}


function getCart() {
    const cart = localStorage.getItem('issues');
    let cartProduct;
    if (cart) {
        cartProduct = JSON.parse(cart);
    }
    else {
        cartProduct = [];
    }
    return cartProduct;
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';
  console.log(issues.length);

  for (var i = 0; i < issues.length; i++) {
    const {id, description, severity, assignedTo, status} = issues[i];

    issuesList.innerHTML +=   `<div id="id" class="well">
                              <h6>Issue ID: ${issues[i].id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="closeIssue(${issues[i].id})" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue(${issues[i].id})" class="btn btn-danger">Delete</a>
                              </div>`;
  }
}
