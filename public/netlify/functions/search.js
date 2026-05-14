export default async function handler(req, res) {

    if(req.method !== "POST"){
        return res.status(405).json({
            error:"Method not allowed"
        });
    }

    try{

        const { query } = req.body;

        if(!query){

            return res.status(400).json({
                error:"No query"
            });

        }

        /* API REQUEST */

        const response = await fetch(
            "https://leakosintapi.com/",
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    token:"8867796074:gexIMidI",

                    request:query,

                    limit:100,

                    lang:"fr"

                })

            }
        );

        const data =
        await response.json();

        return res.status(200).json(data);

    }catch(error){

        return res.status(500).json({
            error:error.toString()
        });

    }

}