//synchronous code

// console.log("A"); // 1
// for (let i = 0; i < 10; i++) {
//   // busy-work loop
//   console.log(i);
// }
// console.log("B"); // 2
// console.log("C");

// Prints A
// Runs loop to completion (blocking)
// Prints B
// Prints C

///////////////////////////////////////////////////////////////////////

//asynchronous code
// console.log("1");

// setTimeout(() => {
//   console.log("2 (after 5 seconds)");
// }, 5000);

// console.log("3");

// Execution order:

// Prints 1

// Schedules the timer, continues immediately

// Prints 3

// ~1 second later, prints 2 (after 1 second)

// The setTimeout callback runs after the main thread is free and the timer expires.

////////////////////////////////////////////////////////////////////////////////////
// Asynchronous Callback function example
// This example demonstrates how to use a callback function to handle asynchronous operations.

// console.log("This is the first line of code");

// function fetchData(callback) {
//   // Simulate an asynchronous operation like fetching data from an API
//   setTimeout(() => {
//     const data = "Some fetched data";
//     callback(data); // Execute the callback with the data
//   }, 5000); // Simulate a 5-second delay
// }

// function processData(receivedData) {
//   console.log("Processed Data:", receivedData);
// }

// console.log("Starting data fetch...");
// fetchData(processData); // Pass processData as the callback

// console.log("Continuing with other tasks...");
// console.log("Do you understand how a callback function works now?");

/////////////////////////////////////////////////////////////////////////////////////
//Callback hell example
// This example demonstrates callback hell, where multiple nested callbacks make the code hard to read.

// Let's imagine we're building a simple app that needs to do three things in sequence, where each step requires data from the previous step. For example:

// Fetch a User ID: We first need to get a user's ID.

// Fetch User Details: Once we have the ID, we use it to get the full user details.

// Fetch User Posts: After we have the user details, we then fetch all the posts made by that user.

// console.log("Welcome to our Sequential Data Fetcher!");

// // Step 1: Simulate fetching a User ID
// function fetchUserId(callback) {
//   console.log("Step 1: Fetching user ID...");
//   setTimeout(() => {
//     const userId = "user123"; // Simulating a fetched user ID
//     console.log("Step 1: User ID fetched:", userId);
//     callback(userId); // Pass the user ID to the next step
//   }, 1000); // 1-second delay
// }

// // Step 2: Simulate fetching User Details using the User ID
// function fetchUserDetails(userId, callback) {
//   console.log(`  Step 2: Fetching details for user ID: ${userId}...`);
//   setTimeout(() => {
//     const userDetails = {
//       id: userId,
//       name: "Alice",
//       email: "alice@example.com",
//     };
//     console.log("  Step 2: User details fetched:", userDetails);
//     callback(userDetails); // Pass the user details to the next step
//   }, 1500); // 1.5-second delay
// }

// // Step 3: Simulate fetching User Posts using User Details (or user ID)
// function fetchUserPosts(userDetails, callback) {
//   console.log(`    Step 3: Fetching posts for user: ${userDetails.name}...`);
//   setTimeout(() => {
//     const userPosts = [
//       { id: 101, title: "My first post" },
//       { id: 102, title: "Adventures in Node.js" },
//     ];
//     console.log("    Step 3: User posts fetched:", userPosts);
//     callback(userPosts); // Pass the posts to the final handling
//   }, 2000); // 2-second delay
// }

// function processData(receivedData) {
//   console.log("Processing:", receivedData);
// }

// console.log("Initiating sequential data fetching process...");

// // This is where Callback Hell begins!
// fetchUserId((processData) => {
//   fetchUserDetails(userId, (processData) => {
//     fetchUserPosts(userDetails, (processData) => {
//       console.log("\nAll data fetched successfully!");
//       console.log("Final User Details:", userDetails);
//       console.log("Final User Posts:", userPosts);
//       console.log("\nDo you see the nested structure now?");
//     });
//   });
// });

// console.log("\nWhile the fetching is happening, our main program continues...");
// console.log("This message appears immediately after initiating the fetch!");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//syntax of a Promise
// const myPromise = new Promise(function(resolve, reject) => {
//     // Do async operation
//     if (operationSuccessful) {
//         resolve(result);    // Promise fulfilled
//     } else {
//         reject(error);      // Promise rejected
//     }
// });

// 1. new Promise(...): This creates a new Promise object.
// 2. function(resolve, reject) { ... }: This is the "executor" function, which is executed immediately when the Promise is created.
// 3. resolve: This is a function that you call when the asynchronous operation successfully completes. You can pass a value to resolve, which will be the fulfillment value of the promise.
// 4. reject: This is a function that you call when the asynchronous operation encounters an error. You can pass an error object to reject, which will be the rejection reason of the promise.
// 5. Inside the executor function: This is where you place the asynchronous code that will eventually lead to either a successful outcome (calling resolve) or an error (calling reject).

// Promise starts as "pending"
// Eventually becomes either "fulfilled" or "rejected"

// Example of Promises
// This example demonstrates how to use Promises to handle asynchronous operations in a more readable way.

// let myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation (e.g., fetching data)
//   setTimeout(() => {
//     let success = false; // Change to false to see rejection
//     if (success) {
//       resolve("Data successfully fetched!");
//     } else {
//       reject("Error: Failed to fetch data.");
//     }
//   }, 5000);
// });

// console.log("Promise created, waiting...");
// console.log(myPromise);

// Consuming the Promise:
// After creating a promise, you typically use the .then() and .catch() methods to handle its eventual fulfillment or rejection

// myPromise
//   .then((message) => {
//     console.log(message); // Executed if the promise is fulfilled
//   })
//   .catch((error) => {
//     console.error(error); // Executed if the promise is rejected
//   })
//   .finally(() => {
//     console.log("Promise operation completed."); // Always executed
//   });

//Promise Chaining
// function authenticateUser(email, password) {
//     return getUserByEmail(email)
//         .then(user => {
//             if (!user) {
//                 throw new Error("User not found");
//             }
//             return comparePasswords(password, user.hashedPassword);
//         })
//         .then(isValidPassword => {
//             if (!isValidPassword) {
//                 throw new Error("Invalid password");
//             }
//             return generateAuthToken(user);
//         })
//         .then(token => {
//             return {
//                 success: true,
//                 token: token,
//                 message: "Login successful"
//             };
//         })
//         .catch(error => {
//             return {
//                 success: false,
//                 error: error.message
//             };
//         });
// }

//How to handle errors properly in promise chains

//multiple .catch() handlers
// getUserById(123)
//     .then(user => {
//         if (!user.isActive) {
//             throw new Error("Account is deactivated");
//         }
//         return user;
//     })
//     .catch(error => {
//         // Handle specific errors
//         if (error.message.includes("not found")) {
//             return createGuestUser();  // Recovery strategy
//         } else {
//             throw error;  // Re-throw to next catch
//         }
//     })
//     .then(user => {
//         return getUserPermissions(user.id);
//     })
//     .catch(error => {
//         // Handle any remaining errors
//         console.log("Final error handler:", error.message);
//         return { error: true, message: "Unable to load user data" };
//     });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//async/await syntax
// This example demonstrates how to use async/await to handle asynchronous operations in a more readable way

//async demonstrated
// async function fetchData() {
//   return "Data fetched successfully!";
// }

// fetchData().then(message => console.log(message)); // Output: Data fetched successfully!

//async await demonstrated
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"); // Pauses execution until fetch completes
    const data = await response.json(); // Pauses execution until JSON parsing completes
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

//Promise Version vs Async/Await Version:
// Using Promises (good, but verbose):
// function getUserData(userId) {
//     return getUserProfile(userId)
//         .then(profile => {
//             return getUserPosts(profile.id);
//         })
//         .then(posts => {
//             return {
//                 profile: profile,
//                 posts: posts
//             };
//         })
//         .catch(error => {
//             throw new Error(`Failed to get user data: ${error.message}`);
//         });
// }

// Using Async/Await (cleaner):
// async function getUserData(userId) {
//     try {
//         const profile = await getUserProfile(userId);
//         const posts = await getUserPosts(profile.id);
//         return {
//             profile: profile,
//             posts: posts
//         };
//     } catch (error) {
//         throw new Error(`Failed to get user data: ${error.message}`);
//     }
// }

//Real-world illustration of how async/await is used in the backend world
// Express.js route handler
// app.post('/register', async (req, res) => {
//     try {
//         // Validate input data
//         const validationResult = await validateRegistrationData(req.body);
//         if (!validationResult.isValid) {
//             return res.status(400).json({ error: validationResult.errors });
//         }

//         // Check if user already exists
//         const existingUser = await findUserByEmail(req.body.email);
//         if (existingUser) {
//             return res.status(409).json({ error: "Email already registered" });
//         }

//         // Hash password
//         const hashedPassword = await hashPassword(req.body.password);

//         // Create user in database
//         const newUser = await createUser({
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//         });

//         // Send welcome email (don't wait for it)
//         sendWelcomeEmail(newUser.email).catch(error => {
//             console.log("Welcome email failed:", error);
//         });

//         // Return success response
//         res.status(201).json({
//             success: true,
//             user: {
//                 id: newUser.id,
//                 name: newUser.name,
//                 email: newUser.email
//             }
//         });

//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

//Async/Await Best Practices
//How to write clean, efficient async code
//1. Always Use Try/Catch:
// BAD - Unhandled promise rejection:
// async function badExample() {
//     const user = await getUserById(123);  // What if this fails?
//     return user.name;
// }

// GOOD - Proper error handling:
// async function goodExample() {
//     try {
//         const user = await getUserById(123);
//         return user.name;
//     } catch (error) {
//         console.error("Failed to get user:", error);
//         throw new Error("User data unavailable");
//     }
// }

//2. Don't Await Unnecessarily:
// BAD - Waiting for operations that could run in parallel:
// async function slowVersion() {
//     const user = await getUser();
//     const posts = await getPosts();        // Could start immediately
//     const friends = await getFriends();    // Could start immediately
//     return { user, posts, friends };
// }

// GOOD - Parallel operations:
// async function fastVersion() {
//     const userPromise = getUser();
//     const postsPromise = getPosts();
//     const friendsPromise = getFriends();

//     const [user, posts, friends] = await Promise.all([
//         userPromise,
//         postsPromise,
//         friendsPromise
//     ]);

//     return { user, posts, friends };
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Using fetch() API to make HTTP requests
// This example demonstrates how to use the fetch() API to make HTTP requests in JavaScript.

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // Or .text() for plain text, .blob() for binary data, etc.
//   })
//   .then((data) => {
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// - fetch(url, options):
// Initiates a request to the specified url. The options object allows customization of the request (e.g., method, headers, body).
// - .then(response => ...):
// Handles the initial response object. It's crucial to check response.ok to ensure the request was successful before processing the data.
// - response.json():
// Parses the response body as JSON. Other methods like response.text() are available for different data types.
// . .then(data => ...):
// Processes the parsed data.
// - .catch(error => ...):
// Catches any errors that occur during the fetch operation or subsequent promise chain.

//Using axios to make HTTP requests
// This example demonstrates how to use the axios library to make HTTP requests in JavaScript.

// import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log('Data received:', response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// axios.get(url): Sends a GET request. Axios also provides methods for other HTTP verbs like post, put, delete, etc.
// .then(response => ...): Handles the response. Axios automatically parses JSON and places the data in response.data.
// .catch(error => ...): Catches any errors.
