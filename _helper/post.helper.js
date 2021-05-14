import axios from "axios";
import { domain } from "../_type/domain.type";

let get = ()=> axios.get(domain.Node+"/api/post/get")