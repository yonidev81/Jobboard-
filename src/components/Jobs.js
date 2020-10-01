import React from "react";
import Job from "./Job"

const Jobs  = () => {
  return <div className ="jobs" >
<Job className = "red" title = "UX Designer"  contractType= "Permanent" country = "Australia" city = "Sydney"/>

<Job className = "orange" title = "Product owner"  contractType= "Permanent" country = "France" city = "Paris"/>

<Job className = "yellow" title = "Full Stack web Developer"  contractType= "Freelance " country = "Brazil" city = "Rio de Janeiro beach"/>

<Job className = "blue" title = "Front web developer"  contractType= "freelance" country = "Israel" city = "Tel Aviv"/>

<Job className = "pink" title = "Back web developer React"  contractType= "freelance " country = "Australia in a Habad association" city = "Sydney"/>

<Job className = "red" title = "Product owner"  contractType= "freelance" country = "Morocco" city = "Casablanca in the beach"/>

<Job className = "orange" title = "Full Stack web dev Javascript"  contractType= "permanent " country = "Florida" city = "Coco Beach"/>

<Job className = "yellow" title = "Cyber analyst for the Shabak"  contractType= "Mission" country = "Israel" city = " Negev desert"/>

<Job className = "blue" title = "Cyber analyst for the Mossad"  contractType= "Freelance" country = "Israel" city = "Herzlya in front of the beach"/>
  </div>;
}

export default Jobs ;