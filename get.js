const tokens = {
    access: "5e3753525d33428af5079d49a986e9f350433dd22ecad9034e406741a65cd5e2",
    secret: "2a08d6f19874b56e419b1f5ba4eb77555f664ebd9d36a655c3cf93f232758f6c",
}

console.log(tokens.access)

const axios = require('axios').default;

axios.get('https://api.usplash.com')