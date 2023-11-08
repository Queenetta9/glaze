
import { NextResponse } from "next/server";
import axios from "axios";

async function POST(request) {
     const params = await request.payload;

     // params.email
     // params.password
     try{
          const response = await axios.post("https://reqres.in/api/login", params)
          const res = response.data
          console.log(res);

          if 

     } catch (err) {
          console.log("There was an error", err);
     }

}