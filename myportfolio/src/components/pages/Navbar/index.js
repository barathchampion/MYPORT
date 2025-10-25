import React from "react";
import { button } from "bootstrap";
import NavWrapper from "./style";


const NavBar = () => {

   return (
     <NavWrapper>
       <div class="d-flex justify-content-evenly p-2 navbarstyle">
         <div>
           <img
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAbNJREFUWEdjZCARSEnJ/ydRC4ryZ88eMpKinyTFIIMH3IH8QmZYQ4ib4yXY45MmLSAlADDU5uUlgMW+/hAH0x/fncIbSBiSg9aBMIe1de5C8fWWnX/B/IvHjMD0hg17yArBR4+egPXBQlDf6hyYf2yfJ96QhIfgkHPgtZvsYJ/de/ANbwhKSUHS0rNnkDQKA2ZmqijJZ82a/eC0jR6CMPW4QhJnCA5bB8LSWkiII94QDIy6gRJDuEKS6iE4aByIK+2R6kBYyMHSOnpaJDsEB70DcRWGgyYEB70DYSFFarUCKwdhuZhmaXDQOBDdh7A6mdSQg6lHDzmKQ3DIOJDcECNWH9nlILEWUKqOYgcumWdPqRtQ9Fs5bQfzlRS4UOpkkmsSmKmD1oEwh509tZYqIXjt2h2wObEJ5WA6JukgZSE4aB0I64vA0gQsBJWVZcgKybt3IX0SqoXgqAMpTYOjITgagiTm5ZGTi3GV7Og1CbHlIXrIwQIeVpPA6mSi+8WD3oG4fLR4QSeJqQ6/crJDcNA6EOZfXAOYVA0+PIahj7gSPcI6aBxIL4cQaw/Jo/zEGkwtdQBrbfJHElv02wAAAABJRU5ErkJggg=="
             alt="file"
           />
           <span>
             barathlin.dev
           </span>
         </div>
         <div class="d-flex justify-content-evenly gap-2">
           <button class="btn btn-primary">Home</button>
           <button class="btn btn-primary pl-3">About</button>
         </div>
       </div>
     </NavWrapper>
   );
}
export default NavBar