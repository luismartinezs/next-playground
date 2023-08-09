export default function Form() {
  const handleSubmit = async (event: React.SyntheticEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    const target = event.target as typeof event.target & {
      first: { value: string };
      last: { value: string };
    };

    // Get data from the form.
    const data = {
      first: target.first.value,
      last: target.last.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    <form
      action="/api/form"
      method="post"
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button
        type="submit"
        className="bg-primary-500 text-white rounded py-1 px-2 font-bold"
      >
        Submit
      </button>
    </form>
  );
}
