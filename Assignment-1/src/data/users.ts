import type { User } from "../types/User";

import alishba from "../assets/images/Alishba.jpg";
import ali from "../assets/images/Raheel.jpg";
// import sara from "../assets/images/Sara.jpg";

export const users: User[] = [
  {
    id: "1",
    name: "Alishba Tanveer",
    image: alishba,
    role: "admin",
  },
  {
    id: "2",
    name: "Raheel Irfan",
    image: ali,
    role: "member",
  },
  {
    id: "3",
    name: "Sara Ahmed",
    role: "member",
  },
];