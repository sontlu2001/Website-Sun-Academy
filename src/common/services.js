import axios from "axios";

function getCourse(){
    return axios.get("/courses");
}

export default {

}