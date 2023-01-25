import axios from "axios";

// const BaseUrl="https://ada4-122-161-90-159.in.ngrok.io/"
// const BaseUrl="https://obenev-be.antino.ca"

const BaseUrl="https://api.obenev.com"

// const BaseUrl="https://5ea0-122-161-90-159.in.ngrok.io"

console.log(localStorage.getItem("myToken"))

// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmVhNTBlODQ5NTI3YmJjOWFlNWQxMmYiLCJpYXQiOjE2NTk1MjMzMDQsImV4cCI6MTY1OTUzMDUwNH0.fBtg-akSVqVI7lF_qDzIWOdPAfxjTCKlqmI83k9Wmnw";

export const publicRequest=axios.create({
    baseURL:BaseUrl,
    // headers:{Authorization:`Bearer ${token}`}
})





