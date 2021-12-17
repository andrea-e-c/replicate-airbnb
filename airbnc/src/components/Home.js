
function Home() {
  return (
    <div className="home">
      <h1>Where would you like to go today?</h1>
      <form>
        <label>
          Destination:
          <input type="text" name="destination" />
        </label>
        <label>
            Checkin Date:
            <input type="date" name="date" />
        </label>
        <label>
            Checkout Date:
            <input type="date" name="date" />
        </label>
        <label>
            Number of travelers:
            <input type="number" name="travelers" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home