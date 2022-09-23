import bcrypt from "bcryptjs"

const users = [
    {
        userName: "eestrada",
        email: "eestrada@example.com",
        password: bcrypt.hashSync("12345678", 10),
        countryCode: 52,
        phone: 3319439157,
        name: "Elias",
        lastname: "Estrada",
        dateOfBirth: new Date(1997, 10, 14),
        country: "Mexico",
        nickname: "Pollo",
        description: "Abogado, apasionado por viajar y probar nuevas experiencias",
        idPhoto: "/images/id/eestrada.jpg",
        profilePicture: "/images/pp/eestrada.jpeg",
    },
    {
        userName: "jpreciado",
        email: "jpreciado@example.com",
        password: bcrypt.hashSync("12345678", 10),
        countryCode: 52,
        phone: 3310196792,
        name: "Jaime",
        lastname: "Preciado",
        dateOfBirth: new Date(1997, 3, 21),
        country: "Mexico",
        nickname: "James",
        description: "Ingeniero en Colores, apasionado por combinar y descubrir nuevos colores",
        idPhoto: "/images/id/jpreciado.jpg",
        profilePicture: "/images/pp/jpreciado.jpg",
    },
]

export default users

