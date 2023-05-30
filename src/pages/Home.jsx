

const Home = () => {

    const handleClick = () => {
      return alert("Cliqué !");
    };

    return (
      <div className="Home">
        <p>Home</p>
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
          onChange={handleClick}
          />
      </div>
    );
};
  
export default Home;