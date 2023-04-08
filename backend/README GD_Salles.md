<a name="readme-top"></a>

<h1  align="center">Hi , Welcome to GD_Salles</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#how-it-started">How it started</a>
      </li>
        <li>
        <a href="#features">Features</a>
        </li>  
        <li>
 <a href="#to-start-the-project">To start the Project</a>
	</li>
	 <li>
 <a href="#public-routes">Public routes</a>
	</li>
      </ul>
    
</details>

<!-- HOW IT STARTED -->

## How it started

<p>Following a final project within the WILD CODE SCHOOL, we looked for an interesting project idea. A member of our team had already created a room reservation application in power apps. So we decided to take this idea and adapt it as a Single Page Application developed with React.
</p>
<p>  
This application meets a specific need in our company (SNCF). 
<br/> To know: the  <strong>quick search</strong> for a training room available even for a very short time (from 15 minutes to several days).</p>

<h4>What have we learned ?</h4>
<p>We were able to put a lot of theoretical knowledge into practice. In addition, we have learned to implement a standardized agile method.
We also learned the implementation of data of any kind, in the database.
We succeeded in managing the "MVC" model (Model View Controller).
User management, their registration to the modification of their account. 
And so many other things.</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h3  align="left">Languages and Tools we used :</h3>

<p  align="left"> <a  href="https://expressjs.com"  target="_blank"  rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"  alt="express"  width="40"  height="40"/> </a>  <a  href="https://git-scm.com/"  target="_blank"  rel="noreferrer"> <img  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"  alt="git"  width="40"  height="40"/> </a> <a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  target="_blank"  rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"  alt="javascript"  width="40"  height="40"/> </a> <a  href="https://www.mysql.com/"  target="_blank"  rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"  alt="mysql"  width="40"  height="40"/> </a> <a  href="https://nodejs.org"  target="_blank"  rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"  alt="nodejs"  width="40"  height="40"/> </a> <a  href="https://postman.com"  target="_blank"  rel="noreferrer"> <img  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"  alt="postman"  width="40"  height="40"/> </a> <a  href="https://reactjs.org/"  target="_blank"  rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"  alt="react"  width="40"  height="40"/> </a> <a  href="https://tailwindcss.com/"  target="_blank"  rel="noreferrer"> <img  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"  alt="tailwind"  width="40"  height="40"/> </a> </p>

<!-- FEATURES -->

## Features

<section>
<p>Here is the list of features contained in our application :</p>
<ul>
<li>Creation of a user account (register)</li>
<li>Login and Logout of a user</li>
<li>Viewing and Editing a User Profile</li>
<li>Room filtering by date and time</li>
<li>Room reservation and Deleting a reservation</li>
<li>  
Show the details of a room (address, plan, available equipment ...)</li>
<li>Add an reactive Google Maps</li>

</ul>
</section>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<section>

<!-- TO START THE PROJECT -->

## To start the Project

</section>

  <ol>
  <li>
  Clone the repository

```sh
git clone https://github.com/WildCodeSchool/2022-09-js-nantes-sncf-gd-salles-p3.git
```

  </li>
<li>

```sh
cd Projet GD_Salles/backend
```

</li>
<li>

```sh
npm install
```

</li>
<li>

```sh
npm run migrate
```

</li>
<li>

```sh
npm run dev
```

</li>
</ol>

<h1  align="left">API Routes</h1>

<!-- PUBLIC ROUTES -->

## Public routes

<h3  align="left">Routes "Location"</h3>
<p  align="left"><ins>Get/location<ins>:</p>

<p>Response:</p>
<details>
<p>

```json

[
{
"id":  number ,
"city_name":  string,
"created_at": string,
"updated_at": string
}
]
```

</p>

</details>

<h3  align="left">Routes "Room_Material"</h3>
<p  align="left"><ins>Get/room_material<ins>:</p>

<p>Response:</p>
<p>
 <details>
 
<p>

```json

[
{
"material": [
string,
string,
string
],

"name": string,
"url_picture": string,
"address": string,
"lat": number,
"lng": number,
"capacity": number
}
]
```

 </details>

<h3  align="left">Routes "Filtered"</h3>
<p  align="left"><ins>Get/filtered<ins>:</p>

<p>Response:</p>
<p>
 <details>
 
<p>

```json

[
{
"id":  number ,
"capacity":  number ,
"name":  string,
"plan":  string,
"url_picture":  string,
"city_name":  string
}
]
```

 </details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
