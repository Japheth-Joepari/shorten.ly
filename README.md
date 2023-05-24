![shorten](https://github.com/Japheth-Joepari/shorten.ly/assets/51114866/7ee0da65-d832-4b55-8ae7-a4ce1923d781)
# shorten.ly
# URL Shortener App

This is a simple URL Shortener application built using TypeScript and React. It allows users to shorten long URLs into concise and shareable links using the is.gd PHP API.

## Features

- Shorten long URLs into compact links.
- Option to provide custom short URLs.
- Copy shortened links to the clipboard.
- Delete previously generated shortened links.

## Technologies Used

- React
- TypeScript
- is.gd PHP API
- axios
- Firebase for authentication

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Japheth-Joepari/shorten.ly.git
   ```

2. Install the dependencies:

   ```
   cd shorten.ly
   npm install
   ```

3. Configure the is.gd API endpoint in the code:

   Open the `context/ShortenContext.tsx` file and locate the `shorten` function. Replace the API endpoint with the appropriate is.gd PHP API endpoint.

4. Start the development server:

   ```
   npm run dev
   ```

5. Open the application in your browser:

   ```
   http://localhost:5173
   ```

## Usage

1. Enter the original URL that you want to shorten in the input field.
2. Optionally, provide a custom short URL.
3. Click the "Shorten" button to generate the shortened link.
4. The shortened link will be displayed below.
5. You can copy the link to the clipboard using the "Copy" button.
6. To delete a previously generated link, click the "Delete" button next to it.

## Contributions

Contributions to this project are welcome. If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
