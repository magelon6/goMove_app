import $api from "../http";

export default class AuthService {
    static async registration(userData) {
        const {name, email, password} = userData;
        const response = await $api.post("/registration", {name, email, password});
        localStorage.setItem("token", response.data.accessToken);
        console.log(response);
        return response;
    }

    static async login(userData) {
        const {email, password} = userData;
        const response = await $api.post("/login", {email, password});
        localStorage.setItem("token", response.data.accessToken);
        return response;
    }

    static async logout() {
        await $api.post("/logout");
        localStorage.removeItem("token");
    }

}
