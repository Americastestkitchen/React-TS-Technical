## BEFORE YOU START
- This is a live coding session be prepared to screen share and solve the tasks together.
- This prompt will have been sent ahead of the interview, but during the live session we will be using a clean verison of the ```main``` branch.
- We are looking for you to show your thought process and explain solutions. A solution that works and that you can explained in detail is better than "the optimal solution" that you can't.
- Your time is valuable! IF you have a chance to look through the tasks pre-interview spend no more than an hour working on it. 

## To Get Started
1. fork the repo to your local device
2. run ```yarn``` to install node modules
3. run ```yarn dev``` to start the app


### Your Tasks
- Finish this page as described on line 34 in App.tsx. 
- When it comes to the getTrending api response think about how to account for both a successful and unsuccessul/error/empty response.
- The form input is not updating can you explain why?
- There is a performace issue on the page as well. Using hooks built-in to React can you fix it?  Is there more than one fix? Be prepared top     explain why your fix works.
- **BONUS:** If you were to attempt to minimize rerenders as a user types in the input fields how would you go about it? NO answer is off the table, except using a third party library.


### Notes - Yarrow
- I finished the page as described on line 34 by specifying the escpected result of the getTrending method to be an array of objects.
After that, it was possible to use array methods on the result,
I used the map method to render the data as a list.
- I also consolidated the IncompleteRating and CompleteRating object types into a Rating type with a new completed field (I hope that's copacetic)

- I believe that the form was not updating because the state object itself was being mutated and returned. This meant that the reference to the state was not being changed so rerenders were not occuring.
I changed the handleNameUpdate method to make a shallow copy of the state with the new changes, which then replaces the previous state.

- I got around the performance issue by memoizing the numOfFactors method in contentContainer.tsx using the useMemo hook. This has the effect of only running this function once on initial render. The dependency array is empty, so it never really reruns the function after that initial rerender. This same effect could probably be accomplished with the useCallback hook as well.

- If I was attempting to minize rerenders as a user types in the input fields, I would turn the input fields into uncontrolled inputs. 
The input fields would be directly interacted with using a ref, rather than passed down props, so the tree of components would not be constantly rerendered during user input.
I think this would be fine, but I'm not sure I would really personally opt to do this unless I really needed to minize the rerenders performed. It might make it more complicated to share and utilize the gathered form data.

- I have largely the same notes as comments in the code
