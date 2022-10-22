import { defineStore } from "pinia";
import { setSession, getSession } from "@/modules/session";

const sampleData = { name: "Kurt Cobain", status: "Web Programmer", img: "/img/user-pic-sample.webp", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS3VydCBDb2JhaW4iLCJzdGF0dXMiOiJXZWIgUHJvZ3JhbW1lciJ9.L_nMx2mPaA8F1M3xN5-BWO9tqNvC78sWlWzqp3hON78" };

export const useUserStore = defineStore("user", {
	state: () => ({
		user: {},
		token: ""
	}),
	getters: {
		hasLogin: state => state.token.length > 0
	},
	actions: {
		login(username, password) {
			if(username == "user123" && password == "user123") {
				this.user.name = sampleData.name;
				this.user.status = sampleData.status;
				this.user.img = sampleData.img;
				this.token = sampleData.token;

				setSession("data-user", JSON.stringify(sampleData));
				return true;
			}

			return false;
		},
		checkFromSession() {
			let sessionUser = getSession("data-user");
			if(!sessionUser)
				return;

			sessionUser = JSON.parse(sessionUser);
			this.user.name = sessionUser.name;
			this.user.status = sessionUser.status;
			this.user.img = sessionUser.img;
			this.token = sessionUser.token;
		}
	}
});