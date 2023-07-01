import styles from "./styles.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {

    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event?.target?.value || 'en')
    }

    return <>
        <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item">Almighty Tricks</li>
                <li class="nav-item" onChange={(e) => handleChange(e)}>
                    <select id="select-box">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="es">Spanish</option>
                    </select>
                </li>
            </ul>
        </nav>

    </>
}

export default NavBar;