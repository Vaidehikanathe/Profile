import React from 'react';
import profile from './profile';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
      <div class="header">
     
      </div>
      <div class="headtext"><b>SuperVc</b></div>
      <div class="cardbg ">

        <div class="card text-center" >

          <div class="card-body">
            <div class="circle"></div>

            <div class="name"><b>Name Surname</b></div>
            <div class="position">Venture Partner</div>
            <div class="location">Pune, Maharashtra, India</div>
            <div class="line"></div>
            <div class="bio"><b>Bio</b></div>
            <div class="bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
          </div>
          
          
        </div>
        <div class="Portfolio"><b>Portfolio</b></div>
        <table class="table table-bordered">
          <thead>

            <tr>
              
              <th scope="col" >Sr.no</th>
              <th scope="col">Company name</th>
              <th scope="col">Company website</th>

            </tr>

          </thead>
          <tbody>
            <tr>
              <td scope="row" class="sno">1</td>
              <th>Company 1</th>

              <td class="link1">Link 1</td>


            </tr>
            <tr>
              <td scope="row" class="sno">2</td>
              <td class="c1">Company 2</td>
              <td class="link2">Link 2</td>

            </tr>
            <tr>
              <td scope="row" class="sno">3</td>
              <td class="c1">Company 3</td>
              <td class="link2">Link 3</td>

            </tr>
            <tr>
              <td scope="row" class="sno">4</td>
              <td class="c1">Company 4</td>
              <td class="link2">Link 4</td>

            </tr>
            <tr>
              <td scope="row" class="sno">5</td>
              <td class="c1">Company 5</td>
              <td class="link2">Link 5</td>

            </tr>
          </tbody>
        </table>


        <button class="btn btn-primary" type="submit">Submit Pitch</button>




      </div>
    </div>

  );
}

export default App;
