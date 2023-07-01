import styles from "./styles.css";
import { useTranslation } from "react-i18next";

const Registration = () => {
    const {t} = useTranslation("form", { keyPrefix: 'fields' });
    return <>
        <div className="container">
            <form id="registration-form">
                <div className="form-group">
                    <label for="email">{t("email.label")}:</label>
                    <input type="email" id="email" name="email" required placeholder={t("email.placeholder")}/>
                </div>

                <div className="form-group">
                    <label for="name">{t("name.label")}:</label>
                    <input type="text" id="name" name="name" required placeholder={t("email.placeholder")}/>
                </div>

                <div className="form-group">
                    <label for="password">{t("password.label")}:</label>
                    <input type="password" id="password" name="password" required placeholder={t("password.placeholder")}/>
                </div>

                <div className="form-group">
                    <button type="submit">{t("button.label")}</button>
                </div>
            </form>
        </div>
    </>
}

export default Registration;