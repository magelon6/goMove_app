import $api from "../http";

export default class AuthService {
    static async registration(userData) {
        const {email, password} = userData;
        const response = await $api.post("/registration", {email, password});
        localStorage.setItem("token", response.data.accessToken);
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
