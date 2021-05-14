import axios from "axios";
import { domain } from "../_type/domain.type";

let getProvince =()=> fetch(domain.Node+"/api/location/province",{method:"GET"}).then(data=>data.json());

export const location= {
    getProvince:getProvince
}