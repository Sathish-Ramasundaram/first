type StoreName = {
    name: string;
};

function Home({name}: StoreName) {
    return (
        <div>
        <p>Welcome to {name} (from component & props) </p>
        </div>
    );
}

export default Home;