import type { LinkResponse } from "$lib/type/link";


export const convertLinkApi = async (url:string):Promise <LinkResponse>=>{
      const formData = new URLSearchParams();
  formData.append("url", url);

const res = await fetch("http://127.0.0.1:5001/shorten",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });if(!res.ok){
    const text = await res.text();
    console.log("frontend error body:", text);
    throw new Error(`Failed to fetch: ${res.status}`);
  }


  const data = await res.json();
  console.log("cleanuri data =", data);
  return data;}