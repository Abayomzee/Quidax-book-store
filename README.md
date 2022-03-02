# Quidax Book Store Web Application

### How To Install And Run Project

1.  Ensure you have node installed on your computer
2.  Clone the repository by running
    ```
    git clone git@github.com:Abayomzee/Quidax-book-store.git
    ```
3.  open the terminal on the root folder and run:
    ```
    npm install
    ```
4.  Wait for it to install all project dependencies and run:
    ```
    npm run start
    ```
5.  The app will automatically launch in your default browser or click the port shown from the terminal

### Assumptions

1. User shouldn't be able to add item to cart more than it available quantity
2. For better user experience, user should see a more intuitive UI when waiting for a data to load e.g a loader or spinner.

### Requirements Not Covered

1. Reducing Item availability after adding or removing it from the cart, and this was due to a blocker from the endpoint that is meant to handle that.

### Issues faced

1. The only issue i faced was reducing the item available copies, this was due to a blocker from the updateBook endoint, it seems to require authentication before such action can be performed.
2. Getting the actual shadow value for components that has shadow was a little stressful because it's not available in the Design. This isn't bad though, but it might give room for differences in design and actual output.

### Constructive FeedBack

I appreciate being given this oppurtuinity, and also the level of understanding towards task completion.

Thanks
