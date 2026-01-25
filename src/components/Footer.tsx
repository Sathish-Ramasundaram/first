import { StringName } from "./types";

function Footer({name}: StringName) {
    return (
        <footer style={{background: "yellow"}}>
        <p>&copy; {name}</p>
        </footer> 
    );
}

export default Footer;

