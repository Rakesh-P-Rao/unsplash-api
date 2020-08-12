// unplash acess key -  wU7fN5iwZkCBaqd943nm5WLXu4_PvL-96fR7sXqe9wo

import axios from "axios";

// axios create method is providing basic config....
export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID wU7fN5iwZkCBaqd943nm5WLXu4_PvL-96fR7sXqe9wo",
    }
})