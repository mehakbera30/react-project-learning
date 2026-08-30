import React, { Fragment } from 'react'
import { use } from 'react'
import "./App.css";
import Cardproject from '../prop_project/Cardproject';

const App = () => {

  const jobs = [
    {
        brandLogo: "data:image/png;base64,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",
        companyName: "Google",
        datePosted: "5 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$55 - $70",
        location: "Mumbai, India"
    },
    {
        brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
        companyName: "Microsoft",
        datePosted: "1 week ago",
        post: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$40 - $55",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
        companyName: "Meta",
        datePosted: "3 days ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$50 - $65",
        location: "Hyderabad, India"
    },
    {
        brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
        companyName: "Amazon",
        datePosted: "10 days ago",
        post: "Backend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$35 - $50",
        location: "Delhi, India"
    },
    {
        brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
        companyName: "Apple",
        datePosted: "2 weeks ago",
        post: "iOS Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$60 - $75",
        location: "Mumbai, India"
    },
    {
         brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
        companyName: "Netflix",
        datePosted: "4 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$65 - $80",
        location: "Bangalore, India"
    },
    {
         brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
        companyName: "NVIDIA",
        datePosted: "1 week ago",
        post: "AI Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$45 - $60",
        location: "Pune, India"
    },
    {
        brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
        companyName: "Tesla",
        datePosted: "8 days ago",
        post: "Software Developer",
        tag1: "Part Time",
        tag2: "Junior Level",
        pay: "$35 - $45",
        location: "Delhi, India"
    },
    {
        brandLogo: "data:image/png;base64,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",
        companyName: "Adobe",
        datePosted: "3 weeks ago",
        post: "UI/UX Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$50 - $65",
        location: "Noida, India"
    },
    {
        brandLogo: "data:image/png;base64,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",
        companyName: "IBM",
        datePosted: "5 days ago",
        post: "Cloud Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$40 - $55",
        location: "Chennai, India"
    }
];

console.log(jobs);
  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        return <div key={idx}>
         <Cardproject company={elem.companyName} post = {elem.post} datePosted = {elem.datePosted} 
        tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} brandLogo = {elem.brandLogo}/>
        </div>
      })}
     
    </div>
  )
}

export default App


// how to create vite cmd = npm run vite

// rafce is the react arrow function, in this we create a function and we can only return only one thing not
// multiple things

// {/* <> </> these are the empty Fragment in the react which is use to return the multiple things, we can either use
// one div as the parent and the other function inside the two child div  */}
 
// with parent and multiple child
// return (
//     <div id="grandfather">
//       i m u r grandfather
//       <div id = "father"> i m u r father </div>
//       <div id="uncle"> i m u r uncle</div>
//     </div>
//   )

// with Fragment (empty tag) and multiple child
// import React, { Fragment } from 'react'
// import { use } from 'react'

// const App = () => {
//   return (
//     <>
//       i m u r grandfather
//       <div id = "father"> i m u r father </div>
//       <div id="uncle"> i m u r uncle</div>
//     </>
//   )
// }

//props : its is like a function in which we pass the pass to props
// the transfer of data is only possible from main to components not <vice-versa>
// in app we pass the value to props and in component the value is obtain
// for example :-
//  <div className='parent'>
//         {/* <Newcard/>
//         <Newcard/>
//         <Newcard/> */}
//         <Newcard name="mehak" age={18} img={pika}/>
//         <Newcard name="salani" age={21} img={spider}/>
//     </div>

